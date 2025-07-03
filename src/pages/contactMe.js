import React from "react";
import Particles from "../components/Particles/Particles";
import GlitchText from "../components/GlitchText/GlitchText";
import sel from "../img/Selenium_Logo.png";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaTools, FaCode, FaServer, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiMongodb, SiMysql, SiRedux, SiMaterialui, SiCplusplus, SiC, SiGit, SiAmazonaws, SiLinux, SiNginx, SiFastapi } from "react-icons/si";


const ContactMe = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: "Frontend",
      color: "#f472b6",
      icon: <FaReact />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        {name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Redux", icon: <SiRedux /> },
        { name: "Next.js", icon: <FaReact /> },
      ]
    },
    {
      name: "Backend",
      color: "#6366f1",
      icon: <FaServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Express", icon: <FaNodeJs /> },
        { name: "REST APIs", icon: <FaServer /> },
        { name: "FastAPI", icon: <SiFastapi /> },
      ]
    },
    {
      name: "Languages",
      color: "#4ade80",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C", icon: <SiC /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "SQL", icon: <FaDatabase /> },
        {name: "Java", icon: <FaJava /> },
      ]
    },
    {
      name: "Tools & Others",
      color: "#fb923c",
      icon: <FaTools />,
      skills: [
        { name: "Git", icon: <SiGit /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "Nginx", icon: <SiNginx /> },
        { name: "Selenium", icon: <FaTools /> },
      ]
    }
  ];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0a0a12 0%, #131325 50%, #1a1a4a 100%)",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Outfit', sans-serif",
        position: "relative",
      }}
    >
      {/* Particles Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#6366f1", "#8b5cf6", "#f472b6", "#4ade80", "#fb923c"]}
          particleCount={250}
          speed={0.15}
          particleBaseSize={80}
        />
      </div>

      {/* Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          left: "5%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244, 114, 182, 0.15) 0%, rgba(244, 114, 182, 0) 70%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(74, 222, 128, 0) 70%)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
          color: "#ffffff",
        }}
      >
        {/* Header Section */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              fontSize: "5.5rem",
              fontWeight: "800",
              fontFamily: "'Outfit', sans-serif",
              background: "linear-gradient(to right, #f472b6, #6366f1, #4ade80)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(99, 102, 241, 0.3)",
              marginBottom: "1rem",
            }}
          >
            Get In Touch
          </div>
          <p
            style={{
              fontSize: "1.2rem",
              maxWidth: "700px",
              margin: "0 auto 40px",
              color: "#a0aec0",
              lineHeight: "1.6",
            }}
          >
            I'm always open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Skills Section */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                background: "linear-gradient(to right, #4ade80, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "15px",
              }}
            >
              My Skills
            </h2>
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(90deg, #4ade80, #6366f1)",
                margin: "0 auto 20px",
                borderRadius: "2px",
              }}
            />
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "700px",
                margin: "0 auto",
                color: "#a0aec0",
              }}
            >
              A showcase of my technical expertise in various technologies
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {skillCategories.map((category, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(17, 17, 34, 0.7)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: `0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.2), 0 0 0 4px ${category.color}10`,
                  position: "relative",
                  overflow: "hidden",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 15px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(99, 102, 241, 0.2), 0 0 0 4px ${category.color}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.2), 0 0 0 4px ${category.color}10`;
                }}
              >
                {/* Card Accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "5px",
                    background: `linear-gradient(to right, ${category.color}90, ${category.color}40)`,
                  }}
                />
                
                {/* Decorative Background Element */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "120px",
                    height: "120px",
                    background: `radial-gradient(circle, ${category.color}15 0%, ${category.color}00 70%)`,
                    borderRadius: "50%",
                    transform: "translate(30%, 30%)",
                    zIndex: 0,
                  }}
                />
                
                {/* Category Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "25px",
                  }}
                >
                  <div
                    style={{
                      color: category.color,
                      marginRight: "15px",
                      fontSize: "1.8rem",
                    }}
                  >
                    {category.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "600",
                      color: category.color,
                    }}
                  >
                    {category.name}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "8px 16px",
                        borderRadius: "50px",
                        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, ${category.color}15 100%)`,
                        border: `1px solid ${category.color}30`,
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, ${category.color}25 100%)`;
                        e.currentTarget.style.boxShadow = `0 5px 15px ${category.color}20`;
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, ${category.color}15 100%)`;
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span
                        style={{
                          color: category.color,
                          marginRight: "8px",
                          fontSize: "1rem",
                        }}
                      >
                        {skill.icon}
                      </span>
                      <span style={{ color: "#d1d5db", fontSize: "0.95rem" }}>
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div
          style={{
            background: "rgba(17, 17, 34, 0.7)",
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            padding: "50px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(99, 102, 241, 0.2), 0 0 0 4px rgba(244, 114, 182, 0.1), 0 0 0 7px rgba(74, 222, 128, 0.05)",
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Card Background Accents */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "5px",
              background: "linear-gradient(to right, #f472b6, #6366f1, #4ade80)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "100px",
              height: "100px",
              background: "radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(251, 146, 60, 0) 70%)",
              borderRadius: "50%",
              transform: "translate(30%, 30%)",
            }}
          />

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginBottom: "50px",
              flexWrap: "wrap",
            }}
          >
            <SocialLink icon={<FaInstagram size={30} />} url="https://www.instagram.com/lakshman_2806/" name="Instagram" color="#f472b6" />
            <SocialLink icon={<FaLinkedin size={30} />} url="https://www.linkedin.com/in/sri-lakshmanarao-chikkala-185bbb22a/" name="LinkedIn" color="#6366f1" />
            <SocialLink icon={<FaGithub size={30} />} url="https://github.com/Lakshman2806" name="GitHub" color="#4ade80" />
            <SocialLink icon={<FaEnvelope size={30} />} url="mailto:srilakshman2806@gmail.com" name="Email" color="#fb923c" />
          </div>

          {/* Project Collaboration */}
          <div
            style={{
              marginBottom: "40px",
              padding: "30px",
              background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(244, 114, 182, 0.1) 100%)",
              borderRadius: "15px",
              border: "1px solid rgba(99, 102, 241, 0.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "150px",
                height: "150px",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)",
                borderRadius: "50%",
                transform: "translate(30%, -30%)",
              }}
            />
            
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "15px",
                color: "#f472b6",
                textShadow: "0 0 20px rgba(244, 114, 182, 0.3)",
              }}
            >
              Let's Build Something Amazing
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "25px",
                color: "#d1d5db",
                lineHeight: "1.7",
              }}
            >
              If you would like to build a project together or have an exciting opportunity, 
              I'd love to hear about it. Whether it's a web application, mobile app, or anything in between,
              let's collaborate and create something exceptional.
            </p>
            <button
              style={{
                background: "linear-gradient(to right, #f472b6, #6366f1)",
                color: "white",
                border: "none",
                padding: "12px 30px",
                borderRadius: "50px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
                boxShadow: "0 4px 15px rgba(244, 114, 182, 0.4)",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 7px 20px rgba(244, 114, 182, 0.5)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(244, 114, 182, 0.4)";
              }}
              onClick={() => window.location.href = "mailto:srilakshman2806@gmail.com?subject=Project%20Collaboration"}
            >
              Start a Conversation
            </button>
          </div>

          {/* Resume Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              padding: "20px",
              background: "linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(251, 146, 60, 0.1) 100%)",
              borderRadius: "12px",
              flexWrap: "wrap",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(74, 222, 128, 0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100px",
                height: "100px",
                background: "radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, rgba(74, 222, 128, 0) 70%)",
                borderRadius: "50%",
                transform: "translate(-30%, 30%)",
              }}
            />
            
            <FaFileAlt size={24} color="#4ade80" />
            <span style={{ color: "#d1d5db", fontSize: "1.1rem", position: "relative", zIndex: 1 }}>
              View my resume for detailed experience and skills
            </span>
            <a
              href="https://drive.google.com/file/d/1YdoDed6WNrTTNxaSuwMkjxb3ifCwoByn/view?usp=sharing"
              download="Lakshman_Resume.pdf"
              style={{
                background: "linear-gradient(to right, #4ade80, #fb923c)",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                display: "inline-block",
                transition: "all 0.3s ease",
                border: "none",
                boxShadow: "0 4px 12px rgba(74, 222, 128, 0.3)",
                position: "relative",
                zIndex: 1,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 15px rgba(74, 222, 128, 0.4)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(74, 222, 128, 0.3)";
              }}
            >
              Download Resume
            </a>
          </div>
        </div>

        <br/>
      </div>
    </div>
  );
};

// Social Link Component
const SocialLink = ({ icon, url, name, color }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#d1d5db",
        textDecoration: "none",
        transition: "transform 0.3s, color 0.3s",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.color = color;
        const iconContainer = e.currentTarget.querySelector('.icon-container');
        if (iconContainer) {
          iconContainer.style.background = `rgba(255, 255, 255, 0.1)`;
          iconContainer.style.boxShadow = `0 0 20px ${color}40, 0 0 0 1px ${color}30`;
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.color = "#d1d5db";
        const iconContainer = e.currentTarget.querySelector('.icon-container');
        if (iconContainer) {
          iconContainer.style.background = "rgba(255, 255, 255, 0.05)";
          iconContainer.style.boxShadow = "none";
        }
      }}
    >
      <div
        className="icon-container"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          borderRadius: "50%",
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          transition: "all 0.3s ease",
          border: `1px solid ${color}30`,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: color,
            opacity: 0.6,
            borderRadius: "2px",
          }} 
        />
        {icon}
      </div>
      <span style={{ fontSize: "0.9rem" }}>{name}</span>
    </a>
  );
};

export default ContactMe;