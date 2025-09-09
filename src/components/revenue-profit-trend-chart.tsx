import { ChartLine } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple line chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "var(--chart-1)",
    },
    mobile: {
        label: "Mobile",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig

function RevenueProfitTrendChart() {
    return (
        <Card className="@container/card col-span-2 ">
                <CardHeader>
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <ChartLine /> <h3>Revenue & Profit Trend</h3>
                        </div>
                    </CardTitle>
                    {/* <CardDescription>January - June 2024</CardDescription> */}
                </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}
                    className=" h-[300px] w-full"
                >
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                            // dataKey="month"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            // tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="desktop"
                            type="linear"
                            stroke="var(--color-desktop)"
                            strokeWidth={2}
                            dot={true}
                            fill="var(--color-desktop)"
                        />
                        <Line
                            dataKey="mobile"
                            type="linear"
                            stroke="var(--color-mobile)"
                            strokeWidth={2}
                            dot={true}
                            fill="var(--color-mobile)"
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
                <CardFooter className="flex-col items-center gap-2 text-sm">
                    <div className="flex gap-4">
                        <div className="flex items-center justify-center text-center gap-2 leading-none font-medium">
                            <span className="p-1.5 rounded bg-blue-500"></span> Revenue
                        </div>
                        <div className="flex items-center justify-center text-center gap-2 leading-none font-medium">
                            <span className="p-1.5 rounded bg-orange-500"></span> Profit Trend
                        </div>
                    </div>
                </CardFooter>
        </Card>
    )
}

export default RevenueProfitTrendChart
