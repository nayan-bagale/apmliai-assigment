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
import { Filter, TableProperties, TrendingDown, TrendingUp, Upload } from "lucide-react"
import * as React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { ComapniesDataT } from "@/constant/company-list"
import { useAppSelector } from "@/redux/redux-hooks"
import AddCompany from "./add-company"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Badge } from "./ui/badge"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"


const columns: ColumnDef<ComapniesDataT>[] = [
    {
        accessorKey: "name",
        header: "Company Name",
        cell: ({ row }) => (
            <div className=" flex gap-1 items-center"> <TableProperties /> <span>{row.getValue("name")}</span></div>
        ),
    },
    {
        accessorKey: "ceo",
        header: "CEO/Key Person",
        cell: ({ row }) => {
            const ceo = row.getValue("ceo") as { name: string; avatar: string } | undefined;
            return <div className="flex items-center gap-2">
                <Avatar>
                    <AvatarImage src={ceo?.avatar || ''} alt={ceo?.name || ''} />
                    <AvatarFallback className='rounded-lg'>
                        {ceo?.name?.slice(0, 2)?.toUpperCase() || 'CN'}
                    </AvatarFallback>
                </Avatar>
                <div>
                    {ceo?.name}
                </div>
            </div>;
        },
    },
    {
        accessorKey: "revenue",
        header: () => <div>Revenue</div>,
        cell: ({ row }) => {

            return <div>{row.getValue("revenue")}</div>
        },
    },
    {
        accessorKey: "profit",
        header: () => <div>Profit</div>,
        cell: ({ row }) => {
            const profit = row.getValue("profit") as { value: string; status: "positive" | "negative" } | undefined;
            return <div className={profit?.status === "negative" ? "text-red-500" : "text-green-600"}>
                {profit?.value}
            </div>
        },
    },
    {
        accessorKey: "ebitda",
        header: () => <div>EBITDA</div>,
        cell: ({ row }) => <div>{row.getValue("ebitda")}</div>,
    },
    {
        accessorKey: "grossMargin",
        header: () => <div>Gross Margin</div>,
        cell: ({ row }) => {
            const grossMargin = row.getValue("grossMargin") as { value: string; trend: "up" | "down" } | undefined;
            return <div className="flex items-center gap-1">
                {grossMargin?.value}
                {grossMargin?.trend === "up" ? <TrendingUp className="text-green-600" /> : <TrendingDown className="text-red-500" />}
            </div>
        },
    },
    {
        accessorKey: "insights",
        header: () => <div>Key insights</div>,
        cell: ({ row }) => {
            const insights = row.getValue("insights") as string[] | undefined;
            return <div className="flex gap-2 flex-wrap">
                {insights?.map((insight, index) => (
                    <Badge key={index} variant={'outline'}>
                        {insight}
                    </Badge>
                ))}
            </div>
        },
    },
]

export function ListOfCompanies() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const companiesData = useAppSelector((state) => state.companies.companies);

    const table = useReactTable({
        data: companiesData,
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
        <div className="w-full">
            <div className=" bg-white flex items-center px-6 gap-2 py-4 justify-between">
                <div className="flex items-center gap-2">
                    <Input
                        placeholder="Search Companies"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm"
                    />
                    <Button variant="outline" className=" text-blue-500 hover:text-blue-500 border-blue-500">
                        <Filter />
                    </Button>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="text-blue-500 hover:text-blue-500 border-blue-500">
                        <Upload /> Export
                    </Button>
                    <AddCompany/>
                </div>
            </div>
            <div className="px-6">
                <div className="flex items-center justify-end space-x-2 py-4">
                    <div className="text-muted-foreground text-sm">
                        1-{table.getFilteredSelectedRowModel().rows.length} of{" "}
                        {table.getFilteredRowModel().rows.length}
                    </div>
                    <div className="space-x-2">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        className="text-muted-foreground"
                                        onClick={() => table.previousPage()}
                                        href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink href="#" isActive>1</PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink className="text-muted-foreground" href="#">
                                        2
                                    </PaginationLink>
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationEllipsis className="text-muted-foreground" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationNext
                                        className="text-muted-foreground"
                                        onClick={() => table.nextPage()}
                                        // disabled={!table.getCanNextPage()}
                                        href="#" />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                </div>
                <div className="overflow-hidden rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
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
                        <TableBody className="bg-white">
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
            </div>
        </div>
    )
}
