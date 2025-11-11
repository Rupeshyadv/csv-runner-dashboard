"use client"

import React, { useState } from 'react'
import Papa, { ParseResult } from 'papaparse'
import { useCsv } from '@/hooks/useCsv'
import { useRouter } from 'next/navigation'

interface RunEntry {
  date: string
  person: string
  milesRun: string
}

const CsvUploader: React.FC = () => {
  const { setcsvData } = useCsv()
  const [isCSVLoaded, setIsCSVLoaded] = useState(false)
  const router = useRouter()
  
  // parses csv and updates context
  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const csvFile = e.target.files?.[0]

    try {
      if (csvFile) {
        Papa.parse<RunEntry>(csvFile, {
          header: true, 
          skipEmptyLines: true,
          complete: (results: ParseResult<RunEntry>) => {
            console.log('Parsed CSV Data:', results.data)
            // add the results.data to context
            setcsvData(results.data)
          },
          error: (error: Error) => {
            console.error('Error parsing CSV file:', error.message)
          }
        })
        setIsCSVLoaded(true)
      }
    } catch (error) {
      console.error('Error uploading CSV file:', error)
    }
  }

  const handleViewCSVBtn = () => {
    router.push('/csv')
  }

  const handleViewChartsBtn = () => {
    router.push('/charts')
  }
  
  return (
    <>
      {
        !isCSVLoaded ? (
          <label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
            choose csv file
            <input 
              type="file" 
              accept='.csv'
              className="hidden" 
              onChange={handleCsvUpload}
            />
          </label>
        ) : (
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button
              className="w-full sm:w-auto bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={handleViewCSVBtn}
            >
              View CSV
            </button>
            <button 
              className="w-full sm:w-auto bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              onClick={handleViewChartsBtn}
            >
              View Charts
            </button>
          </div>
        )
      }
    </>
  )
}

export default CsvUploader