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
            title: "Real-Time Chat Application",
            description: "Built using Socket.io, React, Node.js, and Postman API to enable instant messaging with real-time updates.",
            tech: "Socket.io, React, Node.js, Postman API",
            link: "https://github.com/SakshiSingh1008/Chat-app"
        },
        {
            title: "Multi-Vendor E-Commerce Website",
            description: "A platform where multiple sellers can list and manage their products, providing customers with a seamless buying experience.",
            tech: "React.js, Node.js, Express.js, MongoDB, Stripe",
            link: ""
        },
        {
            title: "Twitter Clone",
            description: "A social media platform where users can post tweets, like, and interact with others, built using React.js and Tailwind CSS.",
            tech: "React.js, Tailwind CSS",
            link: "https://github.com/SakshiSingh1008/Twitter-Clone"
        },
        {
            title: "Streaming Website",
            description: "A streaming website built with Dart and Flutter, allowing users to browse and stream videos with authentication and search.",
            tech: "Dart, Flutter, Firebase, AWS",
            link: "https://github.com/SakshiSingh1008/ott_photo_play_app"
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






