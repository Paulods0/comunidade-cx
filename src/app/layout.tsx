import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Comunidade de Amigos do CX Angola",
  description: "Amigos do CX",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
