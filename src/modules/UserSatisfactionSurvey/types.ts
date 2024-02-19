export interface Question {
  id: number
  content: string
}

export interface Answer {
  index: number
  questionId: number
  score: number
}

export interface SurveyEventMap {
  questionCompleted: (answers: Answer) => void
  completed: (answers: Answer[]) => void
  close: () => void
}
