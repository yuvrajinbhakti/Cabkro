import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Testimonial = () => {
  const feedback = [
    {
      desc: "sharewheel made my daily commute a breeze! The app is user-friendly, and I've most some wonderful people through carpooling. Thank you sharewheel for providing such a fantastic service.",
      img: "https://dummyimage.com/106x106",
      user: "John",
      prof: "UI Developer",
    },
    {
      desc: "Ever since I started using sharewheel, my daily commute has transformed into a seamless and enjoyable experience. The convenience and reliability of this app have truly exceeded my expectations. The user-friendly interface makes booking a ride a breeze.",
      img: "https://dummyimage.com/106x106",
      user: "Murphy",
      prof: "Backend Developer",
    },
    {
      desc: "I just had to share my recent experience with sharewheel because it has truly been a game-changer for me! From the easy sign-up process to the consistently reliable service, this app has quickly become my go-to for hassle-free transportation.",
      img: "https://dummyimage.com/106x106",
      user: "Sarah",
      prof: "Product Manager",
    },
  ];

  // Animation controls
  const controls = useAnimation();

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, x: "-50%" },
    visible: { opacity: 1, x: 0 },
  };

  // Trigger animation on mount and update
  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="text-gray-700 container py-16 max-w-screen-xl mx-auto body-font">
      <motion.h2
        className="text-4xl font-bold text-grey-500 mb-12 text-center"
        variants={titleVariants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        What People Say About Us
      </motion.h2>
      <div className="flex flex-wrap -m-4">
        {feedback.map((t, index) => (
          <motion.div
            key={t.user}
            className="p-4 md:w-1/3 w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="h-full border border-gray-200 rounded-lg p-8 group hover:bg-gradient-to-r from-blue-500 to-teal-400 hover:text-white transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="block w-5 h-5 mb-4 text-blue-500 group-hover:text-white transition-colors duration-300"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed mb-6">{t.desc}</p>
              <a className="inline-flex items-center">
                <Avatar>
                  <AvatarImage src={t.img} />
                </Avatar>
                <span className="flex-grow flex flex-col pl-4">
                  <span className="title-font font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {t.user}
                  </span>
                  <span className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                    {t.prof}
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
