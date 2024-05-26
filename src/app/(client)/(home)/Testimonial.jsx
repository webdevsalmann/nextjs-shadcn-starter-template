import TestimonialCard from "@/components/cards/TestimonialCard";
import Section from "@/components/layouts/Section";

const testimonials = [
  {
    id:"ts1",
    tag: "Amazing Work",
    name: "John Smith",
    location: "New York, NY",
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?",
    imageUrl: "/images/persons/1.jpg"
  },
  {
    id:"ts2",
    tag: "Great Service",
    name: "Emily Johnson",
    location: "Los Angeles, CA",
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?",
    imageUrl: "/images/persons/2.jpg"
  },
  {
    id:"ts3",
    tag: "Great Guys",
    name: "Michael Brown",
    location: "Chicago, IL",
    comment: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?",
    imageUrl: "/images/persons/3.jpg"
  }
];

export default function Testimonial() {
  return (
    <Section sectionClass="bg-section-secondary">
      <div className="mx-auto md:w-4/5 md:text-center">
        <h2>What our Customer Says</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?</p>
      </div>

      <div className="mt-block grid gap-4 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <TestimonialCard tag={item.tag} name={item.name} location={item.location} comment={item.comment} imageUrl={item.imageUrl} key={item.id} />
        ))}
      </div>
    </Section>
  )
}
