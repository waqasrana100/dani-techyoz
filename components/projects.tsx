"use client"
import { motion } from "framer-motion"

const projects = [
  { title: "AI-Powered CRM", description: "Streamlined customer relationship management with AI insights." },
  { title: "Data Visualization Dashboard", description: "Interactive dashboard for real-time data analysis." },
  { title: "Workflow Automation Platform", description: "Customizable automation tools for business processes." },
  { title: "JavaScript Widget Library", description: "Reusable UI components for rapid web development." },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="border border-white p-6 rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

