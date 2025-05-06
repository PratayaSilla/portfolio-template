import "./About.css"

function SkillBar({ name, description, percentage }) {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="skill-percentage">
        <span>{percentage} %</span>
      </div>
    </div>
  )
}

export default SkillBar
