import React from "react";
import Aurora from "../components/Aurora/Aurora";
import SplitText from "../components/SplitText/SplitText";
import { Typography } from "@mui/material";
import GradientText from "../components/GradientText/GradientText";
import ShinyText from "../components/ShinyText/ShinyText";
import RotatingText from "../components/RotatingText/RotatingText";
import ScrollReveal from "../components/ScrollReveal/ScrollReveal";
import TiltedCard from "../components/TiltledCard/TiltedCard";
import dp from "../img/dp.jpg"; // Adjust the path as necessary


const Home = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "auto", // Allow full scrolling
        position: "relative",
        overflow: "visible", // Enable scrolling
        fontFamily: "'Outfit', sans-serif", // Ensure consistent font

      }}
    >
      {/* Fixed Aurora Background (stays in place during scroll) */}
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
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.7}
          amplitude={0.5}
          speed={0.5}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* FIRST SECTION - Introduction */}
      <section
        style={{
          height: "100vh", // Full viewport height
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            color: "white",
            marginTop: "-10%",
            fontSize: "clamp(0.5rem, 10vh, 20rem)",
            fontWeight: "bold",
          }}
        >
          <SplitText
            text="Hello, This is Lakshman!"
            className="jstext"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <div
          style={{
            color: "white",
            fontSize: "clamp(0.5rem, 5vh, 20rem)",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          <div className="flex flex-row items-center justify-center gap-4">
            <ShinyText
              text="I am a"
              disabled={false}
              speed={8}
              className="custom-class"
            />

            <RotatingText
              texts={["CS Enthusiast", "Competitor at Heart", "Sports Buff"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-blue-400 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </section>

      {/* SECOND SECTION - ScrollReveal Quote */}
      {/* SECOND SECTION - ScrollReveal About + Pic */}
      <section
        style={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column", // changed to column for vertical stacking clearly
          position: "relative",
          zIndex: 2,
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        {/* About Me heading now clearly at center top */}
        <Typography
          variant="h2"
          style={{
            color: "white",
            fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
            marginBottom: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "'Outfit', sans-serif", // Ensure consistent font
          }}
        >
          About Me
        </Typography>

        {/* Main content: Text and Image side-by-side */}
        <div
          style={{
            display: "flex",
            flexDirection: "row", // side-by-side clearly
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            maxWidth: "1200px",
          }}
        >
          {/* Text content (left side) without heading */}
          <div
            style={{
              flex: 2, // spanned width clearly (2/3)
              color: "white",
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              lineHeight: 1.6,
              minWidth: "300px",
            }}
          >
            <p style={{ marginBottom: "1.5rem" }}>
              I'm a passionate Computer Science enthusiast with a love for
              solving complex problems through elegant code. My journey in tech
              began with a curiosity about how things work internally, which
              quickly evolved into a deep fascination with algorithms and
              systems design.
            </p>

            <p style={{ marginBottom: "1.5rem" }}>
              I’m a competitive person who enjoys solving problems. I’m really
              interested in how computer science and engineering are growing,
              and I’m excited to be part of that progress and contribute in my
              own way.
            </p>
          </div>

          {/* Image (right side clearly) */}
          <div
            style={{
              flex: 1, // 1/3 space clearly
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "250px",
              height: "auto",
            }}
          >
            <TiltedCard
              imageSrc={dp}
              altText="Lakshman"
              captionText="Lakshman"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
