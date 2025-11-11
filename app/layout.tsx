"use client"

import "./globals.css";
import { CsvProvider } from "@/context/CsvContext";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CsvProvider>
          {children}
        </CsvProvider>
      </body>
    </html>
  )
}

export default RootLayout