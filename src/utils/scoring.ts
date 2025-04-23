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

export const scoringFunctions: Record<Criteria, (value: any, investmentStage: InvestmentStage) => number> = {
  annual_recurring_revenue: (value: number, investmentStage) => value + 12 // TODO fix this
  // TODO add the rest
}
