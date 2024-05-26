import CriteriaCard from "@/components/cards/CriteriaCard";
import Section from "@/components/layouts/Section";
import { criterias } from "@/lib/const";

export default function Criteria() {
  return (
    <Section>
      <div className="mx-auto md:w-4/5 md:text-center">
        <h2>Still Confused?</h2>
      </div>

      <div className="mt-block grid md:grid-cols-2 gap-base">
        {criterias.map(item => (
          <CriteriaCard data={item} key={item.title} />
        ))}
      </div>
    </Section>
  )
}