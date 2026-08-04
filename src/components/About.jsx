import profileImg from '../assets/profile.png'

const STATS = [
  { value: '8+', label: 'Projects done' },
  { value: '8+', label: 'Happy clients' },
  { value: '2y', label: 'Experience' },
]

const SKILLS = [
  'Java',
  'React',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Bootstrap',
  'Figma',
  'Git',
]

export default function About() {
  return (
    <section id="about" className="section section-hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="section-eyebrow">About Me</p>
            <h1 className="hero-heading">
              Hi, I&apos;m <span className="text-accent">Johnbel</span>
            </h1>

            <p className="lead-text">
              Freelance <strong>Backend Developer, UI/UX Designer &amp;
              Frontend Developer</strong>. I build systems that handle real
              logic — from payroll rules to inventory management — and design
              interfaces that make them usable.
            </p>

            <p className="body-text">
              Most of my work starts with the awkward part: the business rule
              that does not fit a tidy table, the role that needs different
              permissions, the calculation nobody wrote down. I map those out
              first, then build the interface around them.
            </p>

            <ul className="skill-list" aria-label="Skills and tools">
              {SKILLS.map((skill) => (
                <li className="skill-chip" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>

            <div className="stat-row">
              {STATS.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center">
            <figure className="photo-frame">
              <img
                src={profileImg}
                alt="Johnbel Malinana"
                className="photo"
                width="380"
                height="475"
              />
              <figcaption className="photo-badge">
                <span className="photo-badge-dot" aria-hidden="true" />
                Open to projects
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
