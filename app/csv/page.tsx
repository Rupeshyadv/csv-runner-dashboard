"use client"

import { useCsv } from "@/hooks/useCsv"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CsvPage() {
    const { csvData } = useCsv()

    return (
        <div className="min-h-screen bg-[#000000] text-white">
            {  csvData.length === 0 ? (
                <div className="text-white">No data available</div>
            ) : (
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
            )}
        </div>
    )
}