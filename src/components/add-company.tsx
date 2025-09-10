import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const AddCompany = () => {

    // 1. Define your form.
    const form = useForm({
        defaultValues: {
            companyName: "",
            ceo: "",
            revenue: "",
            profit: "",
            profitStatus: "",
            ebitda: "",
            grossMargin: "",
            grossMarginTrend: "",
            insights: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: {
        companyName: string;
        ceo: string;
        revenue: string;
        profit: string;
        profitStatus: string;
        ebitda: string;
        grossMargin: string;
        grossMarginTrend: string;
        insights: string;
    }) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="outline" className="text-blue-500 hover:text-blue-500 border-blue-500">
                    <Plus /> Add Company
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Company</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="companyName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Company Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="company" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ceo"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CEO/Key Person</FormLabel>
                                        <FormControl>
                                            <Input placeholder="name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <FormField
                                control={form.control}
                                name="revenue"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Revenue</FormLabel>
                                        <FormControl>
                                            <Input placeholder="revenue" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="ebitda"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>EBITDA</FormLabel>
                                        <FormControl>
                                            <Input placeholder="ebitda" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <FormField
                                control={form.control}
                                name="profit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Profit</FormLabel>
                                        <FormControl>
                                            <Input placeholder="profit" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="profitStatus"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Profit Status</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select profit status" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="positive">Positive</SelectItem>
                                                <SelectItem value="negative">Negative</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="grossMargin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gross Margin (%)</FormLabel>
                                        <FormControl>
                                            <Input placeholder="gross margin" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="grossMarginTrend"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Gross Margin Trend</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select trend" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="up">Up</SelectItem>
                                                <SelectItem value="down">Down</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="insights"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Insights</FormLabel>
                                        <FormControl>
                                            <Input placeholder="insights" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default AddCompany