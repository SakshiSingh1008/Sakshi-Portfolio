import React from "react";
import { motion } from "framer-motion";
import Image from "./WhatsApp Image 2025-02-19 at 11.27.37.jpeg";
import myImage1 from "./icons8-linkedin-50.png";
import myImage2 from "./icons8-github-logo-64.png";
import myImage3 from "./icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png";

function Home() {
    return (
        <div 
            className="container"
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "100vh",
                padding: "50px 10%",
                
                color: "white",
                flexWrap: "wrap", // Makes it responsive
            }}
        >
            {/* Left Section (Bio) */}
            <motion.div 
                className="bio"
                style={{
                    textAlign: "start",
                    maxWidth: "600px",
                    width: "100%",
                    marginBottom: "30px",
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <h2>Hey, I'm <span style={{ color: "#b74b4b" }}>Sakshi</span></h2>
                <h1>I'm a <span style={{ color: "#b74b4b" }}>Developer</span></h1>
                <p>
                    Passionate <strong style={{ color: "#b74b4b" }}>Frontend Developer</strong> specializing in 
                    <strong style={{ color: "#b74b4b" }}> React, JavaScript, and UI/UX Design.</strong> 
                    I build interactive, responsive, and user-friendly web applications.
                    Always excited to learn new technologies and take on challenges!
                </p>

                {/* Social Icons */}
                <motion.div 
                    style={{ marginTop: "20px", display: "flex", gap: "15px" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <a href="https://www.linkedin.com/in/sakshi-singh-3a7448283/" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            src={myImage1} 
                            alt="LinkedIn"
                            style={{ width: "40px", height: "40px" }}
                            whileHover={{ scale: 1.2 }}
                        />
                    </a>
                    <a href="https://github.com/SakshiSingh1008" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            src={myImage2} 
                            alt="Github"
                            style={{ width: "40px", height: "40px" }}
                            whileHover={{ scale: 1.2 }}
                        />
                    </a>
                    <a href="https://leetcode.com/u/itz_sak_2052/" target="_blank" rel="noopener noreferrer">
                        <motion.img 
                            src={myImage3} 
                            alt="Leetcode"
                            style={{ width: "40px", height: "40px" }}
                            whileHover={{ scale: 1.2 }}
                        />
                    </a>
                </motion.div>

                {/* Download CV Button */}
                <motion.div 
                    style={{ marginTop: "20px" }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a href="src/components/Sakshi Singh resume.pdf" download="Sakshi_Singh_Resume.pdf">
                        <motion.button
                            style={{
                                width: "200px",
                                height: "50px",
                                cursor: "pointer",
                                color: "white",
                                backgroundColor: "#b74b4b",
                                borderRadius: "15px",
                                border: "2px solid white",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download CV
                        </motion.button>
                    </a>
                </motion.div>
            </motion.div>

            {/* Right Section (Profile Image) */}
            <motion.div 
                className="image"
                style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.img 
                    src={Image} 
                    alt="Profile"
                    style={{
                        width: "350px", 
                        height: "350px", 
                        borderRadius: "50%", 
                        objectFit: "cover",
                        boxShadow: "0px 4px 10px #b74b4b",
                        border: "5px solid #b74b4b",
                    }}
                    whileHover={{ scale: 1.1 }}
                />
            </motion.div>
        </div>
    );
}

export default Home;


