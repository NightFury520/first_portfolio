import React, { useState, useEffect } from "react";

const CursorTrail = () => {
  const [cursorPositions, setCursorPositions] = useState([]);

  useEffect(() => {
    let intervalId;
    const updateCursorPositions = (e) => {
      setCursorPositions((prevPositions) => [
        ...prevPositions,
        { x: e.clientX, y: e.clientY },
      ]);
    };
    window.addEventListener("mousemove", updateCursorPositions);
    intervalId = setInterval(() => {
      setCursorPositions((prevPositions) => prevPositions.slice(1));
    }, 20);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("mousemove", updateCursorPositions);
    };
  }, []);

  return (
    <svg style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%" }}>
      {cursorPositions.map((position, index) => {
        if (index === 0) return null;

        const prevPosition = cursorPositions[index - 1];
        const gradientId = `gradient-${index}`;
        return (
          <React.Fragment key={index}>
            <defs>
              <linearGradient id={gradientId} x1={prevPosition.x} y1={prevPosition.y} x2={position.x} y2={position.y}>
                <stop offset="0%" stopColor="#FFEA00" />
                {/* <stop offset="25%" stopColor="#73A5C6" />
                <stop offset="75%" stopColor="#528AAE" /> */}
                <stop offset="100%" stopColor="#FCF55F" />
              </linearGradient>
            </defs>
            <line
              x1={prevPosition.x}
              y1={prevPosition.y}
              x2={position.x}
              y2={position.y}
              stroke={`url(#` + gradientId + `)`}
              strokeWidth="2"
            />
          </React.Fragment>
        );
      })}
    </svg>
  );
};

export default CursorTrail;
