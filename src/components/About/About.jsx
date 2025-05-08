import "./About.css"
import SkillBar from "./SkillBar.jsx"


function About() {
  const skills = [
    { name: "Product Management", description: "Agile-driven product strategy and team alignment", percentage: 92 },
    { name: "AI/ML & Data Analysis", description: "Using AI and data insights to guide decision-making", percentage: 76 },
    { name: "Stakeholder Management", description: "Building strong relationships, ensure project success.", percentage: 80 },
  ]

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-divider"></div>
      </div>

      <div className="about-content">
        <div className="about-left">
          <p>
          My passion is rooted in leveraging cutting-edge technology to drive digital transformation, focusing on delivering impactful solutions that enhance business performance and client satisfaction.
          </p>
        </div>

        <div className="about-right">
          <p>
          I hold a Post Graduate Diploma in Banking and a Bachelor of Commerce, both of which have provided me with a comprehensive understanding of business strategy, financial management, and how technology can drive digital transformation. This academic background has equipped me with the skills to navigate the intersection of business and technology, enabling me to create impactful solutions that align with organizational goals.
          </p>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <SkillBar key={index} name={skill.name} description={skill.description} percentage={skill.percentage} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

