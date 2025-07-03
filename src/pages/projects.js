import React, { useState, useRef } from "react";
import Particles from "../components/Particles/Particles";
import CardSwap from "../components/Card/CardSwap";
import { Card } from "../components/Card/CardSwap";
import confiscoreLogo from "../img/confiscore.jpeg";
import GlitchText from "../components/GlitchText/GlitchText";
import greddiit from "../img/greddit.png"
import cShell from "../img/c_shell.png";
import ytParty from "../img/ytParty.png";
import Army from "../img/Army.jpg";
import ctop from "../img/ctop.jpeg";
import music from "../img/music.jpg";
import sprs from "../img/project_review.png";
import smai from "../img/smai.jpg";
import iot from "../img/iot.jpg";
import { Container } from "@mui/material";
// Project Data
const projectsData = [
  {
    id: 1,
    title: "Greddiit",
    tech: "ReactJS • NodeJS • MongoDB • Material UI",
    description:
      "A social media platform similar to Reddiit in which authenticated users can create Groups, make posts, follow each other etc along with chat functionality using web sockets",
    image: greddiit,
    github: "https://github.com/Lakshman2806/greddiit",
  },
  {
    id: 2,
    title: "C Shell",
    tech: "C • OS • System Calls",
    description:
      "Made a custom C shell from scratch using System calls in C with all the features of a standard shell such as ls, cd commands etc along with implementing discover command (searches for a file/directory) and auto complete .",
    image: cShell,
    github: "https://github.com/Lakshman2806/C_Shell",
  },
  {
    id: 3,
    title: "Watch Party Application",
    tech: "ReactJS • NodeJS • Sockets",
    description:
      "Developed a watch party application using distributed system principles enabling users to create rooms for synchronized viewing of YouTube videos Integrated a chat interface for user interaction, with admin privileges. Implemented video synchronization and chat functionality.",
    image: ytParty,
    github: "https://github.com/Anirudh1023/Watch_party",
  },
  {
    id: 4,
    title: "Army DBMS",
    tech: "MySQL • Python • CLI",
    description:"Built a Army DBMS with MySQL database and built a Python CLI environment to interact with the database. It allows users to perform CRUD operations on the database, including adding, updating, and deleting records.",
    image: Army,
    github: "https://github.com/Lakshman2806/Army-DBMS",
  },
  {
    id: 5,
    title: "ctOP",
    tech: "ReactJS • Python • FastAPI • SQLite3",
    description:
    "At the Smart City Research Center (SCRC), IIIT Hyderabad, developed and tested the ctOP platform , making UI changes, implementing a subscriptions feature across the backend and frontend, migrating the application from OM2M to Mobius , and thoroughly testing the backend with SQLite3, followed by generating a test report",
    image: ctop,
  },
  {
    id: 6,
    title: "Rythmic Beat Prediction",
    tech: "Python • Machine Learning • Deep Learning",
    description:
      "Computational model to predict the rhythmic beat pattern of the song and fit them into a tala using a combination of machine learning and deep learning techniques. The model is trained on a dataset of songs with annotated beat patterns, allowing it to learn the underlying rhythmic structure.",
    image: music,
    github: "https://github.com/chekkapallinaveen/rhythmic-beat-prediction",
  },
  {
    id: 7,
    title: "Student Project Review Grading System",
    tech: "ReactJS • NodeJS • MySQL • Material UI • Docker",
    description:
      "The Student Project Review and Grading System aims to streamline and automate the process of project review and grading for all stages of an IT project. It facilitates collaboration between project teams (comprising multiple students/interns) and supervisors (TAs, Project Managers, Architects, Professors) by providing a platform for content creation, review, and grading.This system will improve the efficiency and transparency of the project evaluation process",
    image: sprs,
    github: "https://github.com/DatafoundationSystem/Student-Project-Review-Grading-System_Seven",
  },
  {
    id: 8,
    title: "Neural Network from Scratch",
    tech: "Python • NumPy",
    description:
      "Implemented a fully functional neural network from scratch using Python and NumPy. The network supports forward propagation, backpropagation, and training on datasets, allowing for the classification of data points.",
    image: smai,
  },
  {
    id: 9,
    title: "IoT Projects",
    tech: "ReactJS • IoT • Embedded Systems",
    description:
    "Had hands on experience with IoT projects one based on building an automatic water filler and another project of building a IoT device that helps in farming by reading CO2 levels and displaying them in a MERN based dashboard",
    image: iot,
    github: "https://github.com/Lakshman2806/ESW-Smart-Farming",
  }
];

// Improved styles with your layout requirements:
const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "100vh",
    position: "relative",
    padding: "2rem 4rem",
  },
  headingContainer: {
    textAlign: "left",
    zIndex: 10,
  },
  cardContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 5,
    paddingRight: "80px",
    marginLeft: "30px",
    position: "relative",
    width: "100%",
    maxWidth: "880px", // Limit the width of the card container
    height: "370px", // Set a fixed height for the card container
  },
  projectCardContent: {
    display: "flex",
    height: "100%",
    color: "#ffffff",
    padding: "25px",
    position: "relative",
    borderRadius: "16px",
    background: "rgba(30, 30, 40, 0.7)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
    transition: "all 0.3s ease",
  },
  projectImage: {
    flex: "0 0 40%",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
  projectImageImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },
  projectDetails: {
    flex: "0 0 60%",
    paddingLeft: "25px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  projectTitle: {
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ffffff",
    fontFamily: "'Outfit', sans-serif",
  },
  projectTech: {
    color: "#a0a0a0",
    fontSize: "15px",
    marginBottom: "18px",
    fontFamily: "'Outfit', sans-serif",
  },
  projectDescription: {
    fontSize: "16px",
    lineHeight: "1.7",
    marginBottom: "24px",
    color: "#e0e0e0",
    fontFamily: "'Outfit', sans-serif",
  },
  projectLink: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all 0.3s",
    fontWeight: "600",
    fontFamily: "'Outfit', sans-serif",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
  },
};

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);
  const topCardIndexRef = useRef(0);

  const handleCardChange = (index) => {
    if (index !== undefined) {
      topCardIndexRef.current = index;
      setActiveProject(projectsData[index]);
    }
  };

  return (
    <div
      className="projects-page"
      style={{
        background: "linear-gradient(to bottom, #0a0a12, #131325)",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Outfit', sans-serif",
        position: "relative",
      }}
    >
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Particles */}
      <div
        style={{
          position: "fixed", // Changed from absolute to fixed
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Particles
          particleColors={["#6366f1", "#8b5cf6", "#ffffff"]}
          particleCount={200}
          speed={0.1}
          particleBaseSize={80}
        />
      </div>
      {/* Layout */}
      <div style={styles.pageContainer}>
        {/* Heading Left Side */}
        <div style={styles.headingContainer}>
          <GlitchText
            speed={3}
            enableShadows
            enableOnHover
            className="text-8xl"
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              fontFamily: "'Outfit', sans-serif",
              color: "#fff",
              letterSpacing: "2px",
            }}
          >
            Projects
          </GlitchText>
          <div
            style={{
              width: "80px",
              height: "4px",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              marginTop: "1rem",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Cards on Right Side */}
        <div style={styles.cardContainer}>
          <CardSwap
            cardDistance={65}
            verticalDistance={9}
            delay={3000}
            pauseOnHover
            height={480}
            width={880}
            skewAmount={5}
            easing="elastic.out(1,0.3)"
            onTopCardChange={handleCardChange}
          >
            {projectsData.map((project, index) => (
              <Card key={project.id}>
                <div style={styles.projectCardContent}>
                  <div style={styles.projectImage}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={styles.projectImageImg}
                    />
                  </div>
                  <div style={styles.projectDetails}>
                    <h3 style={styles.projectTitle}>{project.title}</h3>
                    <p style={styles.projectTech}>{project.tech}</p>
                    <p style={styles.projectDescription}>
                      {project.description}
                    </p>
                    {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.projectLink}
                    >
                      GitHub
                    </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Projects;
