// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          {/* <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p> */}
         <p className="text-gray-200 text-sm lg:text-lg">
  Hi, I&apos;m <strong>Anshika Goel</strong>, a <strong>Blockchain Developer</strong> with a Bachelor&apos;s in <strong>CSE</strong> from <strong>Raj Kumar Goel Institute of Technology, Ghaziabad</strong>. 
  Currently, I work at <strong>QuadB Technology</strong> specializing in <strong>Web3</strong> and <strong>Blockchain</strong> development, focusing on decentralized applications (DApps) and DeFi protocols.
</p>

<p className="text-gray-200 text-sm lg:text-lg">
  I&apos;m passionate about integrating <strong>AI with Web3</strong>, and I&apos;ve trained blockchain interns to help grow the space. I have a strong background in problem-solving, logic building, and optimizing solutions.
</p>

<p className="text-gray-200 text-sm lg:text-lg">
  Highlights:
</p>
<ul className="text-gray-200 text-sm lg:text-lg">
  <li>🏆 <strong>Two-time Intra-College Hackathon winner</strong></li>
  <li>🌟 <strong>Finalist at Kavach 2023</strong>, a national hackathon</li>
</ul>

<p className="text-gray-200 text-sm lg:text-lg">
  Skills: Blockchain, AI, MERN Stack, C++, DSA, DeFi, Smart Contracts
</p>

          {/* <p className="text-gray-200 text-sm lg:text-lg">
  Hello! I’m <strong>Anshika Goel</strong>, a passionate <strong>Blockchain Developer</strong> and a Computer Science Engineering graduate from <strong>Raj Kumar Goel Institute of Technology, Ghaziabad</strong>. With a strong focus on Web3 technologies and AI, I am currently working at <strong>QuadB Technology</strong>, where I specialize in decentralized applications (DApps), smart contract development, and DeFi protocols.  

  I have a keen interest in exploring the intersection of AI and Web3, continuously seeking innovative solutions in blockchain and AI. I am also experienced in training blockchain interns, helping others grow their skills and knowledge in this fast-evolving field.

  🏆 I’ve achieved notable milestones, including being a <strong>two-time winner</strong> in the Intra-College Hackathon and a <strong>Finalist</strong> at the national hackathon, <strong>Kavach 2023</strong>, organized by the Government of India.  

  💡 My technical expertise includes:
  - **Blockchain Development**: Smart contracts, DApps, and DeFi  
  - **AI & Web3 Integration**: Building decentralized intelligent systems  
  - **MERN Stack**: Efficient and scalable web applications  
  - **C++ & DSA**: Strong command over algorithms and problem-solving  

  I am a perfectionist who is always driven to deliver optimal solutions and innovate within the tech space. My passion for technology drives me to explore any field that offers opportunities to learn and make a meaningful impact.
</p> */}

        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt="Anshika Goel"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;