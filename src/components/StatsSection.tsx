import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Volume quotidien", value: "€2.1B+" },
  { label: "Pays supportés", value: "190+" },
  { label: "Clients satisfaits", value: "9M+" },
  { label: "Cryptos disponibles", value: "185+" },
];

export const StatsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};