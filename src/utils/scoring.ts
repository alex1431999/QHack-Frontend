import type {InvestmentStage} from "@/types/evaluation.ts";

export type Category =
  'Hard fund criteria'
  | 'Team'
  | 'Problem'
  | 'Solution'
  | 'Traction'
  | 'Market'
  | 'Business model'
  | 'Financials'
  | 'Risks'
  | 'Red flags'

export type Criteria =
  'annual_recurring_revenue'
  | 'monthly_recurring_revenue'
  | 'customer_acquisition_cost'
  | 'customer_lifetime_value'
  | 'cltv_cac_ratio'
  | 'gross_margin'
  | 'revenue_growth_rate_yoy'
  | 'revenue_growth_rate_mom'
  | 'sales_cycle_length'
  | 'monthly_active_users'
  | 'user_growth_rate_yoy'
  | 'user_growth_rate_mom'
  | 'conversion_rate'
  | 'burn_rate'
  | 'pricing_strategy_maturity'
  | 'runway'
  | 'ip_protection'
  | 'market_competitiveness'
  | 'market_timing'
  | 'cap_table_cleanliness'
  | 'founder_industry_experience'
  | 'founder_past_exits'
  | 'founder_background'
  | 'country_of_headquarters'

export type ScoringItemType = { criteria: Criteria, value: number | null }

export const categoryMapping: Record<Criteria, Category> = {
  'annual_recurring_revenue': 'Financials',
  'monthly_recurring_revenue': 'Financials',
  'customer_acquisition_cost': 'Financials',
  'customer_lifetime_value': 'Financials',
  'cltv_cac_ratio': 'Financials',
  'gross_margin': 'Financials',
  'revenue_growth_rate_yoy': 'Financials',
  'revenue_growth_rate_mom': 'Financials',
  'sales_cycle_length': 'Financials',
  'monthly_active_users': 'Traction',
  'user_growth_rate_yoy': 'Traction',
  'user_growth_rate_mom': 'Traction',
  'conversion_rate': 'Traction',
  'burn_rate': 'Financials',
  'pricing_strategy_maturity': 'Business model',
  'runway': 'Financials',
  'ip_protection': 'Business model',
  'market_competitiveness': 'Market',
  'market_timing': 'Market',
  'cap_table_cleanliness': 'Financials',
  'founder_industry_experience': 'Team',
  'founder_past_exits': 'Team',
  'founder_background': 'Team',
  'country_of_headquarters': 'Risks',
}

export const criteriaNameMap: Record<Criteria, string> = {
  annual_recurring_revenue: 'Annual recurring revenue',
  monthly_recurring_revenue: 'Monthly recurring revenue',
  customer_acquisition_cost: 'Customer acquisition cost',
  customer_lifetime_value: 'Customer lifetime value',
  cltv_cac_ratio: 'CLTV/CAC ratio',
  gross_margin: 'Gross margin',
  revenue_growth_rate_yoy: 'Revenue growth rate (YoY)',
  revenue_growth_rate_mom: 'Revenue growth rate (MoM)',
  sales_cycle_length: 'Sales cycle length',
  monthly_active_users: 'Monthly active users',
  user_growth_rate_yoy: 'User growth rate (YoY)',
  user_growth_rate_mom: 'User growth rate (MoM)',
  conversion_rate: 'Conversion rate',
  burn_rate: 'Burn rate',
  pricing_strategy_maturity: 'Pricing strategy maturity',
  runway: 'Runway',
  ip_protection: 'IP protection',
  market_competitiveness: 'Market competitiveness',
  market_timing: 'Market timing',
  cap_table_cleanliness: 'Cap table cleanliness',
  founder_industry_experience: 'Founder industry experience',
  founder_past_exits: 'Founder past exits',
  founder_background: 'Founder background',
  country_of_headquarters: 'Country of headquarters',
};


export const CATEGORIES: Category[] = [
  'Hard fund criteria',
  'Team',
  'Problem',
  'Solution',
  'Traction',
  'Market',
  'Business model',
  'Financials',
  'Risks',
  'Red flags',
]

export const scoringFunctions: Record<Criteria, (value: any, investmentStage: InvestmentStage) => number> = {
  annual_recurring_revenue: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 50000 ? 1 : 0
    if (investmentStage === 'Series A') return value > 500000 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 5000000 ? 1 : 0
  },
  monthly_recurring_revenue: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 5000 ? 1 : 0
    if (investmentStage === 'Series A') return value > 50000 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 300000 ? 1 : 0
  },
  customer_acquisition_cost: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value < 2000 ? 1 : 0
    if (investmentStage === 'Series A') return value < 4000 ? 1 : 0
    if (investmentStage === 'Series B+') return value < 6000 ? 1 : 0
  },
  customer_lifetime_value: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 1000 ? 1 : 0
    if (investmentStage === 'Series A') return value > 3000 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 10000 ? 1 : 0
  },
  cltv_cac_ratio: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 1 ? 1 : 0
    if (investmentStage === 'Series A') return value > 2 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 3 ? 1 : 0
  },
  gross_margin: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 0.6 ? 1 : 0
    if (investmentStage === 'Series A') return value > 0.7 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 0.8 ? 1 : 0
  },
  revenue_growth_rate_yoy: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 2 ? 1 : 0
    if (investmentStage === 'Series A') return value > 3 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 4 ? 1 : 0
  },
  revenue_growth_rate_mom: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value > 0.1 ? 1 : 0
    if (investmentStage === 'Seed') return value > 0.2 ? 1 : 0
    if (investmentStage === 'Series A') return value > 0.3 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 0.4 ? 1 : 0
  },
  sales_cycle_length: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value < 60 ? 1 : 0
    if (investmentStage === 'Series A') return value < 45 ? 1 : 0
    if (investmentStage === 'Series B+') return value < 60 ? 1 : 0
  },
  monthly_active_users: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 500 ? 1 : 0
    if (investmentStage === 'Series A') return value > 5000 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 50000 ? 1 : 0
  },
  user_growth_rate_yoy: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 1 ? 1 : 0
    if (investmentStage === 'Series A') return value > 3 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 5 ? 1 : 0
  },
  user_growth_rate_mom: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value > 0.1 ? 1 : 0
    if (investmentStage === 'Seed') return value > 0.2 ? 1 : 0
    if (investmentStage === 'Series A') return value > 0.3 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 0.4 ? 1 : 0
  },
  conversion_rate: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 0.05 ? 1 : 0
    if (investmentStage === 'Series A') return value > 0.1 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 0.2 ? 1 : 0
  },
  burn_rate: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value < 50000 ? 1 : 0
    if (investmentStage === 'Seed') return value < 150000 ? 1 : 0
    if (investmentStage === 'Series A') return value < 300000 ? 1 : 0
    if (investmentStage === 'Series B+') return 1
  },
  pricing_strategy_maturity: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value
    if (investmentStage === 'Seed') return value
    if (investmentStage === 'Series A') return value
    if (investmentStage === 'Series B+') return value
  },
  runway: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value > 6 ? 1 : 0
    if (investmentStage === 'Series A') return value > 12 ? 1 : 0
    if (investmentStage === 'Series B+') return value > 18 ? 1 : 0
  },
  ip_protection: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value
    if (investmentStage === 'Seed') return value
    if (investmentStage === 'Series A') return value
    if (investmentStage === 'Series B+') return value
  },
  market_competitiveness: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value >= 3 ? 1 : 0
    if (investmentStage === 'Seed') return value >= 3 ? 1 : 0
    if (investmentStage === 'Series A') return value >= 4 ? 1 : 0
    if (investmentStage === 'Series B+') return value >= 5 ? 1 : 0
  },
  cap_table_cleanliness: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value >= 2 ? 1 : 0
    if (investmentStage === 'Seed') return value >= 3 ? 1 : 0
    if (investmentStage === 'Series A') return value >= 4 ? 1 : 0
    if (investmentStage === 'Series B+') return value >= 5 ? 1 : 0
  },
  founder_industry_experience: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value
    if (investmentStage === 'Seed') return value
    if (investmentStage === 'Series A') return value
    if (investmentStage === 'Series B+') return value
  },
  founder_past_exits: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value
    if (investmentStage === 'Series A') return value
    if (investmentStage === 'Series B+') return value
  },
  founder_background: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return 1
    if (investmentStage === 'Seed') return value
    if (investmentStage === 'Series A') return value
    if (investmentStage === 'Series B+') return value
  },
  country_of_headquarters: (value: number, investmentStage) => {
    if (investmentStage === 'Pre-seed') return value
    if (investmentStage === 'Seed') return value
    if (investmentStage === 'Series A') return value
    if (investmentStage === 'Series B+') return value
  },
}
