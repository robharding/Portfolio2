"use client";

import React, { FC, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { cn } from "@/lib/utils";

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

  const [buttonDown, setButtonDown] = useState<boolean>(false);

  const onClick = async () => {
    setButtonDown(true);
    await setTimeout(() => {
      setButtonDown(false);
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
          onFocus={onClick}
          className={
            cn(
              "cursor-pointer font-semibold py-2 px-6 rounded-lg flex gap-2 select-none duration-200 shadow-custom -translate-x-1 -translate-y-1 bg-slate-50 hover:bg-white",
              buttonDown && "translate-x-0 translate-y-0 shadow-customDown"
            ) + " border-slate-900 border border-1"
          }
        >
          <Send className="h-4 w-4 my-auto" />
          Send
        </button>
      </form>
    </Form>
  );
};

export default ContactForm;
