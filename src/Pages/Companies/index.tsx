import Header from "@/components/layout/header"
import { ListOfCompanies } from "@/components/list-of-companies-table"

const Companies = () => {
  return (
    <div>
      <Header title="List of companies" />
      <ListOfCompanies/>
    </div>
  )
}

export default Companies