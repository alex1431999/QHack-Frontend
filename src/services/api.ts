import {sleep} from "@/utils/sleep.ts";

// TODO define once we know what the evaluation looks like
export type PitchDeckEvaluation = any

export class ApiService {
  public static async uploadPitchDeck(file: File): Promise<PitchDeckEvaluation> {
    await sleep(3000);
    return {}
  }
}
