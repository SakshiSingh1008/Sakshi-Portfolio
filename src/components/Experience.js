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

    return (
        <div id="experience" style={{ padding: "40px 5%", textAlign: "center" }}>
            <h1 style={{ color: "#b74b4b", fontSize: "2.5rem", marginBottom: "20px" }}>My Experiences</h1>
            
            {[
                [
                    { 
                        title: "Android Developer Intern", 
                        company: "Compozent.in", 
                        duration: "2 months", 
                        description: "During my internship, I worked extensively with **Flutter** and **Dart**, implementing real-world applications with **seamless API integration**. I collaborated with a team of developers to build cross-platform mobile applications and gained hands-on experience with **state management, UI design, and backend integration**.",
                        cert: "CZT240278 (1).png" 
                    },
                    { 
                        title: "Full Stack Developer Intern", 
                        company: "Eazy Bytes Web Solutions", 
                        duration: "1 month", 
                        description: "I developed and deployed **React.js-based web applications**, integrated **Node.js and Express.js for API handling**, and worked with **MongoDB for efficient database management**. My tasks included implementing **authentication mechanisms, optimizing front-end performance, and debugging complex issues** to ensure smooth functionality.",
                        cert: "Offer Letter Sakshi Singh.pdf" 
                    },
                    { 
                        title: "Coding Task", 
                        company: "Deloitte", 
                        duration: "1 month", 
                        description: "Successfully completed a **multi-domain coding assessment**, covering **data analysis, cybersecurity implementations, and backend development**. Applied advanced **problem-solving techniques** and worked on **data encryption algorithms, API security enhancements, and automation scripts** for enterprise applications.",
                        cert: "deloitte certificate.png" 
                    }
                ],
                [
                    { 
                        title: "AI Skill Challenge", 
                        company: "Microsoft", 
                        duration: "2 months", 
                        description: "Participated in a **comprehensive AI training program** focused on **machine learning, deep learning models, and Azure AI services**. Built and deployed **intelligent applications** using **TensorFlow and Azure Machine Learning Studio**, analyzing data and optimizing model performance.",
                        cert: "Screenshot 2023-07-18 212248.png" 
                    },
                    { 
                        title: "Flipkart Grid", 
                        company: "Flipkart", 
                        duration: "", 
                        description: "Competed in a **national-level tech challenge**, solving **real-world e-commerce problems** using **data structures, algorithms, and system design concepts**. Developed innovative solutions for **inventory management, fraud detection, and order processing optimization**.",
                        cert: "Screenshot 2023-08-24 134030.png" 
                    },
                    { 
                        title: "Hackathon", 
                        company: "TCS", 
                        duration: "1 month", 
                        description: "Collaborated with a team to create a **scalable Identity and Access Management (IAM) solution**, integrating **custom authentication flows, API security, and cloud-based user access management**. Focused on **enhancing security, reducing authentication latency, and improving scalability**.",
                        cert: "tata intern.pdf" 
                    }
                ]
            ].map((row, index) => (
                <div key={index} style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                    margin: "20px auto",
                    maxWidth: "1200px"
                }}>
                    {row.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            style={{
                                border: "2px solid #b74b4b",
                                borderRadius: "15px",
                                boxShadow: "2px 4px 8px rgba(183, 75, 75, 0.5)",
                                padding: "20px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "center",
                                backgroundColor: "#1e1e1e",
                                textAlign: "center",
                                minHeight: "480px" // Increased height for uniformity
                            }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={animate ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: idx * 0.2 }}
                        >
                            <h3 style={{ color: "white", fontSize: "1.5rem", marginBottom: "10px" }}>
                                <u>{exp.title}</u>
                            </h3>
                            <strong style={{ color: "#b74b4b", fontSize: "18px" }}>{exp.company}</strong>
                            <p style={{ color: "white", fontSize: "18px", fontWeight: "bold", margin: "10px 0" }}>{exp.duration}</p>
                            <p style={{ 
                                color: "white", 
                                fontSize: "16px", 
                                textAlign: "center", 
                                flexGrow: 1 
                            }} dangerouslySetInnerHTML={{ __html: exp.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}>
                            </p>
                            <a href={`./${exp.cert}`} download={exp.cert.replace(/ /g, "_")} style={{ textDecoration: "none", width: "100%" }}> 
                                <button style={{ 
                                    width: "100%", 
                                    height: "50px", 
                                    cursor: "pointer", 
                                    color: "white", 
                                    backgroundColor: "#b74b4b", 
                                    border: "1px solid white", 
                                    borderRadius: "10px", 
                                    marginTop: "15px", 
                                    fontSize: "16px", 
                                    fontWeight: "bold" 
                                }}>Download Certificate</button>
                            </a>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Experience;







