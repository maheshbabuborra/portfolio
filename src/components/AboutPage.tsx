import ContainerTitle from "@/components/Common/ContainerTitle";
import EmailButton from "@/components/Common/EmailButton";
import GetInTouchButton from "@/components/Common/GetInTouchButton";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { siteConfig } from "@/config/site.config";

const SKILLS = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "TensorFlow / Keras",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "Streamlit",
  "Java",
  "SQL",
  "JavaScript",
  "HTML & CSS",
  "Git & GitHub",
];

const SECTIONS = [
  {
    title: "Who I Am",
    content: `I am Mahesh Babu, a 3rd-year BTech student specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning.`,
  },
  {
    title: "What I Do & What I'm Learning",
    content: `My technical journey is centered around understanding how software and intelligent systems can solve practical problems. Rather than only studying theory, I enjoy learning concepts by building them. My current focus includes Python, Machine Learning, Deep Learning, Natural Language Processing, SQL, Java, modern web development, Git, and AI application development.`,
  },
  {
    title: "Why AI & Machine Learning",
    content: `I have a particular interest in Machine Learning because it combines programming, data, mathematics, and problem solving. I am passionate about exploring classification, prediction, NLP, and intelligent assistants. Alongside AI/ML, I build web interfaces so my models can become usable, accessible applications rather than remaining isolated experiments.`,
  },
  {
    title: "Real-World Focus: Civic Tech & Problem Solving",
    content: `I enjoy building projects around real-world needs. One of my flagship initiatives is Village Voice — a smart complaint and resolution platform designed to help citizens report local civic issues (roads, water, electricity) while using AI to automatically categorize, route, and organize complaints efficiently.`,
  },
  {
    title: "Goals & Direction",
    content: `I am currently focused on strengthening my core computer science fundamentals, building meaningful AI/ML projects, participating in hackathons, and preparing for future internships and opportunities in software engineering, AI, and Machine Learning roles.`,
  },
];

const AboutPage = () => {
  return (
    <div className="max-w-3xl mx-auto relative md:p-8 rounded-2xl">
      <BackgroundBeams />

      <div className="relative z-10 space-y-2 md:space-y-6">
        <ContainerTitle title={siteConfig.name} />

        <h3 className="text-sm uppercase tracking-wide text-gray-500">
          {siteConfig.role}
        </h3>

        <ul className="flex flex-wrap gap-1 md:gap-2">
          {SKILLS.map((skill) => (
            <li key={skill} className="px-3 py-1 bg-gray-100 rounded-full text-xs">
              {skill}
            </li>
          ))}
        </ul>

        {SECTIONS.map(({ title, content }) => (
          <section key={title} className="md:space-y-1">
            <h4 className="md:text-lg font-semibold">{title}</h4>
            <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        ))}

        <div className="flex gap-4 pt-4">
          <GetInTouchButton />
          <EmailButton />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
