import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  service: {
    icon: string;
    title: string;
    description: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      whileHover={{ y: -10 }}
    >
      <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mb-6">
        <i className={`${service.icon} text-primary text-2xl`}></i>
      </div>
      <h3 className="font-montserrat font-bold text-xl mb-3 text-black">{service.title}</h3>
      <p className="text-gray-600 mb-4">
        {service.description}
      </p>
      <Link href="/services">
        <a className="text-primary font-montserrat font-medium hover:text-secondary flex items-center">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
