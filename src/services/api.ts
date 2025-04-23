import axios from "axios";
import type {Criteria} from "@/utils/scoring.ts";

export type PitchDeckEvaluation = {
  company_info: any
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
      }
    })

    const data = JSON.parse(response.data.processed_info)
    const { company_info, ...criteria } = data

    return { company_info, criteria }
  }
}
