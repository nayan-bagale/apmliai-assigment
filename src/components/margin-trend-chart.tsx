import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { IconChartBar } from "@tabler/icons-react"

export const description = "A multiple bar chart"

const chartData = [
    { month: "January", revenue: 186, opex: 80, cogs: 78.3 },
    { month: "February", revenue: 305, opex: 200, cogs: 198.5 },
    { month: "March", revenue: 237, opex: 120, cogs: 118.4 },
    { month: "April", revenue: 73, opex: 190, cogs: 188.6 },
    { month: "May", revenue: 209, opex: 130, cogs: 128.7 },
    { month: "June", revenue: 214, opex: 140, cogs: 138.9 },
]

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "var(--chart-1)",
    },
    opex: {
        label: "Op Ex.",
        color: "var(--chart-2)",
    },
    cogs: {
        label: "COGS",
        color: "var(--chart-3)",
    }
} satisfies ChartConfig

function MarginTrendChart() {
    return (
        <Card className="@container/card col-span-1">
            <CardHeader className=" flex">
                <CardTitle>
                    <div className="flex gap-2 items-center">
                    <IconChartBar /> <h3>Margin Trends</h3>
                </div>
                </CardTitle>
                <CardDescription>(Last 6 Months)</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer className=" w-full h-[300px]" config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={true}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={true}
                            tickMargin={8}
                            width={50}
                            tickFormatter={(value) => `${value}M`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent  indicator="dot" />}
                        />
                        <Bar dataKey="revenue" fill="var(--color-revenue)" barSize={8} radius={2} />
                        <Bar dataKey="opex" fill="var(--color-opex)" barSize={8} radius={2} />
                        <Bar dataKey="cogs" fill="var(--color-cogs)" barSize={8} radius={2} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-center gap-2 text-sm">
                <div className="flex gap-4">
                    <div className="flex items-center justify-center text-center gap-2 leading-none font-medium">
                        <span className="p-1.5 rounded  bg-[var(--chart-1)] "></span> Revenue
                    </div>
                    <div className="flex items-center justify-center text-center gap-2 leading-none font-medium">
                        <span className="p-1.5 rounded bg-[var(--chart-2)]"></span> Operating Expense
                    </div>
                    <div className="flex items-center justify-center text-center gap-2 leading-none font-medium">
                        <span className="p-1.5 rounded bg-[var(--chart-3)]"></span> COGS
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

export default MarginTrendChart