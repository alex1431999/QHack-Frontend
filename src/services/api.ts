import {sleep} from "@/utils/sleep.ts";
import axios from "axios";

// TODO define once we know what the evaluation looks like
export type PitchDeckEvaluation = any

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

    return response.data
  }
}
