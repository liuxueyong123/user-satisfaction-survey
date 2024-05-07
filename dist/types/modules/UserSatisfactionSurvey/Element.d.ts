import { LitElement, type PropertyValues } from 'lit';
import { type Question } from './types';
declare class UserSatisfactionElement extends LitElement {
    /**
     * 问题列表
     */
    questionList: Question[];
    /**
     * 当前问题的索引
     */
    questionIndex: number;
    /**
     * 是否展示当前组件
     */
    isVisible: boolean;
    private _styles;
    private _currentText;
    /**
     * @description: 临时储存用户的答案
     * @return {*}
     */
    private _answers;
    /**
     * @description: 生命周期钩子。当 isVisible 被改变时给弹窗附加动画
     * @param {PropertyValues} changedProperties
     * @return {*}
     */
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit").TemplateResult<1>;
    private renderContent;
    private renderProgressText;
    private renderProgressBar;
    private renderRate;
    private _onCloseClick;
    private _onRateClick;
    private _onTextareaInput;
    private _onTextareaInputSubmit;
    private _onQuestionCompleted;
    static styles: import("lit").CSSResult;
}
export default UserSatisfactionElement;
