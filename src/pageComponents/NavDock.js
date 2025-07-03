import Dock from "../components/Dock/Dock";
import { useNavigate } from "react-router-dom";

const NavDock = () => {
  // Function to handle navigation
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Dock
        items={[
          {
            icon: "🏠",
            label: "Home",
            onClick: () => navigate("/portfolio"),
          },
          {
            icon: "🎓",
            label: "Education",
            onClick: () => navigate("/portfolio/education"),
          },
          {
            icon: "📁",
            label: "Projects",
            onClick: () => navigate("/portfolio/projects"),
          },
          {
            icon: "📧",
            label: "Contact",
            onClick: () => navigate("/portfolio/contact"),
          },
        ]}
      />
    </div>
  );
};
export default NavDock;
