import Image from "next/image";
import Link from "next/link";

const Cards = () => {
  return (
    <div>
      <div className="flex justify-center mt-6">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          The Forest’s Heart
        </h1>
      </div>

      <div className="card-area px-2">
        <div className="wrapper px-2 lg:px-10">
          <div className="box-area grid grid-cols-1 gap-4 mt-7 sm:gap-5 xl:grid-cols-3 sm:grid-cols-2  lg:gap-10 md:mt-10">
            {/* Card 1 - Cute Rabbit */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/cute-rabbit.jpg"
                alt="Cute Rabbit"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Cute Rabbit</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 2 - Lion */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/lion-02.avif"
                alt="Lion"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Lion</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 3 - Plain Zebra */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/plain-zebra.jpg"
                alt="Plain Zebra"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Plain Zebra</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 4 - Sparrow */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/bird.jpg"
                alt="Sparrow"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Sparrow</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 5 - Parrot */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/parrot.jpg"
                alt="Parrot"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Parrot</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 6 - Fishes */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/fishes.jpg"
                alt="Fishes"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Fishes</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 7 - Peacock */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/peacock.jpg"
                alt="Peacock"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Peacock</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 8 - Deer */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/deer.jpg"
                alt="Deer"
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay p-4">
                <h3 className="font-medium mb-1 text-3xl">Deer</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Card 9 - Elephant */}
            <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
              <Image
                src="/Images/elephant.jpeg"
                alt=""
                width={400}
                height={400}
                className="h-72 w-full rounded-[10px] block transition-transform duration-500"
              />
              <div className="overlay">
                <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
                  Elephant
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                  reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
                </p>
                <Link
                  href="#"
                  className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

// import Image from "next/image";
// import Link from "next/link";
// // grid-cols-[repeat(auto-fit,minmax(250px,1fr))]
// const Cards = () => {
//   return (
//     <div>
//       <div className="flex justify-center ">
//         <h1 className="text-4xl md:text-6xl font-extrabold">The Forest’s Heart</h1>
//       </div>
//       <div className="card-area px-14 py-0">
//         <div className="wrapper px-10 p-y[10%]">
//           <div className="grid-cols-1 box-area grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
//             <div className="box rounded-[10px]  overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/cute-rabbit.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Cute Rabbit
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>

//             <div className="box rounded-[10px]  overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/lion-02.avif"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Lion
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>

//             <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/plain-zebra.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Plain Zebra
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="card-area px-14 py-0">
//         <div className="wrapper px-10 p-y[10%]">
//           <div className="box-area grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-14">
//             <div className="box rounded-[10px]  overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/bird.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Sparrow
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>

//             <div className="box rounded-[10px]  overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/parrot.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Parrot
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>

//             <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/fishes.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Fishes
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="card-area px-14 py-0 mb-24">
//         <div className="wrapper px-10 p-y[10%]">
//           <div className="box-area grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 mt-14">
//             <div className="box rounded-[10px]  overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/peacock.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Peacock
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>

//             <div className="box rounded-[10px]  overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/deer.jpg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Deer
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>

//             <div className="box rounded-[10px] overflow-hidden shadow-[5px_5px_15px_#c5e4d7] border-4 border-solid border-white">
//               <Image
//                 src="/Images/elephant.jpeg"
//                 alt=""
//                 width={400}
//                 height={400}
//                 className="h-72 rounded-[10px] block transition-transform duration-500"
//               />
//               <div className="overlay">
//                 <h3 className="font-medium mb-1 margin-top: 80%; text-3xl tracking-normal">
//                   Elephant
//                 </h3>
//                 <p>
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
//                   reiciendis. Blanditiis, cupiditate. Aut, cumque facere!
//                 </p>
//                 <Link
//                   href="#"
//                   className="mt-3 text-white bg-lime-500 no-underline text-sm rounded-[50px] text-center px-4 py-4"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;
