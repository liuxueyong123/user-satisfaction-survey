import { css as x, LitElement as m, html as n } from "lit";
import { property as l, customElement as f } from "lit/decorators.js";
import { classMap as w } from "lit/directives/class-map.js";
import { styleMap as h } from "lit/directives/style-map.js";
import { repeat as u } from "lit/directives/repeat.js";
const c = "user-satisfaction";
var b = Object.defineProperty, g = Object.getOwnPropertyDescriptor, a = (t, e, s, o) => {
  for (var i = o > 1 ? void 0 : o ? g(e, s) : e, p = t.length - 1, d; p >= 0; p--)
    (d = t[p]) && (i = (o ? d(e, s, i) : d(i)) || i);
  return o && i && b(e, s, i), i;
};
let r = class extends m {
  constructor() {
    super(...arguments), this.questionList = [], this.questionIndex = 0, this.isVisible = !1, this._styles = {}, this._currentText = "", this._answers = [];
  }
  /**
   * @description: 生命周期钩子。当 isVisible 被改变时给弹窗附加动画
   * @param {PropertyValues} changedProperties
   * @return {*}
   */
  willUpdate(t) {
    if (t.has("isVisible")) {
      const e = t.get("isVisible");
      e === !1 ? this._styles = { animation: "0.4s ease forwards fadeIn", display: "block" } : e === !0 && (this._styles = { animation: "0.5s ease forwards fadeOut", display: "block" });
    }
  }
  render() {
    var e;
    const t = (e = this.questionList[this.questionIndex]) == null ? void 0 : e.content;
    return n`
      <div class="user-satisfaction-component" style=${h(this._styles)}>
        <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" @click=${this._onCloseClick}>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.19526 4.19526C4.45561 3.93491 4.87772 3.93491 5.13807 4.19526L8 7.05719L10.8619 4.19526C11.1223 3.93491 11.5444 3.93491 11.8047 4.19526C12.0651 4.45561 12.0651 4.87772 11.8047 5.13807L8.94281 8L11.8047 10.8619C12.0651 11.1223 12.0651 11.5444 11.8047 11.8047C11.5444 12.0651 11.1223 12.0651 10.8619 11.8047L8 8.94281L5.13807 11.8047C4.87772 12.0651 4.45561 12.0651 4.19526 11.8047C3.93491 11.5444 3.93491 11.1223 4.19526 10.8619L7.05719 8L4.19526 5.13807C3.93491 4.87772 3.93491 4.45561 4.19526 4.19526Z" fill="currentColor"/>
        </svg>
        <div class="question">${t}</div>
        ${this.renderContent()}
        ${this.renderProgressBar()}
      </div>
    `;
  }
  renderContent() {
    const t = this.questionList[this.questionIndex];
    return t.type === "textarea" ? n`
        <div class="textarea-wrapper">
          <textarea class="question-textarea" @input=${this._onTextareaInput} placeholder=${t.placeholder ?? ""}></textarea>
          <div class="submit-btn-wrapper"><div class="textarea-submit-btn" @click=${this._onTextareaInputSubmit}>提交</div></div>
        </div>
      ` : n`
      <div class="content-wrapper">
        <div class="option-wrapper">
          <div class="desc-text">不同意</div>
          ${this.renderRate()}
          <div class="desc-text">同意</div>
        </div>
        ${this.renderProgressText()}
      </div>
    `;
  }
  renderProgressText() {
    return n`<div class="progress-text" style=${h({ opacity: this.questionIndex === 0 ? "0" : "100%" })}>${this.questionIndex + 1}/${this.questionList.length}</div>`;
  }
  renderProgressBar() {
    return n`
      <div class="progress-bar" style=${h({ opacity: this.questionIndex === 0 ? "0" : "100%" })}>
        ${u(
      this.questionList,
      (t) => t.id,
      (t, e) => n`<div class="${w({ "progress-item": !0, "is-done": e < this.questionIndex, "is-active": e === this.questionIndex })}"></div>`
    )}
      </div>
    `;
  }
  renderRate() {
    return n`
      <div class="rate-wrapper">
        ${u(["rate5", "rate4", "rate3", "rate2", "rate1"], (t) => t, (t, e) => n`
          <input type="radio" name="rate" id=${t}>
          <label for=${t} @click=${() => this._onRateClick(5 - e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path d="M10.2826 1.83735C10.5131 1.37041 10.6284 1.13694 10.7848 1.06235C10.9209 0.997447 11.0791 0.997447 11.2152 1.06235C11.3716 1.13694 11.4869 1.37041 11.7174 1.83735L13.904 6.26732C13.9721 6.40517 14.0061 6.47409 14.0558 6.52761C14.0999 6.57499 14.1527 6.61338 14.2113 6.64065C14.2775 6.67146 14.3536 6.68257 14.5057 6.70481L19.397 7.41974C19.912 7.49502 20.1696 7.53267 20.2888 7.65847C20.3925 7.76792 20.4412 7.91833 20.4215 8.06781C20.3988 8.23961 20.2124 8.42121 19.8395 8.78441L16.3014 12.2305C16.1911 12.3379 16.136 12.3916 16.1004 12.4555C16.0689 12.5121 16.0487 12.5742 16.0409 12.6385C16.0321 12.7112 16.0451 12.787 16.0711 12.9388L16.9059 17.8061C16.994 18.3195 17.038 18.5762 16.9553 18.7285C16.8833 18.8611 16.7553 18.954 16.607 18.9815C16.4366 19.0131 16.2061 18.8919 15.7451 18.6494L11.3724 16.3499C11.2361 16.2782 11.168 16.2424 11.0962 16.2283C11.0327 16.2159 10.9673 16.2159 10.9038 16.2283C10.832 16.2424 10.7639 16.2782 10.6276 16.3499L6.25491 18.6494C5.7939 18.8919 5.5634 19.0131 5.39296 18.9815C5.24467 18.954 5.11671 18.8611 5.04472 18.7285C4.96199 18.5762 5.00601 18.3195 5.09406 17.8061L5.92887 12.9388C5.9549 12.787 5.96791 12.7112 5.9591 12.6385C5.95131 12.5742 5.9311 12.5121 5.89959 12.4555C5.86401 12.3916 5.80886 12.3379 5.69857 12.2305L2.16054 8.78441C1.78765 8.42121 1.6012 8.23961 1.57851 8.06781C1.55877 7.91833 1.60754 7.76792 1.71124 7.65847C1.83042 7.53267 2.08796 7.49502 2.60303 7.41974L7.4943 6.70481C7.64641 6.68257 7.72247 6.67146 7.7887 6.64065C7.84735 6.61338 7.90015 6.57499 7.94417 6.52761C7.99389 6.47409 8.02791 6.40517 8.09596 6.26732L10.2826 1.83735Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </label>
        `)}
      </div>
    `;
  }
  _onCloseClick() {
    this.isVisible = !1, this.dispatchEvent(new CustomEvent("close", {
      bubbles: !1,
      detail: null
    }));
  }
  _onRateClick(t) {
    this._onQuestionCompleted(t);
  }
  _onTextareaInput(t) {
    const e = t.target;
    this._currentText = e.value;
  }
  _onTextareaInputSubmit() {
    this._onQuestionCompleted(this._currentText), this._currentText = "";
  }
  _onQuestionCompleted(t) {
    const e = {
      index: this.questionIndex,
      questionId: this.questionList[this.questionIndex].id,
      data: t,
      type: this.questionList[this.questionIndex].type ?? "rate"
    };
    this._answers.push(e), this.dispatchEvent(new CustomEvent("questionCompleted", {
      bubbles: !1,
      detail: e
    })), this.questionIndex < this.questionList.length - 1 ? this.questionIndex++ : (this.isVisible = !1, setTimeout(() => {
      this.questionIndex = 0;
    }, 500), this.dispatchEvent(new CustomEvent("completed", {
      bubbles: !1,
      detail: this._answers
    })), this._answers = []);
  }
};
r.styles = x`
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

      --usc-modal-width: 480px;
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

    .textarea-wrapper {
      margin-top: 12px;
    }

    .textarea-wrapper > .question-textarea {
      display: block;
      outline: none;
      border-radius: 8px;
      border: 1px solid #D0D5DD;
      width: 100%;
      height: 80px;
      padding: 12px 14px;
      font-family: "PingFang SC";
      font-size: 14px;
      line-height: 22px;
      color: #344054;
      resize: none;
      background: #fff;
      transition: border 0.2s ease;
    }
    .textarea-wrapper > .question-textarea:focus {
      border: 1px solid #0085FF;
      outline: #E5F2FF solid 3px;
    }
    .textarea-wrapper > .question-textarea:hover {
      border: 1px solid #0085FF;
    }
    .textarea-wrapper > .question-textarea::placeholder {
      font-family: "PingFang SC";
      font-size: 14px;
      line-height: 22px;
      color: #667085;
    }

    .textarea-wrapper > .submit-btn-wrapper {
      margin-top: 12px;
      display: flex;
      flex-direction: row-reverse;
    }

    .submit-btn-wrapper > .textarea-submit-btn {
      border-radius: 4px;
      border: 1px solid #0085FF;
      background: #0085FF;
      padding: 3px 12px;
      font-family: "Helvetica Neue";
      font-size: 12px;
      line-height: 18px;
      font-weight: 400;
      color: #FFF;
      transition: all 0.2s ease;
      cursor: pointer;
    }
    .submit-btn-wrapper > .textarea-submit-btn:hover {
      border: 1px solid #349EFF;
      background: #349EFF;
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
  `;
a([
  l({ type: Array })
], r.prototype, "questionList", 2);
a([
  l({ type: Number })
], r.prototype, "questionIndex", 2);
a([
  l({ type: Boolean })
], r.prototype, "isVisible", 2);
a([
  l()
], r.prototype, "_styles", 2);
a([
  l({ type: String })
], r.prototype, "_currentText", 2);
r = a([
  f(c)
], r);
const L = r;
class F {
  constructor(e = []) {
    this._listenerDestroyers = [];
    const s = document.createElement(c);
    this._element = s, e.length > 0 && this.addQuestions(e), document.body.appendChild(this._element);
  }
  /**
   * @description: 展示用户调查弹窗
   * @return {*}
   */
  async launch() {
    await this._element.updateComplete, this._element.isVisible = !0;
  }
  /**
   * @description: 主动关闭用户调查弹窗
   * @return {*}
   */
  close() {
    this._element.isVisible = !1;
  }
  /**
   * @description: 完全卸载用户调查组件
   * @return {*}
   */
  destroy() {
    document.body.removeChild(this._element);
    for (const e of this._listenerDestroyers)
      e();
    this._element = null, this._listenerDestroyers = null;
  }
  /**
   * @description: 设置用户调查问题
   * @param {Question} questions
   * @return {*}
   */
  setQuestions(e) {
    this._element.questionList = e;
  }
  /**
   * @description: 删除用户调查问题
   * @param {number} id
   * @return {*}
   */
  removeQuestionById(e) {
    if (this._element.questionIndex === this._element.questionList.length - 1 && this._element.questionList[this._element.questionIndex].id === e)
      throw new Error("无法删除当前正在填写的最后一个问题！");
    this._element.questionIndex = this._element.questionIndex - this._element.questionList.slice(0, this._element.questionIndex).filter((s) => s.id === e).length, this._element.questionList = this._element.questionList.filter((s) => s.id !== e);
  }
  /**
   * @description: 批量删除用户调查问题
   * @param {number} ids
   * @return {*}
   */
  removeQuestionByIds(e) {
    if (this._element.questionList.slice(this._element.questionIndex).every((s) => e.includes(s.id)))
      throw new Error("无法直接删除所有待填写问题！");
    this._element.questionIndex = this._element.questionIndex - this._element.questionList.slice(0, this._element.questionIndex).filter((s) => !e.includes(s.id)).length, this._element.questionList = this._element.questionList.filter((s) => !e.includes(s.id));
  }
  /**
   * @description: 添加用户调查问题
   * @param {Question} question
   * @param {number} index 可选参数，插入位置
   * @return {*}
   */
  addQuestion(e, s = -1) {
    s === -1 ? this._element.questionList.push(e) : this._element.questionList.splice(s + 1, 0, e), this._element.requestUpdate();
  }
  /**
   * @description: 批量添加用户调查问题
   * @param {Question} questions
   * @param {number} index 可选参数，插入位置
   * @return {*}
   */
  addQuestions(e, s = -1) {
    s === -1 ? this._element.questionList.push(...e) : this._element.questionList.splice(s, 0, ...e), this._element.requestUpdate();
  }
  on(e, s) {
    const o = (i) => {
      s(i.detail);
    };
    this._element.addEventListener(e, o), this._listenerDestroyers.push(() => {
      this._element.removeEventListener(e, o);
    });
  }
}
export {
  L as UserSatisfactionElement,
  F as UserSatisfactionSurvey
};
