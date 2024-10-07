import Image from 'next/image'; 

const About = () => {
  return (
    <div className='flex flex-col justify-center px-4 lg:flex-row lg:px-10 lg:justify-between'>
      <div className="w-full lg:w-[50%] ">
          <h1 className='text-center text-5xl lg:text-7xl font-black lg:text-left mt-1'>About Us</h1>
          <p className='pt-4 px-4 md:pt-6 lg:px-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste voluptatum eveniet pariatur aut architecto. Blanditiis facilis voluptas itaque minima eum at provident qui tempore deleniti facere. Quia reiciendis tenetur quam aut cumque in possimus optio nostrum distinctio nesciunt omnis laboriosam autem, sequi illo eius eum doloremque molestiae eveniet non vel quos ipsa! Consequuntur debitis ducimus ratione impedit ipsam a voluptas possimus id illo sunt, nobis corporis reprehenderit, quae aperiam omnis! Nisi nostrum itaque provident sunt adipisci quidem odio, sint atque.</p>
      </div>
      <div className="w-full flex justify-center lg:w-[50%] lg:justify-end">
      <Image src="/Images/about-01.png" alt="" width={478} height={100} className='rounded-3xl bg-[#c5e4d7] '/>
      </div>
    </div>
  )
}

export default About