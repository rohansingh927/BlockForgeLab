import { motion } from "framer-motion";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "wouter";

const Services = () => {
  return (
    <div className="font-opensans text-dark">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      >
        <div className="absolute inset-0 bg-primary opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Comprehensive Blockchain Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Our suite of enterprise-grade blockchain solutions empowers businesses to harness the full potential of distributed ledger technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-light">
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
              We provide tailored blockchain solutions to meet your specific business needs, from strategy development to implementation and ongoing support.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to deliver blockchain solutions that align with your business objectives and technical requirements.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-lightbulb",
                title: "Discovery & Analysis",
                description: "We begin by understanding your business goals, challenges, and requirements to determine if blockchain is the right solution for your needs."
              },
              {
                icon: "fas fa-pencil-ruler",
                title: "Strategy & Design",
                description: "Our team designs a custom blockchain architecture and roadmap tailored to your specific use case and business objectives."
              },
              {
                icon: "fas fa-code",
                title: "Development & Testing",
                description: "We develop and thoroughly test your blockchain solution, ensuring security, scalability, and optimal performance."
              },
              {
                icon: "fas fa-rocket",
                title: "Deployment & Support",
                description: "We handle the deployment of your blockchain solution and provide ongoing support and maintenance to ensure long-term success."
              }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="bg-light rounded-lg p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                  <i className={`${step.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-6">Ready to Transform Your Business with Blockchain?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team today to schedule a consultation and discover how our blockchain services can help you achieve your business objectives.
            </p>
            <Link href="/contact">
              <a className="inline-block bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-md font-montserrat font-medium transition-all">
                Get Started
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
