import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const FYSelect = () => {
    return (
        <Select defaultValue="fy2024-2025">
            <SelectTrigger className="w-40 bg-background border-border">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="fy2024-2025">FY 2024-2025</SelectItem>
                <SelectItem value="fy2023-2024">FY 2023-2024</SelectItem>
                <SelectItem value="fy2022-2023">FY 2022-2023</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default FYSelect