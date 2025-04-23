import type {PitchDeckEvaluation} from "@/services/api.ts";
import type {ScoringItemType} from "@/utils/scoring.ts";

export function pitchDeckEvaluationToScoringItems(pitchDeckEvaluation: PitchDeckEvaluation): ScoringItemType[] {
  return Object.keys(pitchDeckEvaluation).map(criteria => ({ criteria, value: pitchDeckEvaluation[criteria] }))
}
