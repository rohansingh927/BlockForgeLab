import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ message: "Contact form submitted successfully", data: submission });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "An error occurred while submitting the contact form" });
      }
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ message: "Subscribed to newsletter successfully", data: subscription });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        res.status(400).json({ message: validationError.message });
      } else {
        console.error("Error subscribing to newsletter:", error);
        res.status(500).json({ message: "An error occurred while subscribing to the newsletter" });
      }
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.status(200).json(submissions);
    } catch (error) {
      console.error("Error getting contact submissions:", error);
      res.status(500).json({ message: "An error occurred while fetching contact submissions" });
    }
  });

  app.get("/api/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.status(200).json(subscriptions);
    } catch (error) {
      console.error("Error getting newsletter subscriptions:", error);
      res.status(500).json({ message: "An error occurred while fetching newsletter subscriptions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
