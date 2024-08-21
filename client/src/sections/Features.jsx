import { HandCoins, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <HandCoins className="w-6 h-6" />,
      title: "Save on travel costs",
      desc: "Share the cost of your journey with other passengers, significantly reducing your travel expenses compared to solo travelling.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Join a trustworthy community",
      desc: "Connect with like-minded people. Meet new people who share your interest and destination through carpooling.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Carpooling made simple",
      desc: "Find rides with ease. Search for rides that match your destination, schedule, and preference with just a few taps.",
    },
  ];

  return (
    <section className="text-gray-700 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 py-16">
      <div className="container max-w-screen-xl px-6 sm:px-8 lg:px-10 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Why Choose sharewheel?
          </h2>
          <p className="text-gray-200 mt-4">
            Discover the benefits of carpooling with sharewheel.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-4 md:w-1/3 flex flex-col text-center items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 mb-4 inline-flex items-center justify-center rounded-full bg-white text-primary-500 shadow-lg">
                {feature.icon}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-base text-gray-200">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
