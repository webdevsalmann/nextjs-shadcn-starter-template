import { legalMd } from "@/lib/metaData";

export const metadata = {
  title: legalMd.title,
  description: legalMd.description,
}

export default function RootLayout({ children }) {
  return (
    <div className="header-space">
      {children}
    </div>
  )
}