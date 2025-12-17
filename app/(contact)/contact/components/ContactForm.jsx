"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const formRef = useRef();

  const onSubmitHandler = async (data) => {
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmitHandler)}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name - Use 'from_name' for EmailJS */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-muted-foreground block"
            >
              Your Name
            </label>
            <Input
              {...register("from_name", { required: "Name is required" })}
              id="name"
              type="text"
              name="from_name"
              placeholder="Ishadh Ifham"
              className="rounded-lg border-primary/20 w-full focus:ring-2 focus:ring-primary focus:border-primary"
              disabled={isSubmitting}
            />
            {errors.from_name && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.from_name.message}
              </span>
            )}
          </div>

          {/* Email - Use 'from_email' or 'reply_to' for EmailJS */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-muted-foreground block"
            >
              Email
            </label>
            <Input
              {...register("from_email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              id="email"
              type="email"
              name="from_email"
              placeholder="ishadh@example.com"
              className="rounded-lg border-primary/20 w-full focus:ring-2 focus:ring-primary focus:border-primary"
              disabled={isSubmitting}
            />
            {errors.from_email && (
              <span className="text-xs text-red-500 block mt-1">
                {errors.from_email.message}
              </span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-muted-foreground block"
          >
            Message
          </label>
          <Textarea
            {...register("message", { required: "Message is required" })}
            id="message"
            name="message"
            placeholder="Write your message here..."
            className="rounded-lg border-primary/20 min-h-[150px] w-full resize-y focus:ring-2 focus:ring-primary focus:border-primary"
            disabled={isSubmitting}
          />
          {errors.message && (
            <span className="text-xs text-red-500 block mt-1">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>

      <Button
        type="submit"
        className="w-full rounded-xl py-6 text-base font-semibold mt-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
