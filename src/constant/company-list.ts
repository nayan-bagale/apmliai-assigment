const companiesData: ComapniesDataT[] = [
  {
    id: 1,
    name: "Global Tech Solutions",
    ceo: {
      name: "Nichol James",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    revenue: "€245M",
    profit: { value: "+€35M", status: "positive" },
    ebitda: "€70M",
    grossMargin: { value: "28.5%", trend: "up" },
    insights: ["Strong Growth", "Growth Leader - Tech"],
  },
  {
    id: 2,
    name: "Tech Innovation Corp",
    ceo: { name: "Alex Morgan", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€342M",
    profit: { value: "+€46M", status: "positive" },
    ebitda: "€75M",
    grossMargin: { value: "22.3%", trend: "up" },
    insights: ["High Productivity", "Good Growth"],
  },
  {
    id: 3,
    name: "NextGen Innovations",
    ceo: { name: "Jordan Lee", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€224M",
    profit: { value: "+€10M", status: "positive" },
    ebitda: "€41M",
    grossMargin: { value: "18.5%", trend: "up" },
    insights: ["Robust Expansion", "Tech sector leader"],
  },
  {
    id: 4,
    name: "Synergy Solutions",
    ceo: {
      name: "Martin Luther",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    revenue: "€85M",
    profit: { value: "-€32M", status: "negative" },
    ebitda: "€12M",
    grossMargin: { value: "13.6%", trend: "down" },
    insights: ["Poor Expansion", "Loss making"],
  },
  {
    id: 5,
    name: "Vertex Global Services",
    ceo: { name: "Jatin Mehta", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€120M",
    profit: { value: "+€12M", status: "positive" },
    ebitda: "€25M",
    grossMargin: { value: "5.4%", trend: "up" },
    insights: ["Restructuring Phase", "Strategic Pivot"],
  },
  {
    id: 6,
    name: "Nordic Systems AB",
    ceo: { name: "Jay Dublin", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€310M",
    profit: { value: "-€2M", status: "negative" },
    ebitda: "€8M",
    grossMargin: { value: "0.6%", trend: "down" },
    insights: ["Struggling sector Marketing", "Loss-Making Company"],
  },
  {
    id: 7,
    name: "Quantum Computing Inc",
    ceo: { name: "Jay Dublin", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€90M",
    profit: { value: "+€15M", status: "positive" },
    ebitda: "€27M",
    grossMargin: { value: "30.1%", trend: "up" },
    insights: ["Market Leader", "Cost Optimization"],
  },
  {
    id: 8,
    name: "Pinnacle Systems",
    ceo: { name: "Jay Dublin", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€275M",
    profit: { value: "+€50M", status: "positive" },
    ebitda: "€80M",
    grossMargin: { value: "19.8%", trend: "up" },
    insights: ["Reliable Returns", "Strong Balance Sheet"],
  },
  {
    id: 9,
    name: "Pacific Solutions Ltd",
    ceo: { name: "Jay Dublin", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€400M",
    profit: { value: "+€5M", status: "positive" },
    ebitda: "€65M",
    grossMargin: { value: "16.2%", trend: "up" },
    insights: ["Solid Financial Track Record", "Investor-Friendly"],
  },
  {
    id: 10,
    name: "Innovatech Dynamics",
    ceo: { name: "Jay Dublin", avatar: "/placeholder.svg?height=32&width=32" },
    revenue: "€90M",
    profit: { value: "-€20M", status: "negative" },
    ebitda: "+€20M",
    grossMargin: { value: "9.7%", trend: "down" },
    insights: ["Liquidity Crunch", "High Overheads"],
  },
];

export type ComapniesDataT = {
  id: number;
  name: string;
  ceo: { name: string; avatar: string };
  revenue: string;
  profit: { value: string; status: "positive" | "negative" };
  ebitda: string;
  grossMargin: { value: string; trend: "up" | "down" };
  insights: string[];
};

export default companiesData;