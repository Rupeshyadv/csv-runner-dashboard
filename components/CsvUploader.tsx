"use client"

import React, { useState } from 'react'
import Papa, { ParseResult } from 'papaparse'
import { useCsv } from '@/hooks/useCsv'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

interface RunEntry {
  date: string
  person: string
  milesRun: string
}

const CsvUploader: React.FC = () => {
  const { csvData, setcsvData } = useCsv()
  const [isCSVLoaded, setIsCSVLoaded] = useState(false)
  const router = useRouter()
  
  // parses csv and updates context
  const handleCsvUpload =  (e: React.ChangeEvent<HTMLInputElement>) => {
    const csvFile = e.target.files?.[0]

    try {
      if (csvFile) {
        Papa.parse<RunEntry>(csvFile, {
          header: true, 
          skipEmptyLines: true,
          complete: (results: ParseResult<RunEntry>) => {
            const parsedData = results.data

            // expected headers: date, person, milesRun
            const expectedHeaders = ['date', 'person', 'milesRun']
            // user's chosen file headers
            const fileHeaders = results.meta.fields
            // validate headers
            const hasAllHeaders = expectedHeaders.every(header => 
              fileHeaders?.includes(header)
            )
            const extraHeaders = expectedHeaders.some(header => 
              !fileHeaders?.includes(header)
            )

            if (!hasAllHeaders || extraHeaders) {
              toast.error('Invalid CSV format. Please ensure the file has the correct headers: date, person, milesRun.')
              return
            }

            // check if rows contain empty fields
            const hasEmptyFields = parsedData.some(row => 
              !row.date || !row.person || !row.milesRun
            )

            if (hasEmptyFields) {
              toast.error('CSV contains empty fields. Please ensure all rows are complete.')
              return
            }

            // Data is valid, now add the results.data to context
            setcsvData(results.data)
            toast.success('CSV file uploaded successfully!')
            setIsCSVLoaded(true)
          },
          error: (error: Error) => {
            console.error('Error parsing CSV file:', error.message)
          }
        })
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