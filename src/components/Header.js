import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "15px 5%",
        background: "#1e1e1e",
        color: "white",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <p
        style={{
          color: "#b74b4b",
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          whiteSpace: "nowrap", // Prevents text from cutting off
          margin: 0,
        }}
      >
        My Portfolio
      </p>

      {/* Hamburger Menu (Visible on Mobile) */}
      {isMobile && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "#b74b4b",
            display: "block",
          }}
        >
          ☰
        </div>
      )}

      {/* Navigation Menu */}
      <nav
        style={{
          display: isMobile ? (isOpen ? "flex" : "none") : "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "10px" : "20px",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? "60px" : "auto",
          right: isMobile ? "0" : "auto",
          background: isMobile ? "#1e1e1e" : "transparent",
          width: isMobile ? "100%" : "auto",
          textAlign: "center",
          padding: isMobile ? "10px 0" : "0",
        }}
      >
        {["home", "about", "education", "project", "skills", "experience", "contact"].map(
          (section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              style={{
                color: "#b74b4b",
                fontSize: isMobile ? "16px" : "18px",
                fontFamily: "sans-serif",
                cursor: "pointer",
                textDecoration: "none",
                padding: "10px",
                whiteSpace: "nowrap", // Ensures all text is visible
                display: "block",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          )
        )}
      </nav>
    </header>
  );
}

export default Header;






