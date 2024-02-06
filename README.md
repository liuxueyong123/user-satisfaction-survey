# User Satisfaction Survey

A cross-framework universal user satisfaction survey component based on Lit, for easy and quick integration of user satisfaction survey features. 🚀🚀🚀

<!-- 使用示例 👉 [Demo](https://lxy520.top/demo/img-marker.html)
![图例](https://web-cdn.agora.io/doc-shengwang/img/changelog/202310301605373.png) -->

## 安装

- 使用 cdn

```js
<script src="https://npm.onmicrosoft.cn/user-satisfaction-survey@^0/dist/index.umd.js"></script>
```

- 使用 npm

```sh
npm install user-satisfaction-survey
```

- 使用 yarn

```sh
yarn add user-satisfaction-survey
```

- 使用 pnpm

```sh
pnpm add user-satisfaction-survey
```

## 使用

### 基础用法

```ts
import { UserSatisfactionSurvey } from 'user-satisfaction-survey'

const userSatisfactionInstance = new UserSatisfactionSurvey([
  {
    id: 1,
    content: "我们的控制台操作方便，您能够快速找到关注的信息？"
  },
  {
    id: 2,
    content: "通过查阅文档，您能够轻松快速的解决集成中的问题？"
  },
  {
    id: 3,
    content: "我们的音视频质量很好，能够满足您的需求？"
  },
  {
    id: 4,
    content: "我们的 Demo 代码质量很好，能够帮助您缩短集成时间？"
  },
  {
    id: 5,
    content: "我们的 SDK 设计的很简单，您能够轻松快速的完成集成？"
  },
  {
    id: 6,
    content: "我们的技术支持，能够快速高效地帮助您解决问题？"
  },
]);

// 用户回答每个问题时触发该回掉函数
userSatisfactionInstance.on('questionCompleted', (res) => {
  console.log('questionCompleted', res)

  // id 为 4 的问题得分小于 3 时，删除 id 为 5 的问题，并在其后额外增加一个问题 
  if (res.questionId === 4 && res.score < 3) {
    userSatisfactionInstance.removeQuestionById(5)
    userSatisfactionInstance.addQuestion({
      id: 7,
      content: "我们的 Demo 场景丰富，能覆盖到您的使用场景？"
    }, res.index)
  }
})

// 用户完成整个问卷时触发该回掉函数
userSatisfactionInstance.on('completed', (res) => {
  console.log('completed', res)
})

window.addEventListener('load', () => {
  // 弹出用户满意度调查问卷
  userSatisfactionInstance.launch()
})

// 主动关闭弹窗
// userSatisfactionInstance.close()

// 销毁实例
// userSatisfactionInstance.destroy()
```
