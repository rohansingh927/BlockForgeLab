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
      className="bg-black rounded-lg shadow-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      whileHover={{ y: -10 }}
    >
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
        <i className={`${service.icon} text-white text-2xl`}></i>
      </div>
      <h3 className="font-montserrat font-bold text-xl mb-3 text-white">{service.title}</h3>
      <p className="text-gray-300 mb-4">
        {service.description}
      </p>
      <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
        <span className="text-white font-montserrat font-medium hover:text-primary flex items-center cursor-pointer">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
