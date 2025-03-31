import { motion } from "framer-motion";
import { team } from "@/data/team";
import TeamCard from "@/components/TeamCard";
import SEO from "@/components/SEO";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="font-opensans text-dark">
      <SEO 
        title="About Us | BlockForgeLab"
        description="Learn about BlockForgeLab's journey, mission, and the talented team behind our innovative blockchain solutions. Founded in 2018, we've delivered over 50 blockchain projects."
        keywords="BlockForgeLab team, blockchain company, blockchain experts, about BlockForgeLab, blockchain mission, blockchain vision"
        canonicalUrl="/about"
      />
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
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
              About BlockForgeLab
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Learn about our journey, mission, and the talented team behind BlockForgeLab's innovative blockchain solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-montserrat font-bold text-4xl mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4">
                Founded in 2018, BlockForgeLab emerged from a collective vision to demystify blockchain technology and make it accessible to businesses of all sizes. Our founders, experienced technologists and entrepreneurs, recognized the transformative potential of blockchain beyond cryptocurrencies.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                What began as a small team of passionate blockchain enthusiasts has evolved into a global company with a diverse team of developers, designers, and consultants united by a common goal: to build practical blockchain solutions that address real business challenges.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, BlockForgeLab stands at the forefront of blockchain innovation, having successfully delivered over 50 projects across industries including finance, supply chain, healthcare, and entertainment. Our commitment to excellence, security, and client satisfaction remains unwavering as we continue to push the boundaries of what's possible with blockchain technology.
              </p>
            </motion.div>
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80" 
                alt="BlockForgeLab Team" 
                className="rounded-lg shadow-xl w-full h-auto" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear purpose and a bold vision for the future of blockchain technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6">
                <i className="fas fa-flag text-primary text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To accelerate the adoption of blockchain technology by creating practical, user-friendly solutions that solve real business problems and drive tangible value. We aim to bridge the gap between blockchain's potential and its practical application in everyday business operations.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6">
                <i className="fas fa-eye text-primary text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-bold text-2xl mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                We envision a world where blockchain technology is seamlessly integrated into business infrastructure, creating more transparent, efficient, and secure systems across all industries. BlockForgeLab aims to be the catalyst for this transformation, setting new standards for blockchain development and implementation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These principles guide our work and shape our company culture.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-shield-alt",
                title: "Security",
                description: "We prioritize security in every solution we build, implementing rigorous standards to protect our clients' assets and data."
              },
              {
                icon: "fas fa-lightbulb",
                title: "Innovation",
                description: "We continuously explore new ideas and approaches to push the boundaries of what's possible with blockchain technology."
              },
              {
                icon: "fas fa-handshake",
                title: "Integrity",
                description: "We operate with complete transparency and honesty, building trust through ethical business practices and reliable solutions."
              },
              {
                icon: "fas fa-users",
                title: "Collaboration",
                description: "We believe in the power of teamwork, fostering partnerships with our clients and within our team to achieve shared goals."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6 mx-auto">
                  <i className={`${value.icon} text-primary text-2xl`}></i>
                </div>
                <h3 className="font-montserrat font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light">
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
            <h2 className="font-montserrat font-bold text-4xl mb-6">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join the growing number of businesses partnering with BlockForgeLab to unlock the full potential of blockchain technology.
            </p>
            <Link href="/contact">
              <a className="inline-block bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-md font-montserrat font-medium transition-all">
                Get In Touch
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
