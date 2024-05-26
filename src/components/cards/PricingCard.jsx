import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingCard({ data: { title, price, description, benefits } }) {
    return (
        <div className={`relative p-sm overflow-hidden border rounded-md ${title == "premium" && "bg-foreground text-background"}`}>
            <h3 className="py-base text-base font-bold border-b capitalize">
                {title}
            </h3>

            <div className="py-base border-b">
                <div><span className="text-3xl font-bold">${price}</span>/month</div>
                <div className="mt-xs text-muted-foreground text-sm">{description}</div>

                <ul className="mt-base">
                    {benefits.map(item => (
                        <li className="flex gap-2" key={title + item}>
                            <span><Check className="mt-px size-4 text-green-600" /></span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Button variant={title == "premium" ? "" : "secondary"} className="mt-base">
                Choose Plan
            </Button>
        </div>
    )
}