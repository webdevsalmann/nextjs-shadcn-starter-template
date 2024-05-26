import { cn } from "@/lib/utils";

export default function Section({ sectionClass, wrapperClass, children, ...rest }) {
    return (
        <section className={cn(sectionClass)} {...rest}>
            <div className={cn("mx-auto container p-6 sm:py-12 md:p-16 lg:p-20", wrapperClass)}>{children}</div>
        </section>
    )
}
