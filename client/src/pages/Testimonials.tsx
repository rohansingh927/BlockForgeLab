import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "wouter";

const Testimonials = () => {
  return (
    <div className="font-opensans text-dark">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')" }}
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
              Client Testimonials
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Hear from businesses that have transformed their operations through our blockchain solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Read what our clients have to say about working with BlockForgeLab.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Trusted by Leading Companies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We've had the privilege of working with innovative organizations across various industries.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[...Array(6)].map((_, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary text-opacity-70 font-montserrat font-bold text-xl">
                  Client {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-black">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore in-depth case studies of how our blockchain solutions have delivered measurable results for our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Financial Institution Reduces Fraud by 62%",
                category: "Finance",
                description: "Implementation of a blockchain-based verification system for a leading financial services company resulted in significant fraud reduction and compliance improvement.",
                image: "https://images.unsplash.com/photo-1515265705-cbcc6e6ba264?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Supply Chain Transparency Transformation",
                category: "Supply Chain",
                description: "Developed an end-to-end tracking solution for a global manufacturing company, enhancing transparency and reducing shipping disputes by 47%.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Healthcare Data Security Overhaul",
                category: "Healthcare",
                description: "Created a secure blockchain infrastructure for patient data management, improving data access speed by 78% while maintaining HIPAA compliance.",
                image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((caseStudy, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {caseStudy.category}
                  </span>
                  <h3 className="font-montserrat font-bold text-xl mt-4 mb-2">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <a href="#" className="text-primary font-montserrat font-medium hover:text-secondary flex items-center">
                    Read Case Study <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
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
            <h2 className="font-montserrat font-bold text-4xl mb-6">Ready to Become Our Next Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how BlockForgeLab can help you harness the power of blockchain technology to transform your business.
            </p>
            <Link href="/contact" className="inline-block bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-md font-montserrat font-medium transition-all">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
