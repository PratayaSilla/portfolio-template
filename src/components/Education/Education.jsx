import "./Education.css"

function Education() {

  const educations = [
    {
      degree: "MBA",
      institution: "MIT, Boston",
      period: "2015 - 2019",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
    {
      degree: "BTech",
      institution: "Lovely Unprofessional Univeristy",
      period: "2011 - 2015",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
    {
      degree: "INTERMIDIATE (XII)",
      institution: "D.Paul's School",
      period: "2009 - 2010",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
    {
      degree: "MATRICULATION (X)",
      institution: "D.Paul's School",
      period: "2006 - 2007",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
  ]

  return (
    <div className="education-container">
      <div className="education-header">
        <h1 className="education-title">EDUCATION</h1>
        <div className="education-divider"></div>
      </div>

      <div className="education-grid">
        {educations.map((edu, index) => (
          <div className="education-card" key={index}>
            <h2 className="education-degree">{edu.degree}</h2>
            <p className="education-institution">{edu.institution}</p>
            <p className="education-period">{edu.period}</p>
            <p className="education-description">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
