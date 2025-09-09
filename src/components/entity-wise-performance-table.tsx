"use client"

import {
    type ColumnDef,
    type ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    type SortingState,
    useReactTable,
    type VisibilityState,
} from "@tanstack/react-table"
import { Building2, Globe, Lightbulb, Palette, Smartphone, TrendingDown, TrendingUp, Zap } from "lucide-react"
import * as React from "react"


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IconList } from "@tabler/icons-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { cn } from "@/lib/utils"

const data: Payment[] = [

    {
        id: 1,
        name: "NextGen Software Ltd.",
        icon: Building2,
        revenue: "€68.3M",
        netProfit: "€8.1M",
        ebitda: "26.5%",
        ebitdaChange: "positive",
        cashFlow: "€6.8M",
        wcCycle: "52",
    },
    {
        id: 2,
        name: "Global Tech Solutions",
        icon: Globe,
        revenue: "€62.6M",
        netProfit: "€6.3M",
        ebitda: "19.3%",
        ebitdaChange: "positive",
        cashFlow: "€4.5M",
        wcCycle: "76",
    },
    {
        id: 3,
        name: "Innovative Tech Solutions",
        icon: Lightbulb,
        revenue: "€54.6M",
        netProfit: "€5.3M",
        ebitda: "18.5%",
        ebitdaChange: "positive",
        cashFlow: "€3.8M",
        wcCycle: "45",
    },
    {
        id: 4,
        name: "Creative Design Group",
        icon: Palette,
        revenue: "€36.5M",
        netProfit: "€4.1M",
        ebitda: "0.9%",
        ebitdaChange: "positive",
        cashFlow: "€2.3M",
        wcCycle: "88",
    },
    {
        id: 5,
        name: "Digital Dynamics Inc.",
        icon: Smartphone,
        revenue: "€30.2M",
        netProfit: "€3.9M",
        ebitda: "-3.9%",
        ebitdaChange: "negative",
        cashFlow: "€1.9M",
        wcCycle: "25",
    },
    {
        id: 6,
        name: "Helio Digital Innovations",
        icon: Zap,
        revenue: "€22.3M",
        netProfit: "€0.3M",
        ebitda: "-1.5%",
        ebitdaChange: "negative",
        cashFlow: "€0.8M",
        wcCycle: "36",
    },
]

export type Payment = {
    id: number
    name: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
    revenue: string
    netProfit: string
    ebitda: string
    ebitdaChange: "positive" | "negative"
    cashFlow: string
    wcCycle: string
}

const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: "Company Name",
        cell: ({ row }) => {
            const Icon = row.original.icon

            return(
            <div className="flex items-center space-x-3">
                <div
                    className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center",
                        "bg-green-500/20" ,
                    )}
                >
                    <Icon className=" w-5" />
                </div>
                    <span className="text-card-foreground font-medium">{row.getValue('name')}</span>
            </div>
        )},
    },
    {
        accessorKey: "revenue",
        header: "Revenue",
        cell: ({ row }) => <div className="font-medium">{row.getValue("revenue")}</div>,
    },
    {
        accessorKey: "netProfit",
        header: "Net Profit",
        cell: ({ row }) => {

            return <div className=" font-medium">{row.getValue("netProfit")}</div>
        },
    },
    {
        accessorKey: "ebitda",
        header: "EBITDA Margin",
        cell: ({ row}) => {
            const isPositiveEbitda = row.original.ebitdaChange === "positive"
            return (<div className="flex items-center space-x-2">
                {isPositiveEbitda ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                )}
                <span className={cn("font-medium", isPositiveEbitda ? "text-green-500" : "text-red-500")}>
                    {row.getValue("ebitda")}
                </span>
            </div>)
        },
    },
    {
        accessorKey: "cashFlow",
        header: "Cash Flow",
        cell: ({ row }) => <div className=" font-medium">{row.getValue("cashFlow")}</div>,
    },
    {
        accessorKey: "wcCycle",
        header: "W.C. Cycle (Days)",
        cell: ({ row }) => <div className=" font-medium">{row.getValue("wcCycle")}</div>,
    }
]

function EntityWisePerformanceTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <Card className="@container/card col-span-2">
            <CardHeader className=" mb-1 flex items-center">
                <CardTitle>
                    <div className="flex gap-2 items-center">
                        <IconList /> <h3>Entity-wise Performance</h3>
                    </div>
                </CardTitle>
                <CardDescription>(Last 6 Months)</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="overflow-hidden rounded-md border">
                    <Table className="">
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead className=" text-accent-foreground font-normal" key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}

export default EntityWisePerformanceTable