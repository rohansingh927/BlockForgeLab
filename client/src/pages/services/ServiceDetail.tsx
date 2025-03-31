import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { services } from "@/data/services";
import { ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";

const ServiceDetail = () => {
  const [location] = useLocation();
  const serviceSlug = location.split('/').pop();
  
  // Find the service based on the slug (URL-friendly version of title)
  const service = services.find(s => 
    s.title.toLowerCase().replace(/\s+/g, '-') === serviceSlug
  );
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Service Not Found | BlockForgeLab"
          description="The service you're looking for doesn't exist or has been moved."
          canonicalUrl="/services"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-6">The service you're looking for doesn't exist or has been moved.</p>
          <Link href="/services">
            <a className="inline-block bg-primary text-white px-8 py-3 rounded-md font-montserrat font-medium transition-all">
              View All Services
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="font-opensans text-dark">
      <SEO 
        title={`${service.title} | BlockForgeLab`}
        description={service.description}
        keywords={`${service.title.toLowerCase()}, blockchain services, blockchain development, ${service.title.toLowerCase()} blockchain solutions, BlockForgeLab`}
        canonicalUrl={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
      />
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
            <div className="flex items-center mb-4">
              <Link href="/services">
                <span className="text-white hover:text-gray-200 transition-colors cursor-pointer">
                  Services
                </span>
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-white" />
              <span>{service.title}</span>
            </div>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-6 leading-tight">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div 
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mr-6">
                  <i className={`${service.icon} text-white text-2xl`}></i>
                </div>
                <h2 className="font-montserrat font-bold text-3xl text-black">
                  {service.title}
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-black prose-headings:text-black prose-strong:text-black">
                <p>
                  {service.description}
                </p>
                
                <h3 className="text-black">What We Offer</h3>
                <p>
                  At BlockForgeLab, our {service.title.toLowerCase()} services are designed to provide comprehensive solutions tailored to your specific business needs. Our team of experienced blockchain developers and consultants work closely with you to understand your requirements and deliver high-quality solutions.
                </p>
                
                <h3 className="text-black">Key Benefits</h3>
                <ul className="text-black">
                  <li>Enhanced security and transparency through blockchain technology</li>
                  <li>Streamlined processes and reduced operational costs</li>
                  <li>Improved trust and accountability in digital transactions</li>
                  <li>Customized solutions aligned with your business objectives</li>
                  <li>Ongoing support and maintenance to ensure optimal performance</li>
                </ul>
                
                <h3 className="text-black">Our Approach</h3>
                <p>
                  We follow a structured approach to deliver top-notch {service.title.toLowerCase()} solutions:
                </p>
                <ol className="text-black">
                  <li><strong>Discovery and Analysis:</strong> We start by understanding your business goals, challenges, and requirements.</li>
                  <li><strong>Strategy and Design:</strong> Our team designs a custom solution architecture tailored to your specific use case.</li>
                  <li><strong>Development and Testing:</strong> We develop and rigorously test your solution to ensure security and performance.</li>
                  <li><strong>Deployment and Support:</strong> We handle the deployment and provide ongoing support to ensure long-term success.</li>
                </ol>
              </div>
              
              <div className="mt-12">
                <Link href="/contact">
                  <span className="inline-block bg-primary hover:bg-opacity-90 text-white px-8 py-3 rounded-md font-montserrat font-medium transition-all cursor-pointer">
                    Request a Consultation
                  </span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8">
                <h3 className="font-montserrat font-bold text-xl mb-6 text-black">Related Services</h3>
                <div className="space-y-4">
                  {services
                    .filter(s => s.title !== service.title)
                    .slice(0, 4)
                    .map((relatedService, index) => (
                      <Link key={index} href={`/services/${relatedService.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        <div className="block p-4 bg-white border border-gray-200 rounded-md shadow hover:shadow-md transition-all cursor-pointer">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                              <i className={`${relatedService.icon} text-white text-sm`}></i>
                            </div>
                            <h4 className="font-montserrat font-medium text-black">
                              {relatedService.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-montserrat font-bold text-xl mb-6 text-black">Contact Us</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-lg mr-3 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <p className="text-black">info@blockforgelab.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-lg mr-3 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div>
                        <p className="text-black">+971 000 000 000</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-lg mr-3 bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div>
                        <p className="text-black">Abu Dhabi, UAE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
            <h2 className="font-montserrat font-bold text-4xl mb-6">Ready to Transform Your Business with {service.title}?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team today to schedule a consultation and discover how our blockchain services can help you achieve your business objectives.
            </p>
            <Link href="/contact">
              <span className="inline-block bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-md font-montserrat font-medium transition-all cursor-pointer">
                Get Started
              </span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;