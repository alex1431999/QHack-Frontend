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
  // TODO add the rest
}

export const scoringFunctions: Record<Criteria, (value: any, investmentStage: InvestmentStage) => number> = {
  annual_recurring_revenue: (value: number, investmentStage) => value + 12 // TODO fix this
  // TODO add the rest
}
