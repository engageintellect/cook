"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import PocketBase from "pocketbase";

// Initialize PocketBase client
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL);

// Define the form schema with email validation
const FormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const record = await pb.collection("cook_form_submissions").create(data);
      toast({
        variant: "success",
        title: "Email submitted successfully!",
        description: (
          <>
            <pre className="my-2 w-full rounded-md bg-background p-4">
              <code className="text-neutral-500 dark:text-neutral-300">
                {record.email}
              </code>
            </pre>
            <p className="font-semibold text-lg">
              We&apos;ll be in touch soon.
            </p>
          </>
        ),
      });
      form.reset(); // Reset form on successful submission
    } catch (error) {
      console.error("Error creating record:", error);
      toast({
        variant: "destructive",
        title: "Failed to submit email. It may already exist.",
        description: "Please try again.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="flex items-center gap-2 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full relative">
                <FormControl className="w-full">
                  <Input
                    className="w-full border-neutral-500 text-base" // Ensure font size is at least 16px
                    placeholder="email@domain.com"
                    {...field}
                  />
                </FormControl>
                <div className="absolute -bottom-6 z-[-1]">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="text-base">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
