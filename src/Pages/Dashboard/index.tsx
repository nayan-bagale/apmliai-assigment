import EntityWisePerformanceTable from "@/components/entity-wise-performance-table"
import Header from "@/components/layout/header"
import MarginTrendChart from "@/components/margin-trend-chart"
import RevenueProfitTrendChart from "@/components/revenue-profit-trend-chart"
import { SectionCards } from "@/components/section-cards"

const Dashboard = () => {
    return (
        <div>
            <Header title="Dashboard" />
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <SectionCards />
                        <div className="px-4 lg:px-6 grid grid-cols-1 gap-4 @xl/main:grid-cols-3">
                            <RevenueProfitTrendChart/>
                            <MarginTrendChart />
                        </div>
                        <div className="px-4 lg:px-6 grid grid-cols-1 gap-4 @xl/main:grid-cols-3">
                            <EntityWisePerformanceTable/>
                        </div>
                        {/* <DataTable data={data} /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard