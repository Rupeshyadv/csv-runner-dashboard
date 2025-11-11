"use client"

import React from "react"
import { 
    BarChart, 
    Bar, 
    XAxis, 
    YAxis, 
    Tooltip, 
    Legend, 
    ResponsiveContainer, 
    CartesianGrid 
} from "recharts"
import { useCsv } from "@/hooks/useCsv"


interface PersonStats {
  person: string
  avg: number
  min: number
  max: number
  total: number
}

export default function ChartsVisuals() {
    const { csvData } = useCsv()

    // prepare data for the chart => overallStats
    const overall = {
        avg: Math.round(csvData.reduce((a, b) => a + Number(b.milesRun), 0) / csvData.length),
        min: Math.min(...csvData.map(item => Number(item.milesRun))),
        max: Math.max(...csvData.map(item => Number(item.milesRun))),
    }

    const overallStatsData = [
        {
            person: "Overall",
            avg: overall.avg,
            min: overall.min,
            max: overall.max,
        }
    ]

    // per person stats
    const perPerson: Record<string, number[]> = {}

    csvData.forEach(({ person, milesRun }) => {
        if (!perPerson[person]) perPerson[person] = []

        perPerson[person].push(Number(milesRun))
    })

    const perPersonStatsData: PersonStats[] = Object.entries(perPerson).map(
        ([person, runs]) => ({
            person,
            avg: Math.round(runs.reduce((a, b) => a + b, 0) / runs.length),
            min: Math.min(...runs),
            max: Math.max(...runs),
            total: runs.reduce((a, b) => a + b, 0),
        })
    )

    return (
        <div
            className="min-h-screen bg-[#000000] flex flex-col items-center p-8 space-y-8"  
        >
            {/* Per person stats */}
            <div className="h-[350px] w-full bg-[#000000] p-6 rounded-lg">
                <h2 className="text-white text-xl font-bold mb-4">Miles Run Per Person</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={perPersonStatsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="person" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend/>
                        <Bar dataKey="avg" fill="#60a5fa" name="Avg" />
                        <Bar dataKey="max" fill="#34d399" name="Max" />
                        <Bar dataKey="min" fill="#f87171" name="Min" /> 
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Overall stats */}
            <div className="h-[350px] w-full bg-[#000000] p-6 rounded-lg">
                <h2 className="text-white text-xl font-bold mb-4">Miles Run Overall</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={overallStatsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="person" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend />
                        <Bar dataKey="avg" fill="#60a5fa" name="Avg" barSize={30}/>
                        <Bar dataKey="max" fill="#34d399" name="Max" barSize={30}/>
                        <Bar dataKey="min" fill="#f87171" name="Min" barSize={30}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}