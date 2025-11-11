"use client"

import CsvUploader from '@/components/CsvUploader'
import LightRays from '@/components/LightRays'

function page() {
  return (
    <div 
      className="relative min-h-screen h-[600px] bg-[#000000] overflow-hidden flex items-center justify-center"
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        lightSpread={1.9}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      
      <div className="relative z-10 text-center w-full px-4">
        <h1 className="text-7xl font-bold text-white mb-8 drop-shadow-lg">
          CSV Runner Dashboard
        </h1>
        <CsvUploader />
      </div>
    </div>
  )
}

export default page