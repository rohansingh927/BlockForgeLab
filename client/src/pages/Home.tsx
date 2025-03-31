import { Link } from "wouter";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import ServiceCard from "@/components/ServiceCard";
import TeamCard from "@/components/TeamCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <div className="font-opensans text-dark">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center pt-16" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary opacity-70"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div 
            className="w-full md:w-2/3 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat font-bold text-3xl md:text-5xl mb-6 leading-tight">
              Pioneering Blockchain Solutions for Tomorrow's Enterprises
            </h1>
            <p className="text-xl mb-8 opacity-90">
              At BlockForgeLab, we design and develop cutting-edge blockchain solutions that transform businesses through decentralized technology, creating secure, transparent, and efficient ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <a className="bg-secondary hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-montserrat font-medium text-center transition-all">
                  Explore Services
                </a>
              </Link>
              <Link href="/contact">
                <a className="bg-transparent border-2 border-white hover:bg-white hover:text-primary px-8 py-3 rounded-md font-montserrat font-medium text-center transition-all">
                  Contact Us
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Our Blockchain Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive blockchain solutions tailored to your industry's specific needs, ensuring maximum efficiency, security, and transparency.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <a className="inline-flex items-center font-montserrat font-medium text-primary hover:text-secondary transition-colors">
                View All Services <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6 text-black">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                BlockForgeLab is a premier blockchain development company dedicated to building innovative decentralized solutions for businesses across industries. Founded by a team of blockchain pioneers and technology enthusiasts, we've been at the forefront of the blockchain revolution since its early days.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to demystify blockchain technology and deliver practical, scalable solutions that address real-world challenges. We combine technical expertise with strategic business insights to create blockchain applications that drive measurable value.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-primary font-montserrat font-bold text-3xl mb-2">50+</div>
                  <p className="text-gray-600">Completed Projects</p>
                </div>
                <div>
                  <div className="text-primary font-montserrat font-bold text-3xl mb-2">30+</div>
                  <p className="text-gray-600">Satisfied Clients</p>
                </div>
                <div>
                  <div className="text-primary font-montserrat font-bold text-3xl mb-2">15+</div>
                  <p className="text-gray-600">Blockchain Experts</p>
                </div>
                <div>
                  <div className="text-primary font-montserrat font-bold text-3xl mb-2">5+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
              <Link href="/contact">
                <a className="inline-block bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-montserrat font-medium transition-all">
                  Get In Touch
                </a>
              </Link>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="BlockForgeLab Team" 
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-lightgray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our talented professionals bring together diverse expertise in blockchain technology, software development, and business strategy.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-black">Our Blockchain Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful blockchain implementations across various industries and use cases.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <a className="inline-flex items-center font-montserrat font-medium text-primary hover:text-secondary transition-colors">
                View All Projects <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section id="testimonials" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Hear from businesses that have transformed their operations through our blockchain solutions.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <TestimonialCard testimonial={testimonials[0]} />
            
            <div className="mt-8 text-center">
              <Link href="/testimonials">
                <a className="inline-flex items-center font-montserrat font-medium text-white hover:text-secondary transition-colors">
                  Read More Testimonials <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have a blockchain project in mind? Contact our team for a consultation and discover how we can help transform your business.
            </p>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ContactForm />
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-full bg-primary text-white p-8 rounded-lg shadow-lg flex flex-col">
                <h3 className="font-montserrat font-bold text-2xl mb-6">Contact Information</h3>
                <div className="flex items-start mb-6">
                  <div className="text-2xl mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg">Our Location</h4>
                    <p className="opacity-90">123 Blockchain Boulevard, Tech Hub, San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="text-2xl mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg">Email Us</h4>
                    <p className="opacity-90">info@blockforgelab.com</p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="text-2xl mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg">Call Us</h4>
                    <p className="opacity-90">+1 0</p>
                  </div>
                </div>
                <div className="flex items-start mb-10">
                  <div className="text-2xl mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-lg">Working Hours</h4>
                    <p className="opacity-90">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="opacity-90">Saturday - Sunday: Closed</p>
                  </div>
                </div>
                <div className="mt-auto">
                  <h4 className="font-montserrat font-bold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="bg-white bg-opacity-20 hover:bg-opacity-30 p-3 rounded-full transition-all">
                      <i className="fab fa-medium"></i>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
