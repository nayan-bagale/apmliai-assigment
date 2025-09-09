import { Sparkles, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const InsightCard = () => {
    return (
        <div className="*:data-[slot=card]:from-primary/10 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">
            <Card className="@container/card col-span-1">
                <CardHeader className=" flex">
                    <CardTitle>
                        <div className="flex gap-2 items-center">
                            <Sparkles className=" text-amber-400" /> <h3>Insights</h3>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className=" flex flex-col">
                        <div className=" flex gap-2 items-center font-semibold">
                            <Star className=" w-4 text-amber-400" />
                            <span>Monthly Variance Summaries</span>
                        </div>
                        <p className=" ml-6 text-sm  ">
                            <span className="text-amber-400">Helix Digital Innovations</span> reported an 8% decline in profit this month, primarily drives by increased logistics expenses.
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default InsightCard