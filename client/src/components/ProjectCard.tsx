import { motion } from "framer-motion";
import { Link, Search } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover" 
        />
        <motion.div 
          className="absolute inset-0 bg-primary bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-all duration-300"
          whileHover={{ opacity: 1 }}
        >
          <a href="#" className="bg-white text-primary hover:bg-primary hover:text-white p-3 rounded-full mx-2 transition-all">
            <Link size={16} />
          </a>
          <a href="#" className="bg-white text-primary hover:bg-primary hover:text-white p-3 rounded-full mx-2 transition-all">
            <Search size={16} />
          </a>
        </motion.div>
      </div>
      <div className="p-6">
        <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {project.category}
        </span>
        <h3 className="font-montserrat font-bold text-xl mt-4 mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
