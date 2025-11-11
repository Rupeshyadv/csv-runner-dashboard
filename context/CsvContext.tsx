"use client"

import React, { createContext, useState } from 'react'

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
    const [csvData, setcsvData] = useState<RunEntry[]>([])

    return (
        <CsvContext.Provider value={{ csvData, setcsvData }}>
            {children}
        </CsvContext.Provider>
    )
}

