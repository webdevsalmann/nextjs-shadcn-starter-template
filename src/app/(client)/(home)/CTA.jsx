import Section from "@/components/layouts/Section";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <Section>
      <div className="p-8 bg-muted md:text-center rounded-md overflow-hidden">
        <div className="mx-auto md:w-2/3">
          <h2>What are you waiting for?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vel sed aperiam ipsa delectus, voluptates culpa sit corporis modi esse commodi numquam similique error, laborum atque quia quis! Consequuntur, nostrum.</p>
        </div>

        <div className="mt-base flex-center">
          <Button className="">Open</Button>
        </div>
      </div>
    </Section>
  )
}