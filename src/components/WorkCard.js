import "./WorkCardStyles.css"
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img
        src={props.imgsrc || "/placeholder.svg"}
        alt={props.alt || "Projektbild"}
        title={props.alt || "Projektbild"}
        width={props.width}
        height={props.height}
        loading={props.loading || "lazy"}
      />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <NavLink to={`/tjanster/${props.id}`} className="btn">
            Se mer
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default WorkCard

