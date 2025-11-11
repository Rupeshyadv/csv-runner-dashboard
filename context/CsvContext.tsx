"use client"

import React, { createContext, useState, useEffect } from 'react'

interface RunEntry {
    date: string  
    person: string
    milesRun: string
}

interface CsvContextType {
    csvData: RunEntry[]
    setcsvData: React.Dispatch<React.SetStateAction<RunEntry[]>>
}

export const CsvContext = createContext<CsvContextType | undefined>(undefined)

export const CsvProvider = ({ 
    children 
} : { children: React.ReactNode }) => {
    const [csvData, setcsvData] = useState<RunEntry[]>(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("csvData")
            return stored ? JSON.parse(stored) : []
        }
        return []
    })

    // Save on change
    useEffect(() => {
        localStorage.setItem("csvData", JSON.stringify(csvData))
    }, [csvData])

    return (
        <CsvContext.Provider value={{ csvData, setcsvData }}>
            {children}
        </CsvContext.Provider>
    )
}

