import { motion } from "framer-motion";

interface TeamCardProps {
  member: {
    name: string;
    position: string;
    description: string;
    image: string;
    socials: {
      linkedin?: string;
      twitter?: string;
      github?: string;
      email?: string;
    };
  };
}

const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      whileHover={{ y: -5 }}
    >
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-64 object-cover" 
      />
      <div className="p-6">
        <h3 className="font-montserrat font-bold text-xl mb-1">{member.name}</h3>
        <p className="text-primary font-medium mb-3">{member.position}</p>
        <p className="text-gray-600 mb-4">{member.description}</p>
        <div className="flex space-x-3">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} className="text-gray-600 hover:text-primary transition-colors">
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {member.socials.twitter && (
            <a href={member.socials.twitter} className="text-gray-600 hover:text-primary transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {member.socials.github && (
            <a href={member.socials.github} className="text-gray-600 hover:text-primary transition-colors">
              <i className="fab fa-github"></i>
            </a>
          )}
          {member.socials.email && (
            <a href={`mailto:${member.socials.email}`} className="text-gray-600 hover:text-primary transition-colors">
              <i className="fas fa-envelope"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
