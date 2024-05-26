import { baseUrl } from "@/lib/config";

export default function sitemap() {
    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/services`,
        },
        {
            url: `${baseUrl}/contact`,
        },
        {
            url: `${baseUrl}/credits`,
        },
        {
            url: `${baseUrl}/legal`,
        },
    ]
}