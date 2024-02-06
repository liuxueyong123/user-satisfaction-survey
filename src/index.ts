import { UserSatisfactionElement, UserSatisfactionSurvey } from './modules/UserSatisfactionSurvey'
import { type Answer, type Question } from './modules/UserSatisfactionSurvey/types'

declare global {
  interface HTMLElementTagNameMap {
    'user-satisfaction': UserSatisfactionElement
  }
}

export {
  UserSatisfactionElement,
  UserSatisfactionSurvey,
  type Question,
  type Answer
}
