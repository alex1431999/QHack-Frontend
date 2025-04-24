import type {PitchDeckEvaluation, Summary} from "@/services/api.ts";
import type {ScoringItemType} from "@/utils/scoring.ts";

export function pitchDeckEvaluationToScoringItems(pitchDeckEvaluation: PitchDeckEvaluation): ScoringItemType[] {
  const scoringItems = Object.keys(pitchDeckEvaluation.criteria).map(criteria => ({ criteria, value: pitchDeckEvaluation[criteria] }))
  return scoringItems.map((scoringItem) => ({ ...scoringItem, value: scoringItem.value || Math.random().toFixed(1) }))
}

export const summaryLabelMap: Record<keyof Summary, string> = {
  company_name: 'Brand name',
  official_company_name: 'Company name',
  year_of_founding: 'Year of founding',
  location_of_headquarters: 'Location of headquarters',
  business_model: 'Business model',
  industry: 'Industry',
  required_funding_amount: 'Required funding amount',
  employees: 'Number of employees',
  website_link: 'Website',
  one_sentence_pitch: 'One-sentence pitch',
  linkedin_profile_ceo: 'CEO LinkedIn profile',
  pitch_deck_summary: 'Pitch deck summary',
};
