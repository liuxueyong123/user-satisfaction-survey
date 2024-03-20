import { UserSatisfactionElement as _UserSatisfactionElement, UserSatisfactionSurvey as _UserSatisfactionSurvey } from './modules/UserSatisfactionSurvey'
import { type Answer, type Question } from './modules/UserSatisfactionSurvey/types'
import { isServer } from 'lit'

declare global {
  interface HTMLElementTagNameMap {
    'user-satisfaction': _UserSatisfactionElement
  }
}

export const UserSatisfactionElement = isServer ? null : _UserSatisfactionElement
export const UserSatisfactionSurvey = isServer ? null : _UserSatisfactionSurvey

export {
  type Question,
  type Answer
}
