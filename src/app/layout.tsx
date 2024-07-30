import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/global/header/header"
import Footer from "@/components/global/footer/footer"

const inter = Inter({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Comunidade Amigos do CX Angola",
  description: "Amigos do CX",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <main className="flex flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
