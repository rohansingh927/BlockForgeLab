import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

const Footer = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: NewsletterFormData) => apiRequest("POST", "/api/newsletter", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    mutation.mutate(data);
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="h-10 w-48 bg-white text-black font-montserrat font-bold text-xl flex items-center justify-center rounded">
                BlockForgeLab
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Leading blockchain development company providing innovative solutions for businesses seeking to leverage decentralized technology.
            </p>
            <div className="text-gray-400 mb-6">
              <p className="mb-2"><i className="fas fa-map-marker-alt mr-2"></i> Abu Dhabi, UAE</p>
              <p className="mb-2"><i className="fas fa-envelope mr-2"></i> info@blockforgelab.com</p>
              <p className="mb-2"><i className="fas fa-phone-alt mr-2"></i> +971 000 000 000</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-medium"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Smart Contract Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">dApp Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Token Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Private Blockchain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blockchain Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blockchain Consulting</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-montserrat font-bold text-xl mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on blockchain innovations and company news.
            </p>
            <form className="mb-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className={`px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800 ${errors.email ? "border-red-500" : ""}`}
                  {...register("email")}
                />
                <button 
                  type="submit" 
                  className="bg-white text-black hover:bg-gray-100 px-4 py-2 rounded-r-md transition-all"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    <i className="fas fa-paper-plane"></i>
                  )}
                </button>
              </div>
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email.message}</p>
              )}
            </form>
            <p className="text-gray-400 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </motion.div>
        </div>
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BlockForgeLab. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
