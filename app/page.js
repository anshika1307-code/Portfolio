import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Projectss from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ghumi from '../public/image/ghumi.png';
// async function getData() {
//   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();

//   const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

//   return filtered;
// };
const projectData = [
  {
    cover_image: '/image/ghumi.png',
    published_at: '2023-07-27T12:00:00Z',
    // likes_count: 123,
    // comments_count: 45,
    url: 'https://github.com/anshika1307-code/TravellersSocialMedia-website',
    title: 'Travellers Social Media- GhumiGhumi',
    duration: '3 Months',
    description: 'Developed a social networking web app for travelers and travel enthusiasts to connect, share experiences,and plan trips collaboratively.'
  },
  {
    cover_image: '/image/imfs.png',
    published_at: '2023-06-15T08:00:00Z',
    // likes_count: 98,
    // comments_count: 22,
    url: 'https://github.com/anshika1307-code/IMF/tree/master',
    title: 'Instant Messenger Forensic System',
    duration: '2 Months',
    description: 'Finalist in the Kavach 2023 hackathon by the Government of India, which provided access to encrypted chat messenger databases for investigative purposes.'
  },
  {
    cover_image: '/image/petadore.png',
    published_at: '2023-06-15T08:00:00Z',
    // likes_count: 98,
    // comments_count: 22,
    url: 'https://github.com/anshika1307-code/Production-PetEcommerce',
    title: 'PetAdoreHub- Pet Eccomerce Website',
    duration: '2 Months',
    description: 'This project is a full-fledged pet e-commerce website allows admins to post new ads for selling pets with detailed information such as breed, price, age, etc. Users can browse the ads and create inquiries about the pets they are interested in.'
  },
  {
    cover_image: '/image/manipur_edu.png',
    published_at: '2023-06-15T08:00:00Z',
    // likes_count: 98,
    // comments_count: 22,
    url: 'https://bjjmn-paaaa-aaaap-ab3oa-cai.icp0.io/',
    title: 'Manipur Education Website',
    duration: '2 Months',
    description: 'We provide a user-friendly platform for institutes to conveniently publish academic results and certificates and offer scholarship opportunities.'
  },
  // Add more project data as needed
];
export default async function Home() {
  // const blog = await getData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Projectss projects={projectData} />
      <ContactSection />
    </>
  )
};