import { motion } from "framer-motion";

function Skills() {
    const skills = [
        { name: "HTML", level: "90%" },
        { name: "CSS", level: "85%" },
        { name: "JavaScript", level: "80%" },
        { name: "React.js", level: "75%" },
        { name: "Node.js", level: "70%" },
        { name: "Flutter", level: "65%" },
        { name: "Git", level: "85%" },
        { name: "Database (SQL & NoSQL)", level: "80%" },
        { name: "UI/UX Design", level: "75%" },
        { name: "Cloud Computing", level: "70%" },
    ];

    return (
        <div id="skills" style={{ textAlign: "center", padding: "50px", background: "transparent" }}>
            <h1 style={{ color: "#b74b4b", fontSize: "2.5rem", marginBottom: "30px" }}>My Skills</h1>
            <div style={{ 
                display: "flex", 
                justifyContent: "center", 
                flexWrap: "wrap", 
                gap: "20px", 
                maxWidth: "900px", 
                margin: "auto"
            }}>
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        style={{
                            width: "300px",
                            padding: "20px",
                            borderRadius: "10px",
                            border: "2px solid white",
                            backgroundColor: "#1e1e1e",
                            boxShadow: "2px 4px 8px white",
                            textAlign: "left"
                        }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <strong style={{ color: "#b74b4b", fontSize: "1.3rem" }}>{skill.name}</strong>
                        <div style={{
                            background: "#333",
                            borderRadius: "5px",
                            overflow: "hidden",
                            marginTop: "10px"
                        }}>
                            <motion.div
                                style={{
                                    height: "12px",
                                    background: "#b74b4b",
                                    width: skill.level
                                }}
                                initial={{ width: "0%" }}
                                whileInView={{ width: skill.level }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                        <p style={{ color: "white", fontSize: "14px", marginTop: "5px" }}>
                            Proficiency: <strong>{skill.level}</strong>
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;


