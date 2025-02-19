import { useState } from "react";
import { motion } from "framer-motion";
import Image1 from "./icons8-sent-50.png";
import Image2 from "./icons8-call-48.png";
import myImage1 from "./icons8-linkedin-50.png";
import myImage2 from "./icons8-github-logo-64.png";
import myImage3 from "./icons8-level-up-your-coding-skills-and-quickly-land-a-job-24.png";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() === "" || email.trim() === "" || name.trim() === "") {
      alert("Please fill all information before submitting.");
    } else {
      alert("Response submitted successfully! 🎉");
      setMessage(""); // Clear the input after submission
      setName("");
      setEmail("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "5%",
        height: "100vh",
        padding: "5%",
      }}
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "40%",
          minWidth: "300px",
          textAlign: "left",
        }}
      >
        <h1 style={{ color: "#b74b4b", marginBottom: "30px" }}>Contact Me</h1>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img src={Image1} alt="Email" />
          <p style={{ color: "#b74b4b", fontSize: "18px", marginLeft: "10px" }}>
            itzsakshi.2052singh@gmail.com
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
          <img src={Image2} alt="Phone" />
          <p style={{ color: "#b74b4b", fontSize: "18px", marginLeft: "10px" }}>
            +91 900451748
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "20px" }}>
          <a href="https://www.linkedin.com/in/sakshi-singh-3a7448283/" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={myImage1}
              alt="LinkedIn"
              whileHover={{ scale: 1.1 }}
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a href="https://github.com/SakshiSingh1008" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={myImage2}
              alt="Github"
              whileHover={{ scale: 1.1 }}
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a href="https://leetcode.com/u/itz_sak_2052/" target="_blank" rel="noopener noreferrer">
            <motion.img
              src={myImage3}
              alt="Leetcode"
              whileHover={{ scale: 1.1 }}
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </div>
      </motion.div>

      {/* Right Side (Form) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "40%",
          minWidth: "300px",
          textAlign: "left",
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          style={{
            padding: "12px",
            border: "2px solid black",
            borderRadius: "5px",
            fontSize: "18px",
            width: "100%",
            backgroundColor: "#444",
            color: "white",
            marginBottom: "15px",
          }}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          style={{
            padding: "12px",
            border: "2px solid black",
            borderRadius: "5px",
            fontSize: "18px",
            width: "100%",
            backgroundColor: "#444",
            color: "white",
            marginBottom: "15px",
          }}
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          style={{
            padding: "12px",
            border: "2px solid black",
            borderRadius: "5px",
            fontSize: "18px",
            width: "100%",
            height: "150px",
            backgroundColor: "#444",
            color: "white",
            marginBottom: "20px",
            resize: "none",
          }}
        />

        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          style={{
            height: "50px",
            width: "170px",
            color: "white",
            borderRadius: "15px",
            cursor: "pointer",
            backgroundColor: "#b74b4b",
            border: "2px solid white",
            display: "block",
            margin: "auto",
          }}
        >
          Submit
        </motion.button>
      </motion.div>
    </motion.div>
   
  );
}

export default Contact;




