"use client"

import CsvUploader from '@/components/CsvUploader'
import LightRays from '@/components/LightRays'

function page() {
  return (
    <div 
      className="relative min-h-screen h-[600px] bg-[#000000] overflow-hidden flex items-center justify-center"
    >      
      <div className="relative z-10 text-center w-full px-4">
        <div className="mb-30">
          <h1 className="text-7xl font-bold text-white drop-shadow-lg">
            CSV Runner Dashboard
          </h1>
        </div>

        <CsvUploader />
      </div>
    </div>
  )
}

export default page