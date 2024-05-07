export type QuestionType = 'rate' | 'textarea';
export interface Question {
    id: number;
    content: string;
    type?: QuestionType;
    placeholder?: string;
}
export interface Answer<T = any> {
    index: number;
    questionId: number;
    type: QuestionType;
    data: T;
}
export interface SurveyEventMap {
    questionCompleted: (answers: Answer) => void;
    completed: (answers: Answer[]) => void;
    close: () => void;
}
