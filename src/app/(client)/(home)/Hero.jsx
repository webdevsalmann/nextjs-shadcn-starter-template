import Section from "@/components/layouts/Section";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Hero() {
    return (
        <Section>
            <div className="grid gap-8 md:grid-cols-5">
                <div className="md:col-span-3 flex-center flex-col">
                    <div className="w-full h-fit">
                        <h1>What You Do</h1>
                        <p className="mt-base">
                        How will it make my life better? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex mollitia sunt, optio ad laudantium error quo natus nostrum illo accusamus adipisci! Repudiandae tenetur similique ex. Unde fugiat impedit deleniti maxime.
                        </p>
                        <Link className={`${buttonVariants()} mt-base`} href="/">CTA</Link>
                    </div>
                </div>

                <div className="p-6 w-full bg-contain flex-center md:col-span-2">
                    <Image
                        className="object-contain object-center rounded text-foreground"
                        width={500}
                        height={500}
                        src="/images/common/error.png"
                        alt="hero"
                        priority
                    />
                </div>
            </div>
        </Section>
    )
}
