import "./Experience.css"

function Experience() {
  const experiences = [
    {
      title: "Senior Data analyst",
      company: "Superco",
      period: "2019 - present",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
    {
      title: "Senior Data analyst",
      company: "Superco",
      period: "2019 - present",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
    {
      title: "Senior Data analyst",
      company: "Superco",
      period: "2019 - present",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
    {
      title: "Senior Data analyst",
      company: "Superco",
      period: "2019 - present",
      description:
        "Led the redesign of the flagship mobile application, resulting in a increase in user retention within six months. Implemented a streamlined user onboarding process, reducing user drop-offs",
    },
  ]

  const stats = [
    {
      number: "380 +",
      label: "projects completed",
    },
    {
      number: "420 +",
      label: "satisfied customers",
    },
    {
      number: "2k +",
      label: "positive reviews",
    },
  ]

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">EXPERIENCE</h1>
        <div className="experience-divider"></div>
      </div>

      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h2 className="experience-job-title">{exp.title}</h2>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-period">{exp.period}</p>
            <p className="experience-description">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;
