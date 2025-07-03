import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Particles from "../components/Particles/Particles";
import schoolLogo from "../img/schoolLogo.png";
import iiithLogo from "../img/iiith.jpeg";
import confiscoreLogo from "../img/confiscore.jpeg";
import walmartLogo from "../img/walmart_logo.jpeg";
import taLogo from "../img/TA.png";
import ctop from "../img/ctopico.png";

const Education = () => {
  return (
    <div
      className="education-page"
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "auto", // Allow full scrolling
        position: "relative",
        overflow: "visible", // Enable scrolling
        fontFamily: "'Outfit', sans-serif", // Ensure the font is applied
        background: "linear-gradient(to bottom, #0a0a12, #131325)", // Gradient background
      }}
    >
      <div
        style={{
          position: "fixed", // Changed from absolute to fixed
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
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
      <br />
      <br />
      <h2 className="text-4xl font-bold text-white mb-12 text-center">
        Education & Work Experience
      </h2>

      <VerticalTimeline animated={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2021"
          iconStyle={{ boxShadow: "none" }}
          //   contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          icon={
            <img
              src={schoolLogo}
              alt="School Logo"
              style={{ width: "100%", height: "100%" }}
              className="school-logo"
            />
          }
          shadow={true}
          //date should be in white bold color, so give tailwind className and bigger font
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">
            Aditya Talent School and Junior College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">MPC Stream</h4>
          <p>
            Scored 10/10 CGPA in 10th grade and achieved AIR 156 and 1729 in JEE
            Mains and Advanced
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2021"
          iconStyle={{ boxShadow: "none" }}
          icon={
            <img
              src={iiithLogo}
              alt="IIITH Logo"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="iiith-logo"
            />
          }
          shadow={true}
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">
            <p>
              International Institute of Information Technology, Hyderabad,IIITH
            </p>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            <p>Btech in Computer Science and Engineering</p>
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2023 - April 2023"
          iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
          icon={
            <img
              src={confiscoreLogo}
              alt="Confiscore"
              // make it larger
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="Confiscore"
            />
          }
          shadow={true}
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">Confiscore</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Full Stack Developer Intern
          </h4>
          <p>
            Improved the Confiscore App by enhancing the UI, fixing bugs,
            enabling email signup, and allowing reviewers to submit reviews
            without logging in.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2024 - July 2024"
          iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
          icon={
            <img
              src={walmartLogo}
              alt="Walmart"
              // make it larger
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="Walmart-logo"
            />
          }
          shadow={true}
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">Walmart</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Developer Intern
          </h4>
          <p>
            Worked as a software development intern in YMS team at Walmart. Made
            UI changes along with implementing a new feature in both backend and
            frontend
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2024 - Dec 2024"
          iconStyle={{ boxShadow: "none", backgroundColor: "transparent" }}
          icon={
            <img
              src={taLogo}
              alt="TA Logo"
              // make it larger
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="TA-logo"
            />
          }
          shadow={true}
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">
            IIITH - Real Analysis
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Teaching Assistant
          </h4>
          <p>
            Working as a Teaching Assistant for the course Real Analysis under
            Prof Samyadeb Bhattacharya
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2024 - Nov 2024"
          iconStyle={{ boxShadow: "none", backgroundColor: "white" }}
          icon={
            <img
              src={ctop}
              alt="ctop"
              // make it larger
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="ctop"
            />
          }
          shadow={true}
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">BTP Project - ctOP</h3>
          <h4 className="vertical-timeline-element-subtitle">Developer</h4>
          <p>
            Worked at the Smart City Research Center, IIIT Hyderabad, where I
            improved and tested the ctOP platform. I updated the UI, added a
            subscriptions feature on both the frontend and backend, moved the
            system from OM2M to Mobius, tested it using SQLite3, and prepared a
            test report.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2025 - Present"
          iconStyle={{ boxShadow: "none" }}
          icon={
            <img
              src={walmartLogo}
              alt="IIITH Logo"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              className="walmart-logo"
            />
          }
          shadow={true}
          dateClassName="text-white font-bold text-lg"
        >
          <h3 className="vertical-timeline-element-title">
            Walmart Global Tech
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Software Development Engineer - II
          </h4>
          <p>Joined as a Software development engineer after PPO offer</p>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Achievements Section */}
      <div className="achievements-section py-16">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Achievements & Awards
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Achievement Card 1 */}
            <div className="achievement-card bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
              <div className="achievement-icon mb-4 bg-blue-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                JEE Advanced
              </h3>
              <p className="text-gray-300 text-center">
                AIR 1729 in JEE Advanced 2021
              </p>
            </div>

            {/* Achievement Card 2 */}
            <div className="achievement-card bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="achievement-icon mb-4 bg-purple-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                JEE Mains
              </h3>
              <p className="text-gray-300 text-center">
                AIR 156 in JEE Mains 2021
              </p>
            </div>

            {/* Achievement Card 3 */}
            <div className="achievement-card bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
              <div className="achievement-icon mb-4 bg-green-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                10th Grade
              </h3>
              <p className="text-gray-300 text-center">Perfect 10/10 CGPA</p>
            </div>

            {/* Achievement Card 4 */}
            <div className="achievement-card bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/20">
              <div className="achievement-icon mb-4 bg-amber-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                Hackathon
              </h3>
              <p className="text-gray-300 text-center">
                Won second prize at an OSDG IIITH hackathon for developing a
                Python app with MongoDB.
              </p>
            </div>

            {/* Achievement Card 5
            <div className="achievement-card bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20">
              <div className="achievement-icon mb-4 bg-pink-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">Research Paper</h3>
              <p className="text-gray-300 text-center">Published paper on algorithms at international conference</p>
            </div> */}

            {/* Achievement Card 6 */}
            <div className="achievement-card bg-gray-900 border border-gray-800 rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="achievement-icon mb-4 bg-teal-500/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2">
                KVPY Fellowship
              </h3>
              <p className="text-gray-300 text-center">
                Qualified for KVPY fellowship in SX stream
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Education;
