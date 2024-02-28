import { type SurveyEventMap, type Question } from './types';
declare class UserSatisfactionSurvey {
    private readonly _element;
    private readonly _listenerDestroyers;
    constructor(questions?: Question[]);
    /**
     * @description: 展示用户调查弹窗
     * @return {*}
     */
    launch(): Promise<void>;
    /**
     * @description: 主动关闭用户调查弹窗
     * @return {*}
     */
    close(): void;
    /**
     * @description: 完全卸载用户调查组件
     * @return {*}
     */
    destroy(): void;
    /**
     * @description: 设置用户调查问题
     * @param {Question} questions
     * @return {*}
     */
    setQuestions(questions: Question[]): void;
    /**
     * @description: 删除用户调查问题
     * @param {number} id
     * @return {*}
     */
    removeQuestionById(id: number): void;
    /**
     * @description: 批量删除用户调查问题
     * @param {number} ids
     * @return {*}
     */
    removeQuestionByIds(ids: number[]): void;
    /**
     * @description: 添加用户调查问题
     * @param {Question} question
     * @param {number} index 可选参数，插入位置
     * @return {*}
     */
    addQuestion(question: Question, index?: number): void;
    /**
     * @description: 批量添加用户调查问题
     * @param {Question} questions
     * @param {number} index 可选参数，插入位置
     * @return {*}
     */
    addQuestions(questions: Question[], index?: number): void;
    on<T extends keyof SurveyEventMap>(eventName: T, callback: SurveyEventMap[T]): void;
}
export default UserSatisfactionSurvey;
