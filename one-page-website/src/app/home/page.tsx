import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center gap-2 py-2 lg:flex-row lg:justify-between lg:items-center lg:px-14">
      {/* text */}
      <div className="w-full text-center lg:w-[50%] p-4 lg:text-left">
        <h1 className="text-4xl font-[900] md:text-5xl md:font-extrabold xl:text-6xl">
          Save The Forest
        </h1>
        <h3 className="pt-2 font-extrabold text-2xl  md:text-4xl xl:pt-6">
          For save our planet
        </h3>
        <p className="pt-2 md:pt-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex impedit
          iure dicta doloremque minima reiciendis.
        </p>
        <button className="mt-3 p-2 md:mt-6 bg-[#19a821] h-14 w-48 font-bold text-xl text-white rounded-xl hover:scale-110">
          Contact Us
        </button>
      </div>

      {/* Image */}
      <div className="w-full flex justify-center lg:w-[50%] lg:justify-end">
        <Image
          src="/Images/landing-image.avif"
          alt=""
          width={100}
          height={100}
          className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full "
        />
      </div>
    </div>
  );
};

export default Home;
