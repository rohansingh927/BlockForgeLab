import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <form className="bg-light p-8 rounded-lg shadow-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="name" className="block font-montserrat font-medium mb-2">Your Name</label>
        <input 
          type="text" 
          id="name" 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.name ? "border-red-500" : "border-gray-300"}`}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block font-montserrat font-medium mb-2">Email Address</label>
        <input 
          type="email" 
          id="email" 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.email ? "border-red-500" : "border-gray-300"}`}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block font-montserrat font-medium mb-2">Subject</label>
        <input 
          type="text" 
          id="subject" 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.subject ? "border-red-500" : "border-gray-300"}`}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="mt-1 text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block font-montserrat font-medium mb-2">Your Message</label>
        <textarea 
          id="message" 
          rows={5} 
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${errors.message ? "border-red-500" : "border-gray-300"}`}
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <button 
        type="submit" 
        className="w-full bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-montserrat font-medium transition-all flex justify-center items-center"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? (
          <>
            <span className="mr-2">Sending...</span>
            <i className="fas fa-spinner fa-spin"></i>
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default ContactForm;
