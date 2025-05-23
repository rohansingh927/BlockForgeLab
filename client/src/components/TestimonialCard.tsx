import { motion } from "framer-motion";

interface TestimonialCardProps {
  testimonial: {
    name: string;
    position: string;
    company: string;
    image: string;
    content: string;
    rating: number;
  };
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-black bg-opacity-90 backdrop-blur-sm rounded-lg p-8 shadow-lg"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h4 className="font-montserrat font-bold text-xl text-white">{testimonial.name}</h4>
          <p className="text-white opacity-80">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
      <p className="text-lg text-white opacity-90 mb-4">
        "{testimonial.content}"
      </p>
      <div className="flex text-white">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
