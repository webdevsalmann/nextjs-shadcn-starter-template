import Section from "@/components/layouts/Section"
import { serviceMd } from "@/lib/metaData"

export const metadata = {
  title: serviceMd.title,
  description: serviceMd.description,
}

export default function page() {
  return (
    <main>
      <Section>
        <h1 className="text-center">Services</h1>
      </Section>
    </main>
  )
}