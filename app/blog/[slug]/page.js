// // @flow strict
// import { personalData } from "@/utils/data/personal-data";

// // async function getBlog(slug) {
// //   const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

// //   if (!res.ok) {
// //     throw new Error('Failed to fetch data')
// //   }

// //   const data = await res.json();
// //   return data;
// // };


// async function BlogDetails({params}) {
//   const slug = params.slug;
//   const blog = await getBlog(slug);
 
//   return (
//     <div>
//     </div>
//   );
// };

// export default BlogDetails;


// @flow strict
import { personalData } from "@/utils/data/personal-data";

// async function getProject(slug) {
//   const res = await fetch(`https://api.example.com/projects/${personalData.devUsername}/${slug}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();
//   return data;
// };

const projectData = [
  {
    slug: 'amazing-project-1',
    cover_image: '/path/to/cover_image1.jpg',
    published_at: '2023-07-27T12:00:00Z',
    likes_count: 123,
    comments_count: 45,
    url: 'https://example.com/project-link1',
    title: 'Amazing Project Title 1',
    duration: '3 Months',
    description: 'This is a detailed description of the amazing project 1. It highlights key aspects and provides a comprehensive overview.'
  },
  {
    slug: 'amazing-project-2',
    cover_image: '/path/to/cover_image2.jpg',
    published_at: '2023-06-15T08:00:00Z',
    likes_count: 98,
    comments_count: 22,
    url: 'https://example.com/project-link2',
    title: 'Amazing Project Title 2',
    duration: '2 Months',
    description: 'This is a detailed description of the amazing project 2. It highlights key aspects and provides a comprehensive overview.'
  },
  // Add more project data as needed
];

async function getProject(slug) {
  // Simulating an API call with local data
  const project = projectData.find(p => p.slug === slug);
  if (!project) {
    throw new Error('Project not found');
  }
  return project;
};

async function ProjectDetails({ params }) {
  const slug = params.slug;
  const project = await getProject(slug);

  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            {project.title}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-[#1b203e] rounded-lg">
        <div className="flex flex-col items-center">
          <img src={project.cover_image} alt={project.title} className="w-full rounded-lg mb-4" />
          <div className="text-white text-lg">
            <p><strong>Duration:</strong> {project.duration}</p>
            <p><strong>Published At:</strong> {new Date(project.published_at).toLocaleDateString()}</p>
            <p><strong>Likes:</strong> {project.likes_count}</p>
            <p><strong>Comments:</strong> {project.comments_count}</p>
            <p className="mt-4">{project.description}</p>
            <a href={project.url} target="_blank" className="mt-4 inline-block bg-violet-500 text-white px-4 py-2 rounded-full">
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
