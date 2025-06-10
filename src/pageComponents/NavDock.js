import Dock from "../components/Dock/Dock";

const NavDock = () => {
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
            onClick: () => console.log("Home clicked"),
          },
          {
            icon: "📁",
            label: "Projects",
            onClick: () => console.log("Projects clicked"),
          },
          {
            icon: "📧",
            label: "Contact",
            onClick: () => console.log("Contact clicked"),
          },
        ]}
      />
    </div>
  );
};
export default NavDock;
