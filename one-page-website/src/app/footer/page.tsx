import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative image">
      <Image src="/Images/footer-3.webp" alt="" width={1500} height={500} />
      <div className="under-footer w-auto h-52"></div>

      {/* Position the content on top of the image */}
      <div className="absolute bottom-0 sm:bottom-10 w-full text-white px-45 sm:px-8">
        <div className="flex gap-20 justify-between items-center relative px-10 lg:px-3">
          {/* Links Section */}
          <ul className="flex flex-col text-base lg:flex-row lg:space-x-2 xl:space-x-5 md:text-lg font-semibold lg:-mt-56 ">
            <li>Contact us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
            <li>Creer</li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex flex-col gap-2 sm:flex-row  sm:gap-5 md:gap-4 md:space-x-6 lg:space-x-2 relative lg:-mt-72">
            <div className="w-10 h-10 border-4 border-white rounded-full md:h-12 md:w-12 flex justify-center items-center hover:bg-lime-500 hover:scale-110">
              <Link
                href=" https://www.linkedin.com/in/zoha-khan-98b9852b3/"
                target="blank"
              >
                <Linkedin></Linkedin>
              </Link>
            </div>
            <div className="w-10 h-10 border-4 border-white rounded-full md:h-12 md:w-12 flex justify-center items-center hover:bg-lime-500 hover:scale-110">
              <Link href="https://www.facebook.com/" target="blank">
                <Facebook />
              </Link>
            </div>
            <div className="w-10 h-10 border-4 border-white rounded-full md:h-12 md:w-12 flex justify-center items-center hover:bg-lime-500 hover:scale-110">
              <Link href="https://github.com/dashboard" target="blank">
                <Github />
              </Link>
            </div>
            <div className="w-10 h-10 border-4 border-white rounded-full md:h-12 md:w-12 flex justify-center items-center hover:bg-lime-500 hover:scale-110">
              <Link href="https://www.instagram.com/" target="blank">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Text */}
        <div className="flex justify-center  text-center text-sm pt-4 sm:text-lg ">
          <p>
            Forest Copyright @2021 Foresty- All rights reserved || Designed By:
            Zoha
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
