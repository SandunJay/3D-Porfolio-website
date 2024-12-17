
// // import { Canvas } from "@react-three/fiber";
// // import { Suspense, useEffect, useRef, useState } from "react";

// // import sakura from "../assets/sound/sakura.mp3";
// // import { HomeInfo, Loader } from "../components";
// // // import { soundoff, soundon } from "../assets/icons";
// // import { Bird, Island, Plane, Sky } from "../models";
// // import soundon from './soundon.png'
// // import soundoff from './soundoff.png'


// // const Home = () => {
// //   const audioRef = useRef(new Audio(sakura));
// //   audioRef.current.volume = 0.4;
// //   audioRef.current.loop = true;

// //   const [currentStage, setCurrentStage] = useState(1);
// //   const [isRotating, setIsRotating] = useState(false);
// //   const [isPlayingMusic, setIsPlayingMusic] = useState(false);

// //   useEffect(() => {
// //     if (isPlayingMusic) {
// //       audioRef.current.play();
// //     }

// //     return () => {
// //       audioRef.current.pause();
// //     };
// //   }, [isPlayingMusic]);

// //   const adjustBiplaneForScreenSize = () => {
// //     let screenScale, screenPosition;

// //     // If screen width is less than 768px, adjust the scale and position
// //     if (window.innerWidth < 768) {
// //       screenScale = [1.5, 1.5, 1.5];
// //       screenPosition = [0, -1.5, 0];
// //     } else {
// //       screenScale = [3, 3, 3];
// //       screenPosition = [0, -4, -4];
// //     }

// //     return [screenScale, screenPosition];
// //   };

// //   const adjustIslandForScreenSize = () => {
// //     let screenScale, screenPosition;

// //     if (window.innerWidth < 768) {
// //       screenScale = [0.9, 0.9, 0.9];
// //       screenPosition = [0, -6.5, -43.4];
// //     } else {
// //       screenScale = [1, 1, 1];
// //       screenPosition = [0, -6.5, -43.4];
// //     }

// //     return [screenScale, screenPosition];
// //   };

// //   const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
// //   const [islandScale, islandPosition] = adjustIslandForScreenSize();

// //   return (
// //     <section className='w-full h-screen relative'>
// //       <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
// //         {currentStage && <HomeInfo currentStage={currentStage} />}
// //       </div>

// //       <Canvas
// //         className={`w-full h-screen bg-transparent ${
// //           isRotating ? "cursor-grabbing" : "cursor-grab"
// //         }`}
// //         camera={{ near: 0.1, far: 1000 }}
// //       >
// //         <Suspense fallback={<Loader />}>
// //           <directionalLight position={[1, 1, 1]} intensity={2} />
// //           <ambientLight intensity={0.5} />
// //           <pointLight position={[10, 5, 10]} intensity={2} />
// //           <spotLight
// //             position={[0, 50, 10]}
// //             angle={0.15}
// //             penumbra={1}
// //             intensity={2}
// //           />
// //           <hemisphereLight
// //             skyColor='#b1e1ff'
// //             groundColor='#000000'
// //             intensity={1}
// //           />

// //           <Bird />
// //           <Sky isRotating={isRotating} />
// //           <Island
// //             isRotating={isRotating}
// //             setIsRotating={setIsRotating}
// //             setCurrentStage={setCurrentStage}
// //             position={islandPosition}
// //             rotation={[0.1, 4.7077, 0]}
// //             scale={islandScale}
// //           />
// //           <Plane
// //             isRotating={isRotating}
// //             position={biplanePosition}
// //             rotation={[0, 20.1, 0]}
// //             scale={biplaneScale}
// //           />
// //         </Suspense>
// //       </Canvas>

// //       <div className='absolute bottom-2 left-2'>
// //         <img
// //           src={!isPlayingMusic ? soundoff : soundon}
// //           alt='jukebox'
// //           onClick={() => setIsPlayingMusic(!isPlayingMusic)}
// //           className='w-10 h-10 cursor-pointer object-contain'
// //         />
// //       </div>
// //     </section>
// //   );
// // };

// // export default Home;
// import { socialLinks } from "../constants";
// import "react-vertical-timeline-component/style.min.css";

// const Contact = () => {
//   return (
//     <section className="max-container">
//       <h1 className="head-text">
//         Contact Me{" "}
//         <span className="blue-gradient_text font-semibold drop-shadow">
//           On my Socials
//         </span>{" "}
//         👋
        
//       </h1>

//       <div className="mt-5 flex flex-col gap-3 text-slate-500">
        
//       </div>

//       <div className="py-10 flex flex-col">
//         <div className="mt-16 flex flex-wrap gap-12">
//           {socialLinks.map((socialLink) => (
//             <a
//               href={socialLink.link}
//               key={socialLink.name}
//               target={socialLink.link.startsWith("mailto:") ? "_self" : "_blank"}
//               rel="noopener noreferrer"
//               className="block-container w-20 h-20 flex flex-col items-center"
//             >
//               <div className="btn-back rounded-xl"></div>
//               <div className="btn-front rounded-xl flex justify-center items-center">
//                 <img
//                   src={socialLink.iconUrl}
//                   alt={socialLink.name}
//                   className="w-1/2 h-1/2 object-contain"
//                 />
//               </div>
//               <span className="mt-2 text-sm text-slate-700 font-medium">
//                 {socialLink.name}
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>

//       <hr className="border-slate-200" />
//     </section>
//   );
// };

// export default Contact;


import { useState } from 'react';
import { socialLinks } from "../constants";
import "react-vertical-timeline-component/style.min.css";
import { Mail } from 'lucide-react';
import EmailForm from '../components/Email';

const Contact = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <section className="max-container">
      <h1 className="head-text">
        Contact Me{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          On my Socials
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        
      </div>

      <div className="py-10 flex flex-col">
        <div className="mt-16 flex flex-wrap gap-12">
          {socialLinks.map((socialLink) => (
            <a
              href={socialLink.link}
              key={socialLink.name}
              target={socialLink.link.startsWith("mailto:") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="block-container w-20 h-20 flex flex-col items-center"
            >
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={socialLink.iconUrl}
                  alt={socialLink.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-slate-700 font-medium">
                {socialLink.name}
              </span>
            </a>
          ))}
          <button
            onClick={() => setShowEmailForm(true)}
            className="block-container w-20 h-20 flex flex-col items-center"
          >
            <div className="btn-back rounded-xl"></div>
            <div className="btn-front rounded-xl flex justify-center items-center">
              <Mail className="w-1/2 h-1/2 object-contain" />
            </div>
            <span className="mt-2 text-sm text-slate-700 font-medium">
              Email
            </span>
          </button>
        </div>
      </div>

      <hr className="border-slate-200" />

      {showEmailForm && <EmailForm onClose={() => setShowEmailForm(false)} />}
    </section>
  );
};

export default Contact;

