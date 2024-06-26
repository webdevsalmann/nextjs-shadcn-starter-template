import Section from "@/components/layouts/Section";
import Form from "./Form";

export default function Contact({ page,className, title, subTitle }) {
    return (
        <Section className={className}>
            <div className="mx-auto text-center w-11/12 md:w-1/2">
                {page ? <h1 className="mb-2">{title || 'Get in Touch'}</h1> :
                    <h2 className="mb-2">{title || 'Get in Touch'}</h2>
                }
                <p className="">{subTitle || 'Reach out to us for any inquiries or assistance'}</p>
            </div>
            <Form />
        </Section>
    )
}