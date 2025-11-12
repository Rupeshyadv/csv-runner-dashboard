" use client "

import React, { useState } from "react"
import { useCsv } from "@/hooks/useCsv"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function PersonChart() {
    const { csvData } = useCsv()
    const [selectedPerson, setSelectedPerson] = useState<string>("")

    // extract all unique persons
    const uniquePersons = [...new Set(csvData.map(data => data.person))]

    // filter data based on selected person
    const filteredData = csvData
        .filter(data => data.person === selectedPerson)
        .map(data => ({
            date: data.date,
            milesRun: Number(data.milesRun),
        }))
    
    return (
        <div className="bg-[#000000] p-6 w-full h-[350px] text-white">
            <h2 className="text-xl font-bold mb-4">Miles Run Over Time (Select Person)</h2>

            {/* Person selector */}
            <select
                value={selectedPerson}
                onChange={e => setSelectedPerson(e.target.value)}
                className="mb-4 px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
            >
                <option value="">Select a person</option>

                {uniquePersons.map(person => (
                    <option key={person} value={person}>
                        {person}
                    </option>
                ))}
            </select>

            {/* Show chart only when person is selected */}
            {selectedPerson ? (
                <ResponsiveContainer width="100%" height="90%">
                    <LineChart data={filteredData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="date" stroke="#ccc" />
                        <YAxis stroke="#ccc" />
                        <Tooltip />
                        <Line
                        type="monotone"
                        dataKey="milesRun"
                        stroke="#60a5fa"
                        strokeWidth={3}
                        dot={{ r: 5, fill: "#60a5fa" }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <div className="text-gray-400">Please select a person to view chart.</div>
            )}
        </div>
    )
}