import StepCard from "@/components/cards/StepCard"
import Section from "@/components/layouts/Section"

export default function Process() {
  return (
    <Section>
      <div className="mx-auto md:w-4/5 md:text-center">
        <h2>Trust the process</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?</p>
      </div>

      <div className="mt-block grid md:grid-cols-3 gap-base">
        <StepCard step={1} title="title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa inventore magni." />
        <StepCard step={2} title="title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa inventore magni." />
        <StepCard step={3} title="title" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsa inventore magni." />
      </div>
    </Section>
  )
}