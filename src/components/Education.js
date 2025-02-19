import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

function Education(){
    const [animate, setAnimate] = useState(false); // Controls animation trigger

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("education");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                    setAnimate(true); // Start animation when section is visible
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            id="education" 
            style={{ 
                height: "100%", 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center",
                justifyContent: "center",
                padding: "50px 5%",
                
            }}
        >
            <h1 
                style={{ 
                    color: "#b74b4b", 
                    textAlign: "center", 
                    marginBottom: "30px",
                    fontSize: "2.5rem"
                }}
            >
                My Education
            </h1>

            <div 
                style={{ 
                    display: "flex", 
                    flexWrap: "wrap", 
                    justifyContent: "center", 
                    gap: "20px", 
                    width: "100%", 
                    maxWidth: "1200px"
                }}
            >
                {[
                    { 
                        title: "Queen Mary's High School", 
                        year: "2010-2020", 
                        score: "SSC - 90%" 
                    },
                    { 
                        title: "L.R.Tiwari Junior College", 
                        year: "2020-2022", 
                        score: "HSC - 75%" 
                    },
                    { 
                        title: "Shree L.R.Tiwari College of Engineering", 
                        year: "2022-2026", 
                        degree: "Bachelor's of Engineering (Computer Science)",
                        score: "CGPA - 8.4"
                    }
                ].map((edu, index) => (
                    <motion.div
                        key={index}
                        style={{
                            border: "2px solid #b74b4b",
                            width: "90%", 
                            maxWidth: "600px",
                            borderRadius: "20px",
                            boxShadow: "2px 4px 8px #b74b4b",
                            padding: "20px",
                            backgroundColor: "#1e1e1e",
                            textAlign: "center",
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={animate ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2, delay: index * 0.3 }}
                    >
                        <h3 
                            style={{ 
                                color: "white", 
                                fontFamily: "sans-serif", 
                                fontSize: "1.8rem", 
                                marginBottom: "10px"
                            }}
                        >
                            <u>{edu.title}</u>
                        </h3>
                        <p style={{ color: "white", fontSize: "18px" }}>{edu.year}</p>
                        {edu.degree && <p style={{ color: "white", fontSize: "18px" }}>{edu.degree}</p>}
                        <p style={{ color: "white", fontSize: "18px" }}>{edu.score}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Education;
