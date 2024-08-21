import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white px-6 pt-16 mx-auto md:px-24 lg:px-40">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <h1 className="text-xl font-bold text-white">sharewheel</h1>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-200">
              Share your ride with the person heading to the same destination.
              Experience convenience, reliability, and affordability in one
              seamless package. Your journey, our priority.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-200">Phone:</p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              850-123-5021
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-200">Email:</p>
            <a
              href="mailto:info@sharewheel.mail"
              aria-label="Our email"
              title="Our email"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              sharewheel@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-200">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              India
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold text-white">Social</span>
          <div className="flex items-center mt-2 space-x-3">
            <motion.a
              href="/"
              whileHover={{ scale: 1.2 }}
              className="transition-transform duration-200"
            >
              <Twitter className="text-white" />
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.2 }}
              className="transition-transform duration-200"
            >
              <Instagram className="text-white" />
            </motion.a>
            <motion.a
              href="/"
              whileHover={{ scale: 1.2 }}
              className="transition-transform duration-200"
            >
              <Facebook className="text-white" />
            </motion.a>
          </div>
          <p className="mt-4 text-sm text-gray-200">
            Follow us on social media
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-300 lg:flex-row">
        <p className="text-sm text-gray-200">
          &copy; Copyright 2024 sharewheel.com | All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm text-gray-200 hover:text-gray-300 transition-colors duration-300"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-200 hover:text-gray-300 transition-colors duration-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm text-gray-200 hover:text-gray-300 transition-colors duration-300"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
