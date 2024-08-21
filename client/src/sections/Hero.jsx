import Search from "@/components/Search";

const Hero = () => {
  return (
    <div className="relative h-72 md:h-96 flex justify-center items-center bg-[#ffffff]">
      <div className="h-full">
        <img
          src="https://img.freepik.com/premium-vector/tiny-people-gps-with-giant-city-map-flat-illustration_179970-4415.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714521600&semt=ais"
          className="h-full"
          alt="hero"
        />
      </div>
      <h1 className="text-2xl text-center sm:text-4xl md:text-5xl absolute font-extrabold animate-wave bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-yellow-400">
        Your pick of rides at a low price
      </h1>

      <div className="absolute z-10 -bottom-24 w-full px-10 sm:w-fit sm:-bottom-8">
        <Search />
      </div>
    </div>
  );
};

export default Hero;
