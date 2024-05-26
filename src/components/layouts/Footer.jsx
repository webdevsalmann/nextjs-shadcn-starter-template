import Link from "next/link";
import { Ilogo } from "../svgs/svgs";
import Section from "./Section";
import { siteMd } from "@/lib/metaData";

export default function Footer() {
  return (
    <footer className="border-t">
      <Section>
        <div className="mb-8 md:mb-12 lg:mb-16 sm:container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Logo */}
            <div className="">
              <Link className="w-fit flex-center" href="/">
                <Ilogo className="h-14 w-fit text-primary" />
                <span className="sr-only">{siteMd.siteName}</span>
              </Link>
              <p className="leading-6">Your Solution for every problem</p>
            </div>

            {/* Quick Links */}
            <div className="self-start">
              <div className="">
                <div className="font-semibold">Quick Links</div>
                <ul className="mt-2">
                  <li><Link className="text-muted-foreground hover:text-primary hover:underline" href="/">Home</Link></li>
                  <li><Link className="text-muted-foreground hover:text-primary hover:underline" href="/services">Services</Link></li>
                  <li><Link className="text-muted-foreground hover:text-primary hover:underline" href="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>











        {/* Banner */}
        <p className="text-muted-foreground text-sm text-center">
          &copy;Copyright-2024 / <Link className="hover:underline" href="/credits">Credits</Link> / <Link className="hover:underline" href="/legal">Legal</Link> / Developed by <Link className="hover:underline" href="https://webdevsalmann.com/" target="_blank"> webdevsalmann</Link> 💖
        </p>
      </Section>
    </footer>
  )
}
