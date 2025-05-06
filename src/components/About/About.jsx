import "./About.css"
import SkillBar from "./SkillBar.jsx"


function About() {
  const skills = [
    { name: "Framer", description: "No code website builder tool", percentage: 92 },
    { name: "Illustrator", description: "Professional graphic tool", percentage: 76 },
    { name: "Figma", description: "User interface design tool", percentage: 80 },
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
            My passion lies in the intersection of art and technology, creating visually captivating interfaces and
            elevating overall user digital experiences
          </p>
        </div>

        <div className="about-right">
          <p>
            I hold a Bachelor of Technology in Computer Science from the esteemed Art University and a Master of Fine
            Arts in Interactive Design. This academic foundation has equipped me with a solid understanding of the
            principles that underpin effective interaction design, providing me with the knowledge to create designs
            that seamlessly blend aesthetics and functionality
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

