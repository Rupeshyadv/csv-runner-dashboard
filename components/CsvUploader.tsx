"use client"

import * as React from 'react'
import Papa, { ParseResult } from 'papaparse'

interface RunEntry {
  date: string
  person: string
  milesRun: string
}

const CsvUploader: React.FC = () => {
  const handleCsvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const csvFile = e.target.files?.[0]

    try {
      if (csvFile) {
        const parsedCSVData = Papa.parse<RunEntry>(csvFile, {
          header: true, 
          skipEmptyLines: true,
          complete: (results: ParseResult<RunEntry>) => {
            console.log('Parsed CSV Data:', results.data)
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

  return (
    <>
      <label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
        choose csv file
        <input 
          type="file" 
          accept='.csv'
          className="hidden" 
          onChange={handleCsvUpload}
        />
      </label>
    </>
  )
}

export default CsvUploader