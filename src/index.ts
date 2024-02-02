import { UserSatisfactionElement, UserSatisfactionSurvey } from './modules/UserSatisfactionSurvey';

declare global {
  interface HTMLElementTagNameMap {
    'user-satisfaction': UserSatisfactionElement
  }
}

export {
  UserSatisfactionElement,
  UserSatisfactionSurvey
}
