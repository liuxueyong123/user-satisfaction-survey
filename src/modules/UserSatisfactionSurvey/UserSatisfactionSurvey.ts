type SurveyEventMap = {
  started: (userId: string) => void,
  completed: (userId: string, answers: any[]) => void,
};

class UserSatisfactionSurvey {
  constructor() {
    console.log('UserSatisfactionSurvey')
  }

  /**
   * @description: 展示用户调查
   * @return {*}
   */
  launch() {
    document.body.appendChild(document.createElement('user-satisfaction'))
  }

  on<T extends keyof SurveyEventMap>(eventName: T, callback: SurveyEventMap[T]) {
    // document.addEventListener(eventName, callback)
  }
}

const userSatisfactionInstance = new UserSatisfactionSurvey();
userSatisfactionInstance.on('completed', (userId, aaaaa) => {})

export default UserSatisfactionSurvey;
