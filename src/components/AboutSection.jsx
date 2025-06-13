import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const roles = ["a Developer", "an Innovator", "a Problem-Solver"];
const typingSpeed = 100; // ms per character
const pauseDuration = 2000; // ms to pause on full word

export const AboutSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const currentRole = roles[roleIndex];
    let timeout = isDeleting ? typingSpeed / 2 : typingSpeed;

    // When word fully typed
    if (!isDeleting && text === currentRole) {
      // If last role, finish
      if (roleIndex === roles.length - 1) {
        setIsFinished(true);
        return;
      }
      // pause then start deleting
      timeout = pauseDuration;
      const pauseTimer = setTimeout(() => setIsDeleting(true), pauseDuration);
      return () => clearTimeout(pauseTimer);
    }

    // When fully deleted, move to next
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex(prev => prev + 1);
      timeout = typingSpeed;
    }

    const timer = setTimeout(() => {
      setText(prev => {
        if (!isDeleting) {
          return currentRole.substring(0, prev.length + 1);
        } else {
          return currentRole.substring(0, prev.length - 1);
        }
      });
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, isFinished]);

  return (
    <section
      id="about"
      className="py-32 px-6 min-h-screen flex items-center justify-center text-center"
    >
      <div className="max-w-4xl w-full space-y-12">
        {/* Heading */}
        <div className="space-y-6">
          <p className="text-2xl text-muted-foreground font-medium">
            Hello, My name is
          </p>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Arnav Daryani
          </h1>
          <div className="text-3xl md:text-4xl">
            <span className="text-muted-foreground">And I'm &nbsp;</span>
            <span className="text-primary font-semibold">{text}</span>
            {!isFinished && <span className="blinking-cursor">|</span>}
          </div>
        </div>

        {/* Bio */}
        <p className="text-muted-foreground text-2xl leading-relaxed max-w-2xl mx-auto">
        I am a rising junior at Purdue University, majoring in Computer Science with a concentration in Machine Learning, along with minors in Mathematics, and Economics.
        </p>
        <p className="text-muted-foreground text-2xl leading-relaxed max-w-2xl mx-auto">
        I have a strong passion for full-stack development and building end-to-end software solutions.
        </p>
        {/* Social Links */}
        <div className="flex space-x-6 justify-center">
          {[
            { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/arnav-daryani/", label: "LinkedIn" },
            { Icon: FaGithub, href: "https://github.com/arnavdaryani", label: "GitHub" },
            { Icon: Mail, href: "mailto:arnavdaryani@gmail.com", label: "Email" }
          ].map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all duration-300"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Download CV Button */}
        <div>
          <a
            href="/Personal-Website/ArnavDaryaniResume.pdf"
            target="_blank"
            className="inline-flex items-center gap-4 px-10 py-5 text-xl bg-primary text-background font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25"
          >
            <Download size={24} />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

// Add this CSS in your global styles or component CSS:
// .blinking-cursor {
//   display: inline-block;
//   width: 1ch;
//   animation: blink 1s steps(2, start) infinite;
// }
// @keyframes blink {
//   to {
//     visibility: hidden;
//   }
// }