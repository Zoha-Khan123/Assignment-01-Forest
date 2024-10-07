import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="flex justify-center text-3xl mt:2  font-extrabold sm:text-5xl my-6 md:-mt-2 lg:w-[50%] ">
          Contact Us
        </h1>
      </div>

      <div className="flex flex-col gap-10 md:flex justify-center items-center text-center mx-5 lg:flex-row">
        <form
          action=""
          className="bg-[#19a821] w-full flex flex-col justify-center gap-4 text-black h-96 sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] rounded-2xl  border-4 border-[#056a23] border-solid"
        >
          <div className="flex justify-center gap-2">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-[90%] sm:w-96 h-12 rounded-lg pl-4 focus:outline-[#056a23] "
            />
          </div>

          <div className="flex justify-center gap-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-[90%] sm:w-96 h-12 rounded-lg pl-4 focus:outline-[#056a23]"
            />
          </div>

          <div className="flex justify-center gap-2">
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              className="w-[90%] sm:w-96 rounded-lg pl-4 focus:outline-[#056a23]"
            ></textarea>
          </div>
          <div className="button">
            <button className="bg-[#056a23] w-[90%] sm:w-96 h-14 rounded-2xl text-2xl text-white border-none outline-none hover:scale-105">
              Send Message
            </button>
          </div>
        </form>

        <div className="w-full flex justify-center lg:w-[50%] lg:justify-end">
          <Image
            src="/Images/contact-image.png"
            alt=""
            width={478}
            height={100}
            className="rounded-3xl bg-[#c5e4d7]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
