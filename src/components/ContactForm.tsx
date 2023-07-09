"use client";

import React, { FC, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Send } from "lucide-react";

const formSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(4).max(100),
  content: z.string().min(12),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  const onFocus = async () => {
    await setTimeout(() => {
      buttonRef?.current?.blur();
    }, 300);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Message Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          ref={buttonRef}
          onFocus={onFocus}
          className="border-sky-400 font-semibold border border-1 py-2 px-4 rounded-lg flex gap-2 select-none duration-200 shadow-custom focus:shadow-customFocus -translate-x-1 -translate-y-1 focus:translate-x-0 focus:translate-y-0 bg-slate-50 hover:bg-slate-100"
        >
          <Send className="h-4 w-4 m-auto" />
          Send
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
