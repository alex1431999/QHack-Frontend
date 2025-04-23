import {sleep} from "@/utils/sleep.ts";
import axios from "axios";

// TODO define once we know what the evaluation looks like
export type PitchDeckEvaluation = any

export class ApiService {
  public static BASE_URL = 'localhost:8000'

  public static async uploadPitchDeck(file: File): Promise<PitchDeckEvaluation> {
    const url = `${ApiService.BASE_URL}/upload-pdf/`
    const response = await axios.post(url, file)

    return response.data
  }
}
