import PricingCard from "@/components/cards/PricingCard";
import Section from "@/components/layouts/Section";
import { pricing } from "@/lib/const";

export default function Pricing() {
  return (
    <Section>
      <div className="mx-auto md:w-4/5 md:text-center">
        <h2>Are you ready?</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum molestias sapiente sed, unde ab corrupti ex maxime! Aliquam ea dolores sit incidunt consectetur nobis, est explicabo vitae dolorem fugit tempore?</p>
      </div>

      <div className="mt-block grid gap-base md:grid-cols-3">
        {pricing.map(item => (
          <PricingCard data={item} key={item.title} />
        ))}
      </div>
    </Section>
  )
}