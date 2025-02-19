import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";  // ✅ Import Link for smooth scroll
import myImage from "./Screenshot 2023-06-16 204613.png";

function About() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("about");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                    setAnimate(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div 
            id="about"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "100vh",
                padding: "50px 10%",
                color: "white",
                textAlign: "center",
            }}
        >
            <motion.div 
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "1200px",
                    gap: "40px",
                }}
                initial={{ opacity: 0 }}
                animate={ animate ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                {/* About Text */}
                <motion.div 
                    style={{
                        flex: 1,
                        minWidth: "300px",
                        maxWidth: "600px",
                        textAlign: "justify",
                        lineHeight: "1.8",
                        fontSize: "20px",
                        fontFamily: "sans-serif",
                    }}
                    initial={{ opacity: 0 }}
                    animate={animate ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                >
                    <h1 style={{ color: "#b74b4b", fontSize: "2.5rem", marginBottom: "20px", textAlign: "center" }}>
                        About Me
                    </h1>
                    <p style={{ color: "#b74b4b" }}>
                        Hi, I'm <strong>Sakshi Singh</strong>, a passionate and detail-oriented 
                        Frontend Developer with a foundation in backend frameworks, API development, 
                        databases, and Git version control.
                    </p>
                    <p style={{ color: "#b74b4b" }}>
                        Currently pursuing a <strong>Bachelor of Engineering</strong> in Computer Engineering 
                        at Shree L. R. Tiwari College of Engineering, I thrive on solving complex problems 
                        and building intuitive, user-friendly applications.
                    </p>
                    <p style={{ color: "#b74b4b" }}>
                        I have experience working on diverse projects, including 
                        <strong> real-time chat applications, music streaming platforms, OTT apps, 
                        and personal task managers.</strong>
                    </p>

                    {/* ✅ Scrolls to Contact Section when clicked */}
                    <Link to="contact" smooth={true} duration={500}>
                        <button 
                            style={{
                                height: "50px",
                                width: "170px",
                                color: "white",
                                borderRadius: "15px",
                                cursor: "pointer",
                                backgroundColor: "#b74b4b",
                                border: "2px solid white",
                                marginTop: "10px",
                                display: "block",
                                
                                marginRight: "auto",
                            }}
                        >
                            Let's Connect
                        </button>
                    </Link>
                </motion.div>

                {/* Image Section */}
                <motion.img 
                    src={myImage} 
                    alt="Sakshi Singh"
                    style={{
                        maxWidth: "100%",
                        width: "350px",
                        borderRadius: "40px",
                        boxShadow: "0px 4px 10px white"
                    }}
                    initial={{ opacity: 0 }}
                    animate={animate ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                />
            </motion.div>
        </div>
    );
}

export default About;







