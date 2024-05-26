import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MonitorSmartphone, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Section from "@/components/layouts/Section";

export default function Introduction() {
   
  return (
    <Section sectionClass="bg-section-secondary" wrapperClass="grid md:grid-cols-2 gap-block" id="something">
      {/* Image */}
      <div className="grid items-center gap-base">
        <Image
          className="object-contain object-center rounded text-foreground"
          width={5000}
          height={5000}
          src="/images/common/error.png"
          alt="hero"
        />
      </div>

      {/* Details */}
      <div>
        <h2 className="text-2xl md:text-3xl md:text-left">Key problem that your service solve.</h2>

        <div>
          <p>Your struggling to get [desirable result] because you don&apos;t have [missing piece]</p>
          <p>you have [example], but you aren&apos;t [achieving the result]</p>
          <p>How does this make them feel?</p>
          <p>Have you been in the same situation. How did you overcome this? how can you help them  to do the same?</p>
        </div>

        <div className="mt-base">
          <div className="flex gap-4 items-center leading-10">
            <Sparkles className="inline size-base text-primary shrink-0" />
            <div className="">Point 1</div>
          </div>

          <div className="flex gap-4 items-center leading-10">
            <Clock className="inline size-base text-primary shrink-0" />
            <div className="">Point 2</div>
          </div>

          <div className="flex gap-4 items-center leading-10">
            <MonitorSmartphone className="inline size-base text-primary shrink-0" />
            <div className="">Point 3</div>
          </div>
        </div>

        <div className="mt-base">
          <Link className={`${buttonVariants({ variant: "outline" })}`} href="/about">
            View More <ArrowRight className="ml-2 size-4 inline" />
          </Link>
        </div>
      </div>
    </Section>
  )
}