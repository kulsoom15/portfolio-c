// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";

// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-4 text-gray-300">
//         <li>HTML</li>
//         <li>CSS</li>
//         <li>Typescript</li>
//         <li>Next.js</li>
//         <li>JavaScript</li>
//         <li>React</li>
//         <li>Tailwind CSS</li>
//         <li>Git</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-4 text-gray-300">
//         <li>Bachelor's in Biotechnology from UoK</li>
//         <li>Certificate in AI & Cloud Computing from GIAIC</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {
//   const [tab, setTab] = useState("skills");
//   const [isPending, startTransition] = useTransition();

//   // const handleTabChange = (id) => {
//   //   startTransition(() => setTab(id));
//   // };
//   const handleTabChange = (id: string) => {
//     startTransition(() => {
//       setTab(id);
//     });
//   };

//   return (
//     <section className="text-white bg-gray-900 py-16" id="about">
//       <div className="container mx-auto md:grid md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24">
//         <div className="flex justify-center mb-8 md:mb-0">
//           <Image src="/images/about-image.png" alt="About image" width={500} height={500} className="rounded-lg shadow-lg" />
//         </div>
//         <div>
//           <h2 className="text-4xl font-bold text-purple-400">About Me</h2>
//           <p className="text-base lg:text-lg mt-4 text-gray-300">
//             I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience with various technologies including React, Node.js, and more.
//           </p>
//           <div className="flex mt-8 space-x-4">
//             {TAB_DATA.map((item) => (
//               <TabButton key={item.id} selectTab={() => handleTabChange(item.id)} active={tab === item.id}>
//                 {item.title}
//               </TabButton>
//             ))}
//           </div>
//           <div className="mt-6 p-4 bg-gray-600 rounded-lg transition-opacity duration-300 ease-in-out">
//             {TAB_DATA.find((t) => t.id === tab)?.content}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

"use client"; 
import React, { useTransition, useState } from "react";
import Image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-gray-300">
        <li>HTML</li>
        <li>CSS</li>
        <li>Typescript</li>
        <li>Next.js</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-gray-300">
        <li>Bachelor's in Biotechnology from UoK</li>
        <li>Certificate in AI & Cloud Computing from GIAIC</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  // Handle tab change
  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white bg-gray-900 py-16" id="about">
      <div className="container mx-auto md:grid md:grid-cols-2 gap-8 px-6 md:px-12 lg:px-24">
        <div className="flex justify-center mb-8 md:mb-0">
          <Image src="/images/about-image.png" alt="About image" width={500} height={500} className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-purple-400">About Me</h2>
          <p className="text-base lg:text-lg mt-4 text-gray-300">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience with various technologies including React, Node.js, and more.
          </p>
          <div className="flex mt-8 space-x-4">
            {TAB_DATA.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  tab === item.id ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 bg-gray-600 rounded-lg transition-opacity duration-300 ease-in-out">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


