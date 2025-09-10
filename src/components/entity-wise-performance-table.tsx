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
import { TrendingDown, TrendingUp } from "lucide-react"
import * as React from "react"


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { CompanyPerformance } from "@/constant/company-performance"
import companyPerformance from "@/constant/company-performance"
import { cn } from "@/lib/utils"
import { IconList } from "@tabler/icons-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"


const columns: ColumnDef<CompanyPerformance>[] = [
    {
        accessorKey: "name",
        header: "Company Name",
        cell: ({ row }) => {
            const Icon = row.original.icon

            return (
                <div className="flex items-center space-x-3">
                    <div
                        className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center",
                            "bg-green-500/20",
                        )}
                    >
                        <Icon className=" w-5" />
                    </div>
                    <span className="text-card-foreground font-medium">{row.getValue('name')}</span>
                </div>
            )
        },
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
        cell: ({ row }) => {
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
        data: companyPerformance,
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