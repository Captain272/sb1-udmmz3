import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectCategories = [
  {
    title: "Blockchain",
    projects: [
      {
        title: "DeFi Exchange Platform",
        description: "Decentralized exchange with automated market maker protocol",
        tech: ["Solidity", "Web3.js", "React"],
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://demo.com"
      },
      {
        title: "NFT Marketplace",
        description: "Platform for minting and trading NFTs",
        tech: ["Ethereum", "IPFS", "Next.js"],
        image: "https://images.unsplash.com/photo-1644760774754-57f2f952ad5c?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://demo.com"
      }
    ]
  },
  {
    title: "Artificial Intelligence",
    projects: [
      {
        title: "AI Image Generator",
        description: "Generate images from text descriptions using DALL-E",
        tech: ["Python", "PyTorch", "FastAPI"],
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://demo.com"
      },
      {
        title: "Sentiment Analysis Tool",
        description: "Real-time sentiment analysis for social media",
        tech: ["TensorFlow", "NLP", "React"],
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
        github: "https://github.com",
        demo: "https://demo.com"
      }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {projectCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">{category.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-purple-600"
                      >
                        <Github className="w-5 h-5 mr-1" />
                        Code
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-purple-600"
                      >
                        <ExternalLink className="w-5 h-5 mr-1" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;