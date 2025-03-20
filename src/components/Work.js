import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

const Work = () => {
  return (
    <div id="tjanster" className="work-container">
      <h2 className="project-heading">Tjänster</h2>
      <div className="project-container">
        {WorkCardData.map((val, ind) => {
          return (
            <WorkCard
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              id={val.id}
              key={ind}
              width={val.width}
              height={val.height}
              alt={val.alt}
              loading={val.loading}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Work
