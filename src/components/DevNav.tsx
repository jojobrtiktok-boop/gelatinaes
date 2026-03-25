import { useNavigate, useLocation } from "react-router-dom";

const ROUTES = [
  "/",
  "/quiz",
  "/quiz/1",
  "/quiz/2",
  "/quiz/3",
  "/quiz/4",
  "/quiz/5",
  "/quiz/6",
  "/quiz/7",
  "/quiz/8",
  "/quiz/9",
  "/quiz/10",
  "/quiz/11",
  "/quiz/12",
  "/quiz/13",
  "/quiz/14",
  "/quiz/15",
  "/quiz/16",
  "/quiz/17",
  "/quiz/18",
  "/quiz/19",
  "/quiz/20",
  "/quiz/21",
  "/quiz/22",
  "/quiz/23",
  "/quiz/24",
  "/quiz/25",
  "/quiz/26",
  "/quiz/27",
  "/quiz/28",
];

const DevNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = ROUTES.indexOf(location.pathname);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < ROUTES.length - 1 && currentIndex !== -1;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        right: 16,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "rgba(0,0,0,0.75)",
        color: "white",
        borderRadius: 999,
        padding: "6px 12px",
        fontSize: 12,
        fontFamily: "monospace",
        boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
        userSelect: "none",
      }}
    >
      <button
        onClick={() => hasPrev && navigate(ROUTES[currentIndex - 1])}
        disabled={!hasPrev}
        style={{
          background: "none",
          border: "none",
          color: hasPrev ? "white" : "#555",
          cursor: hasPrev ? "pointer" : "default",
          fontSize: 16,
          lineHeight: 1,
          padding: "0 4px",
        }}
      >
        ◀
      </button>

      <span style={{ color: "#aaa" }}>
        {currentIndex === -1 ? location.pathname : `${currentIndex + 1}/${ROUTES.length}`}
      </span>

      <button
        onClick={() => hasNext && navigate(ROUTES[currentIndex + 1])}
        disabled={!hasNext}
        style={{
          background: "none",
          border: "none",
          color: hasNext ? "white" : "#555",
          cursor: hasNext ? "pointer" : "default",
          fontSize: 16,
          lineHeight: 1,
          padding: "0 4px",
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default DevNav;
