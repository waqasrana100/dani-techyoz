"use client"
import { motion } from "framer-motion"

const services = [
  { title: "JavaScript Development", icon: "🌐" },
  { title: "Widget Creation", icon: "🧩" },
  { title: "AI Integration", icon: "🤖" },
  { title: "Full Stack Development", icon: "⚙️" },
  { title: "Workflow Automation", icon: "🔄" },
  { title: "Dashboard & Admin Panels", icon: "📊" },
  { title: "Data Analysis", icon: "📈" },
  { title: "Excel Data Processing", icon: "📑" },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">Leveraging cutting-edge technologies to deliver exceptional solutions.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

