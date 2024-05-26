import Contact from "@/components/shared/Contact";
import { contactMd } from "@/lib/metaData";

export const metadata = {
    title: contactMd.title,
    description: contactMd.description,
}

export default function page() {
    return (
        <Contact page />
    );
}
