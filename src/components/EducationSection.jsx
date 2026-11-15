const courses = [
  ["CS 471", "Introduction To Artificial Intelligence"],
  ["CS 448", "Relational Database Systems"],
  ["CS 381", "Analysis of Algorithms"],
  ["CS 380", "Python Programming"],
  ["CS 373", "Data Mining & Machine Learning"],
  ["CS 354", "Operating Systems"],
  ["CS 348", "Information Systems"],
  ["CS 252", "Systems Programming"],
  ["CS 251", "Data Structures and Algorithms"],
  ["CS 250", "Computer Architecture"],
  ["CS 240", "Programming in C"],
  ["CS 211", "Competitive Programming 1"],
  ["CS 193", "UNIX Tools"],
  ["CS 182", "Foundations of Computer Science (Discrete Math)"],
  ["CS 180", "Object-Oriented Programming in Java"],
  ["MA 416", "Probability"],
  ["MA 351", "Elementary Linear Algebra"],
  ["MA 341", "Foundations Of Analysis"],
  ["MA 261", "Multivariable Calculus"],
  ["ECON 451", "Game Theory"],
  ["STAT 350", "Introduction to Statistics"],
];

export const EducationSection = () => (
  <section id="education" className="content-section page-width" aria-labelledby="education-title">
    <h2 id="education-title">Education</h2>
    <p className="work-heading"><a href="https://www.purdue.edu/" target="_blank" rel="noopener noreferrer">Purdue University</a></p>
    <p className="role-overview">B.S. Computer Science · Machine Intelligence &amp; Algorithmic Foundations</p>
    <p className="role-overview">Minor in Mathematics</p>
    <details className="coursework">
      <summary>Relevant coursework</summary>
      <ul className="coursework-courses">
        {courses.map(([code, title]) => <li key={code}><span className="coursework-code">{code}</span><span>{title}</span></li>)}
      </ul>
    </details>
  </section>
);
