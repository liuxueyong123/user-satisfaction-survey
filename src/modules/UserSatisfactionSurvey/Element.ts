import { LitElement, type PropertyValues, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { styleMap } from 'lit/directives/style-map.js'
import { repeat } from 'lit/directives/repeat.js'
import { type Answer, type Question } from './types'
import { ELEMENT_NAME } from './constant'

@customElement(ELEMENT_NAME)
class UserSatisfactionElement extends LitElement {
  /**
   * 问题列表
   */
  @property({ type: Array })
  public questionList: Question[] = []

  /**
   * 当前问题的索引
   */
  @property({ type: Number })
  public questionIndex = 0

  /**
   * 是否展示当前组件
   */
  @property({ type: Boolean })
  public isVisible = false

  @property()
  private styles: Record<string, string | undefined | null> = {}

  /**
   * @description: 临时储存用户的答案
   * @return {*}
   */
  private _answers: Answer[] = []

  /**
   * @description: 生命周期钩子。当 isVisible 被改变时给弹窗附加动画
   * @param {PropertyValues} changedProperties
   * @return {*}
   */
  protected willUpdate (changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('isVisible')) {
      const prevVisible = changedProperties.get('isVisible')
      if (prevVisible === false) {
        this.styles = { animation: '0.4s ease forwards fadeIn', display: 'block' }
      } else if (prevVisible === true) {
        this.styles = { animation: '0.5s ease forwards fadeOut', display: 'block' }
      }
    }
  }

  protected render () {
    const questionContent = this.questionList[this.questionIndex]?.content

    return html`
      <div class="user-satisfaction-component" style=${styleMap(this.styles)}>
        <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" @click=${this._onCloseClick}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 4.19526C4.45561 3.93491 4.87772 3.93491 5.13807 4.19526L8 7.05719L10.8619 4.19526C11.1223 3.93491 11.5444 3.93491 11.8047 4.19526C12.0651 4.45561 12.0651 4.87772 11.8047 5.13807L8.94281 8L11.8047 10.8619C12.0651 11.1223 12.0651 11.5444 11.8047 11.8047C11.5444 12.0651 11.1223 12.0651 10.8619 11.8047L8 8.94281L5.13807 11.8047C4.87772 12.0651 4.45561 12.0651 4.19526 11.8047C3.93491 11.5444 3.93491 11.1223 4.19526 10.8619L7.05719 8L4.19526 5.13807C3.93491 4.87772 3.93491 4.45561 4.19526 4.19526Z" fill="currentColor"/>
        </svg>
        <div class="question">${questionContent}</div>
        <div class="content-wrapper">
          <div class="option-wrapper">
            <div class="desc-text">不同意</div>
            ${this.renderRate()}
            <div class="desc-text">同意</div>
          </div>
          ${this.renderProgressText()}
        </div>
        ${this.renderProgressBar()}
      </div>
    `
  }

  private renderProgressText () {
    return html`<div class="progress-text" style=${styleMap({ opacity: this.questionIndex === 0 ? '0' : '100%' })}>${this.questionIndex + 1}/${this.questionList.length}</div>`
  }

  private renderProgressBar () {
    return html`
      <div class="progress-bar" style=${styleMap({ opacity: this.questionIndex === 0 ? '0' : '100%' })}>
        ${repeat(this.questionList, (question) => question.id, (_question, index) =>
            html`<div class="${classMap({ 'progress-item': true, 'is-done': index < this.questionIndex, 'is-active': index === this.questionIndex })}"></div>`
        )}
      </div>
    `
  }

  private renderRate () {
    return html`
      <div class="rate-wrapper">
        ${repeat(['rate5', 'rate4', 'rate3', 'rate2', 'rate1'], (id) => id, (id, index) => html`
          <input type="radio" name="rate" id=${id}>
          <label for=${id} @click=${() => this._onRateClick(5 - index)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M10.2826 1.83735C10.5131 1.37041 10.6284 1.13694 10.7848 1.06235C10.9209 0.997447 11.0791 0.997447 11.2152 1.06235C11.3716 1.13694 11.4869 1.37041 11.7174 1.83735L13.904 6.26732C13.9721 6.40517 14.0061 6.47409 14.0558 6.52761C14.0999 6.57499 14.1527 6.61338 14.2113 6.64065C14.2775 6.67146 14.3536 6.68257 14.5057 6.70481L19.397 7.41974C19.912 7.49502 20.1696 7.53267 20.2888 7.65847C20.3925 7.76792 20.4412 7.91833 20.4215 8.06781C20.3988 8.23961 20.2124 8.42121 19.8395 8.78441L16.3014 12.2305C16.1911 12.3379 16.136 12.3916 16.1004 12.4555C16.0689 12.5121 16.0487 12.5742 16.0409 12.6385C16.0321 12.7112 16.0451 12.787 16.0711 12.9388L16.9059 17.8061C16.994 18.3195 17.038 18.5762 16.9553 18.7285C16.8833 18.8611 16.7553 18.954 16.607 18.9815C16.4366 19.0131 16.2061 18.8919 15.7451 18.6494L11.3724 16.3499C11.2361 16.2782 11.168 16.2424 11.0962 16.2283C11.0327 16.2159 10.9673 16.2159 10.9038 16.2283C10.832 16.2424 10.7639 16.2782 10.6276 16.3499L6.25491 18.6494C5.7939 18.8919 5.5634 19.0131 5.39296 18.9815C5.24467 18.954 5.11671 18.8611 5.04472 18.7285C4.96199 18.5762 5.00601 18.3195 5.09406 17.8061L5.92887 12.9388C5.9549 12.787 5.96791 12.7112 5.9591 12.6385C5.95131 12.5742 5.9311 12.5121 5.89959 12.4555C5.86401 12.3916 5.80886 12.3379 5.69857 12.2305L2.16054 8.78441C1.78765 8.42121 1.6012 8.23961 1.57851 8.06781C1.55877 7.91833 1.60754 7.76792 1.71124 7.65847C1.83042 7.53267 2.08796 7.49502 2.60303 7.41974L7.4943 6.70481C7.64641 6.68257 7.72247 6.67146 7.7887 6.64065C7.84735 6.61338 7.90015 6.57499 7.94417 6.52761C7.99389 6.47409 8.02791 6.40517 8.09596 6.26732L10.2826 1.83735Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        `)}
      </div>
    `
  }

  private _onCloseClick () {
    this.isVisible = false
    this.dispatchEvent(new CustomEvent('close', {
      bubbles: false,
      detail: null
    }))
  }

  private _onRateClick (score: number) {
    const answer = {
      index: this.questionIndex,
      questionId: this.questionList[this.questionIndex].id,
      score
    }
    this._answers.push(answer)

    this.dispatchEvent(new CustomEvent('questionCompleted', {
      bubbles: false,
      detail: answer
    }))

    if (this.questionIndex < this.questionList.length - 1) {
      this.questionIndex++
    } else {
      this.isVisible = false
      setTimeout(() => {
        this.questionIndex = 0
      }, 500)

      this.dispatchEvent(new CustomEvent('completed', {
        bubbles: false,
        detail: this._answers
      }))
      this._answers = []
    }
  }

  static styles = css`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(200px);
      }
      60% {
        opacity: 1;
        transform: translateY(-30px);
      }
      80% {
        opacity: 1;
        transform: translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: translateY(0);
        pointer-events: none;
      }
      20% {
        opacity: 1;
        transform: translateY(-30px);
      }
      100% {
        opacity: 0;
        transform: translateY(200px);
        pointer-events: none;
      }
    }

    :host {
      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;

      --usc-modal-width: 400px;
    }

    * {
      box-sizing: border-box;
    }

    .user-satisfaction-component {
      position: absolute;
      z-index: 9999;
      left: calc(50% - var(--usc-modal-width) / 2);
      bottom: 40px;
      border-radius: 8px;
      border: 1px solid #EAECF0;
      box-shadow: 0px 24px 48px -12px rgba(8, 15, 52, 0.18);
      width: var(--usc-modal-width);
      padding: 24px;
      background: #fff;
      overflow: hidden;
      pointer-events: auto;
      display: none;
    }

    .icon-close {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 16px;
      height: 16px;
      cursor: pointer;
    }

    .icon-close path {
      fill: #98A2B3;
      transition: fill 0.2s ease;
    }

    .icon-close:hover path{
      fill: #667085;
    }

    .question {
      font-family: "PingFang SC";
      font-style: normal;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #344054;
    }

    .content-wrapper {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .content-wrapper > .option-wrapper {
      display: flex;
      align-items: center;
    }

    .content-wrapper > .option-wrapper > .desc-text {
      font-family: "PingFang SC";
      font-style: normal;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: #98A2B3;
    }

    .content-wrapper > .option-wrapper > .rate-wrapper {
      margin: 0 24px;
      display: flex;
      align-items: center;
      flex-flow: row-reverse;
    }

    .rate-wrapper > input[name="rate"] {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    .rate-wrapper > label {
      padding: 0 12px;
      cursor: pointer;
    }

    .rate-wrapper > label svg {
      width: 24px;
      height: 24px;
    }

    .rate-wrapper > label path {
      fill: #F2F4F7;
      stroke: #F2F4F7;
      transition: fill 0.25s ease, stroke 0.25s ease;
    }

    /* input[name="rate"]:checked ~ label path, */
    .rate-wrapper > label:hover path,
    .rate-wrapper > label:hover ~ label path {
      fill: #FDB022;
      stroke: #FDB022;
    }

    .rate-wrapper > label:hover {
      transform: scale(1.2);
      transition: transform 0.2s ease;
      transform-origin: center;
    }

    .content-wrapper > .option-wrapper > .rate-wrapper > div {
      cursor: pointer;
      color: #98A2B3;
    }

    .content-wrapper > .option-wrapper > .rate-wrapper > div:hover {
      color: #333;
    }

    .content-wrapper > .progress-text {
      flex-shrink: 0;
      font-family: "PingFang SC";
      font-style: normal;
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: #667085;
    }

    .progress-bar {
      position: absolute;
      left: 0;
      bottom: 1px;
      width: 100%;
      height: 4px;
      display: flex;
      column-gap: 4px;
    }

    .progress-bar > .progress-item {
      position: relative;
      flex: 1;
      height: 4px;
      background: #E8EAED;
    }

    /* done */
    .progress-bar > .progress-item::before {
      content: '';
      position: absolute;
      z-index: 9;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #99CEFF;
      transition: width 0.15s linear 0.15s;
    }

    /* active */
    .progress-bar > .progress-item::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #0085FF;
      transition: width 0.15s linear 0.15s;
    }

    .progress-bar > .progress-item.is-done::before {
      width: 100%;
      transition: width 0.15s linear;
    }

    .progress-bar > .progress-item.is-active::after {
      width: 100%;
      transition: width 0.15s linear;
    }

    @media (max-width: 500px) {
      .user-satisfaction-component {
        padding: 20px 12px;
        --usc-modal-width: calc(100% - 24px);
      }

      .content-wrapper > .option-wrapper > .rate-wrapper {
        margin: 0 12px;
      }
    }
  `
}

export default UserSatisfactionElement
