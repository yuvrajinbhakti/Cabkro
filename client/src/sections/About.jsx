import about from "../assets/about.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mx-auto container max-w-screen-xl py-8 sm:px-6 sm:py-12 lg:px-16 lg:py-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            alt="Party"
            src={about}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
        <div className="lg:py-24">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl text-gray-800"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Make your everyday life <span className="text-blue-500">smart</span>{" "}
            & <span className="text-green-500">sustainable</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Effortlessly find and connect with fellow commuters who have similar
            routes or destinations. Whether it's commuting to work, attending
            events, or running errands.
          </motion.p>
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            This platform brings together a community of travelers with a common
            goal: to share rides and reduce traffic congestion while enjoying
            the benefits of cost saving and social interaction.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
