import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Tjänster</h1>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
            return (
                <WorkCard
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                key={ind}
             />
            );
        }
        )}
      </div>
    </div>
  );
};

export default Work;
