import { useEffect } from "react";

function useMouseEffect() {
  useEffect(() => {
    const mouseMove = (e) => {
      window.document.body.style.setProperty(
        "--xMask",
        (e.pageX - window.innerWidth / 2) / 50 + "px"
      );
      window.document.body.style.setProperty(
        "--yMask",
        (e.pageY - window.innerHeight / 2) / 50 + "px"
      );
      window.document.body.style.setProperty("--x", e.pageX + "px");
      window.document.body.style.setProperty("--y", e.pageY + "px");
    };

    window.addEventListener("mousemove", (e) => {
      mouseMove(e);
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        mouseMove(e);
      });
    };
  }, []);
}

export default useMouseEffect;
