import axios from "axios";
import type {Criteria} from "@/utils/scoring.ts";

export type Summary = {
  company_name: string | null
  official_company_name: string | null
  year_of_founding: number | null
  location_of_headquarters: string | null
  business_model: string | null
  industry: string | null
  required_funding_amount: number | null
  employees: string | null
  website_link: string | null
  one_sentence_pitch: string | null
  linkedin_profile_ceo: string | null
  pitch_deck_summary: string | null
}

export type PitchDeckEvaluation = {
  company_info: Summary
  criteria: Record<Criteria, number | null>
}

export class ApiService {
  public static BASE_URL = 'http://0.0.0.0:8000'

  public static async uploadPitchDeck(file: File): Promise<PitchDeckEvaluation> {
    const url = `${ApiService.BASE_URL}/upload-pdf/`
    const formData = new FormData()
    formData.append('file', file)

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      params: {
        use_agent_workflow: true,
        use_modular_workflow: true,
      }
    })

    const data = JSON.parse(response.data.processed_info)
    const { company_info, ...criteria } = data.startup_metrics

    return { company_info, criteria }
  }
}
