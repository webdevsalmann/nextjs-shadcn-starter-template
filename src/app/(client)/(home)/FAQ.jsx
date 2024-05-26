import Section from "@/components/layouts/Section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/const"

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto md:w-4/5 md:text-center">
        <h2>FAQs</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?</p>
      </div>

      <div className="mt-block mx-auto md:w-2/3">
        <Accordion type="single" collapsible>
          {faqs.map((item, i) => (
            <AccordionItem value={item.question + i} key={item.question + i}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}