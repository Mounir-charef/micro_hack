export interface Summary {
  id: number;
  summary: string;
  scores: {
    rouge1: number;
    rouge2: number;
    rougeL: number;
    rougeLsum: number;
    precision: number;
    recall: number;
    f1_score: number;
  };
  text: string;
  created_at: string;
  updated_at: string;
}
