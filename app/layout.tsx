"use client"

import "./globals.css";
import { CsvProvider } from "@/context/CsvContext";
import { Toaster } from "react-hot-toast";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CsvProvider>
          {children}
          <Toaster position="top-center"/>
        </CsvProvider>
      </body>
    </html>
  )
}

export default RootLayout