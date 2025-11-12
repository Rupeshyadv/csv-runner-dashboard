"use client"

import { useCsv } from "@/hooks/useCsv"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"

export default function CsvPage() {
    const { csvData } = useCsv()
    const router = useRouter()

    return (
        <div className="min-h-screen bg-[#000000] text-white">
            {  csvData.length === 0 ? (
                <div className="text-white">No data available</div>
            ) : (
                <>
                    <div className="flex items-center justify-end p-1 bg-[#000000] text-white shadow-md space-x-4">
                        <button
                            className="bg-linear-to-r from-blue-500 to-purple-600 text-white text-sm px-3 py-2 rounded-lg ml-2 cursor-pointer mt-3.5 mr-3.5"
                            onClick={() => router.push('/charts')}
                        >
                            View Charts
                        </button>
                    </div>

                    <Table>
                        <TableCaption>
                            CSV
                        </TableCaption>

                        <TableHeader>
                            <TableRow>
                                <TableHead className="text-white">Date</TableHead>
                                <TableHead className="text-white">Person</TableHead>
                                <TableHead className="text-white">MilesRun</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {csvData.map((csv, index) => (
                                <TableRow key={index}>
                                    <TableCell>{csv.date}</TableCell>
                                    <TableCell>{csv.person}</TableCell>
                                    <TableCell>{csv.milesRun}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            )}
        </div>
    )
}