import "./Experience.css"

function Experience() {
  const experiences = [
    {
      title: "Senior Associate Consultant",
      company: "Infosys",
      period: "2022 - present",
      description:
        "Spearheading AI initiatives, ensuring compliance and ethical alignment. Collaborating with cross-functional teams to implement best practices for responsible AI and enhance client trust.",
    },
    {
      title: "Senior Associate Consultant",
      company: "Infosys BPM Limited",
      period: "2023 - 2025",
      description:
        "Collaborated with cross-functional teams to define product vision and strategy. Managed product backlog and facilitated agile ceremonies, improving delivery timelines and stakeholder satisfaction.",
    },
    {
      title: "Associate Consultant",
      company: "Infosys BPM Limited",
      period: "2022 - 2023",
      description:
        "Partnered with business users to gather requirements, translate them into user stories, and support agile sprint planning. Conducted market analysis to contribute to product roadmap development.",
    },
    {
      title: "Deputy Manager",
      company: "ICICI Bank",
      period: "2019 - 2021",
      description:
        "Developed product strategies for MSME initiatives, resulting in a 20% increase in market share. Coordinated cross-functional teams to streamline processes and improve product delivery efficiency.",
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
