import { 
  users, type User, type InsertUser,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  newsletterSubscriptions, type NewsletterSubscription, type InsertNewsletterSubscription
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private userCurrentId: number;
  private contactSubmissionCurrentId: number;
  private newsletterSubscriptionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.newsletterSubscriptions = new Map();
    this.userCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    this.newsletterSubscriptionCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact submission methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const newSubmission: ContactSubmission = { 
      ...submission, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  // Newsletter subscription methods
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check if email already exists
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === subscription.email
    );
    
    if (existingSubscription) {
      return existingSubscription;
    }
    
    const id = this.newsletterSubscriptionCurrentId++;
    const newSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      createdAt: new Date()
    };
    this.newsletterSubscriptions.set(id, newSubscription);
    return newSubscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

export const storage = new MemStorage();
