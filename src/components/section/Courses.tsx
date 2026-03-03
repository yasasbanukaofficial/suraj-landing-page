import {
  Code2,
  Database,
  Globe,
  MonitorSmartphone,
  Network,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import CourseCard from "../ui/CourseCard";

export default function Courses() {
  const courses = [
    {
      title: "Programming & Problem Solving",
      description:
        "Learn programming fundamentals with Pascal/Python and develop strong algorithmic thinking.",
      icon: Code2,
      topics: [
        "Variables, Data Types & Operators",
        "Control Structures & Loops",
        "Functions & Procedures",
        "Arrays & File Handling",
      ],
    },
    {
      title: "Database Management",
      description:
        "Master database concepts from ER diagrams to SQL queries and normalization.",
      icon: Database,
      topics: [
        "ER Diagrams & Relational Model",
        "SQL Queries & Operations",
        "Normalization (1NF, 2NF, 3NF)",
        "Database Design Projects",
      ],
    },
    {
      title: "Web Development",
      description:
        "Build real websites with HTML, CSS and understand web technologies and protocols.",
      icon: Globe,
      topics: [
        "HTML5 & Semantic Elements",
        "CSS Styling & Layouts",
        "Web Protocols (HTTP/HTTPS)",
        "Client-Server Architecture",
      ],
    },
    {
      title: "Networking & Communication",
      description:
        "Understand how networks work, from LANs to the Internet and data communication.",
      icon: Network,
      topics: [
        "Network Topologies & Types",
        "OSI & TCP/IP Models",
        "IP Addressing & Subnetting",
        "Wireless & Mobile Networks",
      ],
    },
    {
      title: "System Development",
      description:
        "Learn the complete software development life cycle and system analysis techniques.",
      icon: MonitorSmartphone,
      topics: [
        "SDLC Methodologies",
        "System Analysis & Design",
        "DFDs & Flowcharts",
        "Testing & Implementation",
      ],
    },
    {
      title: "ICT & Society",
      description:
        "Explore how ICT impacts society, including ethics, security and emerging technologies.",
      icon: ShieldCheck,
      topics: [
        "Cyber Security & Ethics",
        "Intellectual Property Rights",
        "E-Commerce & E-Governance",
        "Emerging Technologies & AI",
      ],
    },
  ];

  return (
    <section
      id="courses"
      className="px-6 md:px-12 lg:px-20 py-20 lg:py-32 bg-zinc-50/50"
    >
      <SectionHeading
        label="What You Will Learn"
        title="Complete A/L ICT Syllabus"
        description="Every topic in the national A/L ICT curriculum covered in depth with practical exercises and past paper discussions."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}
