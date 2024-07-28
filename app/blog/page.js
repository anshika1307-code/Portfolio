// // @flow strict

// import { personalData } from "@/utils/data/personal-data";
// // import BlogCard from "../components/homepage/blog/blog-card";
// import ProjectCard from "../components/homepage/blog/blog-card";

// // async function getBlogs() {
// //   const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

// //   if (!res.ok) {
// //     throw new Error('Failed to fetch data')
// //   }

// //   const data = await res.json();
// //   return data;
// // };
// const projectData = [
//   {
//     cover_image: '/path/to/cover_image1.jpg',
//     published_at: '2023-07-27T12:00:00Z',
//     likes_count: 123,
//     comments_count: 45,
//     url: 'https://example.com/project-link1',
//     title: 'Amazing Project Title 1',
//     duration: '3 Months',
//     description: 'This is a brief description of the amazing project 1. It highlights key aspects and provides a quick overview.'
//   },
//   {
//     cover_image: '/path/to/cover_image2.jpg',
//     published_at: '2023-06-15T08:00:00Z',
//     likes_count: 98,
//     comments_count: 22,
//     url: 'https://example.com/project-link2',
//     title: 'Amazing Project Title 2',
//     duration: '2 Months',
//     description: 'This is a brief description of the amazing project 2. It highlights key aspects and provides a quick overview.'
//   },
//   // Add more project data as needed
// ];

// async function page() {
//   // const blogs = await getBlogs();

//   return (
//     <div className="py-8">
//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex  items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
//             Work
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
//         {
//           projectData.map((blog, i) => (
//             blog?.cover_image &&
//             <ProjectCard blog={blog} key={i} />
//           ))
//         }
//       </div>
//     </div>
//   );
// };

// export default page;





// @flow strict

import { personalData } from "@/utils/data/personal-data";
// import ProjectCard from "../components/homepage/project/project-card";
import ProjectCard from "../components/homepage/blog/blog-card";

const projectData = [
  {
    cover_image: '/path/to/cover_image1.jpg',
    published_at: '2023-07-27T12:00:00Z',
    likes_count: 123,
    comments_count: 45,
    url: 'https://example.com/project-link1',
    title: 'Amazing Project Title 1',
    duration: '3 Months',
    description: 'This is a brief description of the amazing project 1. It highlights key aspects and provides a quick overview.'
  },
  {
    cover_image: '/path/to/cover_image2.jpg',
    published_at: '2023-06-15T08:00:00Z',
    likes_count: 98,
    comments_count: 22,
    url: 'https://example.com/project-link2',
    title: 'Amazing Project Title 2',
    duration: '2 Months',
    description: 'This is a brief description of the amazing project 2. It highlights key aspects and provides a quick overview.'
  },
  // Add more project data as needed
];

async function page() {
  

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Work
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          projectData.map((project, i) => (
            project?.cover_image &&
            <ProjectCard project={project} key={i} />
          ))
        }
      </div>
    </div>
  );
};

export default page;
