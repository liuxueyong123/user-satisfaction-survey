import { UserSatisfactionElement as _UserSatisfactionElement, UserSatisfactionSurvey as _UserSatisfactionSurvey } from './modules/UserSatisfactionSurvey';
import { type Answer, type Question } from './modules/UserSatisfactionSurvey/types';
declare global {
    interface HTMLElementTagNameMap {
        'user-satisfaction': _UserSatisfactionElement;
    }
}
export declare const UserSatisfactionElement: typeof _UserSatisfactionElement | null;
export declare const UserSatisfactionSurvey: typeof _UserSatisfactionSurvey | null;
export { type Question, type Answer };
