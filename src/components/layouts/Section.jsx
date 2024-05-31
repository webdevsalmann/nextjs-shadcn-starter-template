import { cn } from "@/lib/utils";

export default function Section({ className, wrapperClass, children, wrapperProps, ...rest }) {
    return (
        <section className={cn(className)} {...rest}>
            <div className={cn("mx-auto container p-6 sm:py-12 md:p-16 lg:p-20", wrapperClass)} {...wrapperProps}>
                {children}
            </div>
        </section>
    );
}