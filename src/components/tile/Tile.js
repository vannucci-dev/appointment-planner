import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((parameter, index) => {
        return (
          <p className={`${index === 0 ? "tile-title" : ""} tile`} key={index}>
            {parameter}
          </p>
        );
      })}
    </div>
  );
};
