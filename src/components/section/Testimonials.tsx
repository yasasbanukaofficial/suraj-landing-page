import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kavinda Perera",
      year: "2024",
      result: "A Grade",
      quote:
        "Sir's teaching method made ICT so easy to understand. The practical coding sessions were the highlight — I actually enjoyed studying for the exam.",
    },
    {
      name: "Nethmi Fernando",
      year: "2024",
      result: "A Grade",
      quote:
        "I switched to Sir's class in my second year and it was the best decision. His structured approach and past paper discussions helped me score an A.",
    },
    {
      name: "Tharindu Silva",
      year: "2023",
      result: "B Grade",
      quote:
        "The online classes were just as effective as physical ones. Sir always made time to clear our doubts even after class hours.",
    },
    {
      name: "Ishara Jayawardena",
      year: "2023",
      result: "A Grade",
      quote:
        "Programming was my weakest area but Sir's step-by-step approach made it click. The practice problems and model papers were incredibly helpful.",
    },
    {
      name: "Sanduni Rathnayake",
      year: "2024",
      result: "A Grade",
      quote:
        "Learning in Sinhala medium made such a difference for me. Sir explains complex topics in a way that just makes sense.",
    },
    {
      name: "Ravindu Bandara",
      year: "2023",
      result: "A Grade",
      quote:
        "Best ICT tuition class I could have joined. The notes, the teaching style, and the support — everything was top class.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 lg:py-32 bg-zinc-50/50">
      <SectionHeading
        label="Student Testimonials"
        title="What Our Students Say"
        description="Hear from students who have achieved their best results with our ICT program."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} {...testimonial} />
        ))}
      </div>
    </section>
  );
}
