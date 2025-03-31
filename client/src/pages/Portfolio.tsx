import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "wouter";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="font-opensans text-dark">
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1642104704074-907c0698cbd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
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
              Our Blockchain Projects
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Explore our portfolio of successful blockchain implementations across various industries and use cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-montserrat font-bold text-4xl mb-4">Our Blockchain Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each project represents our commitment to developing innovative blockchain solutions that address real business challenges.
            </p>
          </motion.div>
          
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all ${filter === 'all' ? 'bg-primary text-white' : 'bg-lightgray text-dark hover:bg-primary hover:text-white'}`}
                onClick={() => setFilter('all')}
              >
                All Projects
              </button>
              <button 
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all ${filter === 'finance' ? 'bg-primary text-white' : 'bg-lightgray text-dark hover:bg-primary hover:text-white'}`}
                onClick={() => setFilter('finance')}
              >
                Finance
              </button>
              <button 
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all ${filter === 'supply-chain' ? 'bg-primary text-white' : 'bg-lightgray text-dark hover:bg-primary hover:text-white'}`}
                onClick={() => setFilter('supply-chain')}
              >
                Supply Chain
              </button>
              <button 
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all ${filter === 'healthcare' ? 'bg-primary text-white' : 'bg-lightgray text-dark hover:bg-primary hover:text-white'}`}
                onClick={() => setFilter('healthcare')}
              >
                Healthcare
              </button>
              <button 
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all ${filter === 'nft' ? 'bg-primary text-white' : 'bg-lightgray text-dark hover:bg-primary hover:text-white'}`}
                onClick={() => setFilter('nft')}
              >
                NFT & Gaming
              </button>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="font-montserrat font-bold text-4xl mb-6">Have a Blockchain Project in Mind?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can bring your blockchain vision to life. Our team is ready to help you navigate the complexities of blockchain development.
            </p>
            <Link href="/contact">
              <a className="inline-block bg-white text-primary hover:bg-opacity-90 px-8 py-3 rounded-md font-montserrat font-medium transition-all">
                Start a Project
              </a>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
