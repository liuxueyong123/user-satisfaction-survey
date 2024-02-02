import { ELEMENT_NAME } from './constant'
import { type UserSatisfactionElement } from './index'
import { type SurveyEventMap, type Question } from './types'

class UserSatisfactionSurvey {
  private readonly _element: UserSatisfactionElement
  private readonly _listenerDestroyers: Array<() => void> = []

  constructor (questions: Question[] = []) {
    const element = document.createElement(ELEMENT_NAME)
    this._element = element
    if (questions.length > 0) {
      this.addQuestions(questions)
    }
    document.body.appendChild(this._element)
  }

  /**
   * @description: 展示用户调查弹窗
   * @return {*}
   */
  public launch () {
    this._element.isVisible = true
  }

  /**
   * @description: 主动关闭用户调查弹窗
   * @return {*}
   */
  public close () {
    this._element.isVisible = false
  }

  /**
   * @description: 完全卸载用户调查组件
   * @return {*}
   */
  public destroy () {
    document.body.removeChild(this._element)
    for (const listenerDestroyer of this._listenerDestroyers) {
      listenerDestroyer()
    }
    ;(this as any)._element = null
    ;(this as any)._listenerDestroyers = null
  }

  /**
   * @description: 删除用户调查问题
   * @param {number} id
   * @return {*}
   */
  public removeQuestionById (id: number) {
    if (this._element.questionIndex === this._element.questionList.length - 1 && this._element.questionList[this._element.questionIndex].id === id) {
      throw new Error('无法删除当前正在填写的最后一个问题！')
    }

    this._element.questionIndex = this._element.questionIndex - this._element.questionList.slice(0, this._element.questionIndex).filter((question) => question.id === id).length
    this._element.questionList = this._element.questionList.filter((question) => question.id !== id)
  }

  /**
   * @description: 批量删除用户调查问题
   * @param {number} ids
   * @return {*}
   */
  public removeQuestionByIds (ids: number[]) {
    if (this._element.questionList.slice(this._element.questionIndex).every((question) => ids.includes(question.id))) {
      throw new Error('无法直接删除所有待填写问题！')
    }

    this._element.questionIndex = this._element.questionIndex - this._element.questionList.slice(0, this._element.questionIndex).filter((question) => !ids.includes(question.id)).length
    this._element.questionList = this._element.questionList.filter((question) => !ids.includes(question.id))
  }

  /**
   * @description: 添加用户调查问题
   * @param {Question} question
   * @return {*}
   */
  public addQuestion (question: Question) {
    this._element.questionList.push(question)
    this._element.requestUpdate()
  }

  /**
   * @description: 批量添加用户调查问题
   * @param {array} questions
   * @return {*}
   */
  public addQuestions (questions: Question[]) {
    this._element.questionList.push(...questions)
    this._element.requestUpdate()
  }

  public on<T extends keyof SurveyEventMap>(eventName: T, callback: SurveyEventMap[T]): void {
    const eventCallback = (event: Event) => {
      callback((event as CustomEvent).detail)
    }

    this._element.addEventListener(eventName, eventCallback)
    this._listenerDestroyers.push(() => {
      this._element.removeEventListener(eventName, eventCallback)
    })
  }
}

export default UserSatisfactionSurvey
