import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Project() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("projects");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 1.2 && rect.bottom >= 0) {
                    setAnimate(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
     const projects = [
    {
        title: "Canvas Drawing Tool (Konva.js)",
        description: "Interactive canvas-based UI tool with shape creation, freehand drawing, color customization, and export functionality. Focused on building interaction-based UI systems.",
        tech: "React.js, Konva.js, Canvas API",
        link: "https://github.com/SakshiSingh1008/Sakshi-konvajs"
    },
    {
        title: "AI CRM Dashboard",
        description: "A smart CRM system to manage leads and customer interactions with structured UI and AI-based insights for better workflow management.",
        tech: "React.js, Node.js, UI/UX Design",
        link: "https://github.com/SakshiSingh1008/AI-CRM-HCP-Module.git"
    },
    {
        title: "Real-Time Chat Application",
        description: "Built using Socket.io for real-time messaging with instant updates and responsive UI experience.",
        tech: "Socket.io, React, Node.js",
        link: "https://github.com/SakshiSingh1008/Chat-app"
    },
    {
        title: "Multi-Vendor E-Commerce Platform",
        description: "A scalable e-commerce system allowing multiple sellers to list products and users to browse and purchase seamlessly.",
        tech: "React.js, Node.js, MongoDB",
        link: "https://github.com/SakshiSingh1008/farmers-ecommerce.git"
    },
    {
        title: "Twitter Clone UI",
        description: "A social media UI clone with post creation, likes, and interaction system built using modern frontend practices.",
        tech: "React.js, Tailwind CSS",
        link: "https://github.com/SakshiSingh1008/Twitter-Clone"
    },
    {
        title: "Streaming App (Flutter)",
        description: "A video streaming application with authentication, browsing, and search functionality built using Flutter and Firebase.",
        tech: "Flutter, Firebase, Dart",
        link: "https://github.com/SakshiSingh1008/ott_photo_play_app"
    },
    {
    title: "Jira-like Task Manager (Kanban Board)",
    description: "A task management system inspired by Jira with drag-and-drop style workflow structure. Users can create, track, and manage tasks across different stages like Todo, In Progress, and Done.",
    tech: "React.js, DnD Kit / Drag & Drop, State Management",
    link: "https://github.com/SakshiSingh1008/Jira-task-manager.git"
},
{
  title: "Jobify (Job Tracking Platform)",
  description: "A job tracking application that helps users manage their job applications across different stages like Applied, Interviewing, Offer, and Rejected. Built with a clean dashboard UI to track progress efficiently.",
  tech: "React.js, Context API / Redux, LocalStorage, CRUD Operations",
  link: "https://github.com/SakshiSingh1008/Jobify.git"
}
];
    

    return (
        <div id="projects" style={{ padding: "50px 5%",  textAlign: "center" }}>
            <h1 style={{ color: "#b74b4b", fontSize: "2.5rem", marginBottom: "30px" }}>My Projects</h1>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                gap: "20px",
                justifyContent: "center",
                maxWidth: "1200px",
                margin: "auto"
            }}>
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        style={{
                            border: "2px solid white",
                            borderRadius: "20px",
                            boxShadow: "2px 4px 8px white",
                            padding: "20px",
                            textAlign: "center",
                            backgroundColor: "#1e1e1e"
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={animate ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, delay: index * 0.3 }}
                    >
                        <h3 style={{ color: "#b74b4b", fontSize: "2rem", marginBottom: "10px" }}>{project.title}</h3>
                        <p style={{ color: "white", fontSize: "1rem", marginBottom: "10px" }}>{project.description}</p>
                        <p style={{ color: "#b74b4b", fontSize: "1rem", fontWeight: "bold" }}>{project.tech}</p>

                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <button
                                    style={{
                                        height: "50px", width: "200px",
                                        backgroundColor: "#b74b4b", color: "white",
                                        fontSize: "1rem", border: "1px solid white",
                                        borderRadius: "20px", cursor: "pointer",
                                        marginTop: "20px"
                                    }}
                                >
                                    Explore
                                </button>
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;






