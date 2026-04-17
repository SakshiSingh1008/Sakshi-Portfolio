import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Experience() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("experience");
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

    const experiences = [

         {
            title: "Frontend Developer Intern",
            company: "Daten & Wissen",
            duration: "6 months",
            description:
                "Working on frontend development tasks including UI implementation, API integration, performance optimization, and building responsive web applications using React.",
            cert: "Sakshi_frontend_internship.pdf"
        },
        {
            title: "Android Developer Intern",
            company: "Compozent.in",
            duration: "2 months",
            description:
                "Worked with Flutter and Dart to build cross-platform mobile applications. Integrated REST APIs, handled state management, and improved UI responsiveness.",
            cert: "CZT240278 (1).png"
        },
      
       
    ];

    return (
        <div id="experience" style={{ padding: "40px 5%", textAlign: "center" }}>
            <h1 style={{ color: "#b74b4b", fontSize: "2.5rem", marginBottom: "20px" }}>
                My Experience
            </h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                    maxWidth: "1200px",
                    margin: "auto"
                }}
            >
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        style={{
                            border: "2px solid #b74b4b",
                            borderRadius: "15px",
                            boxShadow: "2px 4px 8px rgba(183, 75, 75, 0.5)",
                            padding: "20px",
                            backgroundColor: "#1e1e1e",
                            textAlign: "center",
                            minHeight: "350px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={animate ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                    >
                        <div>
                            <h3 style={{ color: "white", fontSize: "1.5rem" }}>
                                {exp.title}
                            </h3>
                            <strong style={{ color: "#b74b4b" }}>
                                {exp.company}
                            </strong>
                            <p style={{ color: "white", fontWeight: "bold" }}>
                                {exp.duration}
                            </p>
                            <p style={{ color: "white", fontSize: "15px" }}>
                                {exp.description}
                            </p>
                        </div>

                        <a
                            href={exp.cert}
                            download
                            style={{ textDecoration: "none" }}
                        >
                            <button
                                style={{
                                    width: "100%",
                                    height: "45px",
                                    cursor: "pointer",
                                    color: "white",
                                    backgroundColor: "#b74b4b",
                                    border: "1px solid white",
                                    borderRadius: "10px",
                                    marginTop: "15px"
                                }}
                            >
                                Download Certificate
                            </button>
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;