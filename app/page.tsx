"use client"

import CsvUploader from '@/components/CsvUploader'

function page() {
  return (
    <>
      <div className="min-h-screen bg-[#000000] ">
        <div
          className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center mb-50"
        >
          <h1 className="text-7xl font-bold text-white">CSV Runner Dashboard</h1>
        </div>

        <div
          className='flex items-center justify-center'
        >
          <CsvUploader />
        </div>
      </div>
    </>

  )
}

export default page