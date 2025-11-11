import { useContext  } from "react"
import { CsvContext } from "@/context/CsvContext"

export const useCsv = () => {
    const context = useContext(CsvContext)
    if (!context) {
        throw new Error("useCsv must be used within a CsvProvider")
    }
    return context
}