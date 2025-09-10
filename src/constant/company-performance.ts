import { Building2, Globe, Lightbulb, Palette, Smartphone, Zap } from "lucide-react";

const companyPerformance: CompanyPerformance[] = [
  {
    id: 1,
    name: "NextGen Software Ltd.",
    icon: Building2,
    revenue: "€68.3M",
    netProfit: "€8.1M",
    ebitda: "26.5%",
    ebitdaChange: "positive",
    cashFlow: "€6.8M",
    wcCycle: "52",
  },
  {
    id: 2,
    name: "Global Tech Solutions",
    icon: Globe,
    revenue: "€62.6M",
    netProfit: "€6.3M",
    ebitda: "19.3%",
    ebitdaChange: "positive",
    cashFlow: "€4.5M",
    wcCycle: "76",
  },
  {
    id: 3,
    name: "Innovative Tech Solutions",
    icon: Lightbulb,
    revenue: "€54.6M",
    netProfit: "€5.3M",
    ebitda: "18.5%",
    ebitdaChange: "positive",
    cashFlow: "€3.8M",
    wcCycle: "45",
  },
  {
    id: 4,
    name: "Creative Design Group",
    icon: Palette,
    revenue: "€36.5M",
    netProfit: "€4.1M",
    ebitda: "0.9%",
    ebitdaChange: "positive",
    cashFlow: "€2.3M",
    wcCycle: "88",
  },
  {
    id: 5,
    name: "Digital Dynamics Inc.",
    icon: Smartphone,
    revenue: "€30.2M",
    netProfit: "€3.9M",
    ebitda: "-3.9%",
    ebitdaChange: "negative",
    cashFlow: "€1.9M",
    wcCycle: "25",
  },
  {
    id: 6,
    name: "Helio Digital Innovations",
    icon: Zap,
    revenue: "€22.3M",
    netProfit: "€0.3M",
    ebitda: "-1.5%",
    ebitdaChange: "negative",
    cashFlow: "€0.8M",
    wcCycle: "36",
  },
];


export type CompanyPerformance = {
  id: number;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  revenue: string;
  netProfit: string;
  ebitda: string;
  ebitdaChange: "positive" | "negative";
  cashFlow: string;
  wcCycle: string;
};

export default companyPerformance;
