import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";

const Contact = () => {
  return (
    <div className="font-opensans text-dark">
      <SEO 
        title="Contact Us | BlockForgeLab"
        description="Have questions about our blockchain solutions? Contact BlockForgeLab today for information, consultation, or to start your blockchain project."
        keywords="contact BlockForgeLab, blockchain consulting, blockchain services, blockchain development company, contact us"
        canonicalUrl="/contact"
      />
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
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
              Get In Touch
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Have questions about our blockchain solutions? Contact our team today for information, consultation, or to start your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-black">Contact Us</h2>
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
                    <p className="opacity-90">Abu Dhabi, UAE</p>
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
                    <p className="opacity-90">+971 000 000 000</p>
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

      {/* Map Section */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-black">Visit Our Office</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our headquarters is located in the heart of Abu Dhabi's business district. We'd love to meet you in person.
            </p>
          </motion.div>
          
          <motion.div 
            className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full h-full bg-primary bg-opacity-10 flex items-center justify-center">
              <p className="text-gray-600 text-center">
                <i className="fas fa-map-marker-alt text-3xl mb-3 text-white"></i>
                <br />
                <span className="font-montserrat font-medium">Interactive Map Placeholder</span>
                <br />
                Abu Dhabi, UAE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4 text-black">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our blockchain services and process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                question: "What industries does BlockForgeLab serve?",
                answer: "BlockForgeLab works with businesses across various industries, including finance, supply chain, healthcare, real estate, entertainment, and more. Our blockchain solutions are adaptable to the unique needs of any industry."
              },
              {
                question: "How long does a typical blockchain project take to complete?",
                answer: "Project timelines vary based on complexity, requirements, and scope. Simple projects may take 1-2 months, while more complex enterprise solutions can take 3-6 months or longer. We provide detailed timelines during the consultation phase."
              },
              {
                question: "Do you offer maintenance and support after project completion?",
                answer: "Yes, we offer various maintenance and support packages to ensure your blockchain solution remains secure, up-to-date, and optimized. Our support team is available for troubleshooting, updates, and continuous improvements."
              },
              {
                question: "What blockchain platforms do you work with?",
                answer: "We work with a wide range of blockchain platforms including Ethereum, Hyperledger Fabric, Binance Smart Chain, Polkadot, Solana, and others. We select the most appropriate platform based on your specific requirements and use case."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="mb-6 bg-light p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-montserrat font-bold text-xl mb-3 text-black">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
