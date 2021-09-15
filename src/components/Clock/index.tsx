import React from 'react'
import { ClockProps, ClockState } from './types'

// [ISSUE] 클래스 컴포넌트 이용시 Props, State 에 대한 타입 지정
// https://react-typescript-cheatsheet.netlify.app
// https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---complete-guide

export default class Clock extends React.Component<ClockProps, ClockState> {
  constructor (props: ClockProps) {
    super(props)
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
      clockTimerId: null
    }
    this.startClock = this.startClock.bind(this)
  }

  componentDidMount () {
    this.startClock()
  }

  componentWillUnmount () {
    const { clockTimerId } = this.state
    if (typeof clockTimerId === 'number') {
      clearInterval(clockTimerId)
    }
  }

  startClock () {
    // [DESC] timerId 변수까지 state 에 목록 관리할 필요는 없다고 나온다.
    const timerId = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      })
    })
    this.setState({
      clockTimerId: timerId
    })
  }

  render () {
    const { clockName } = this.props
    const { currentTime } = this.state
    return (
        <div className="clock-wrap">
            <h2>Clock-{clockName || '이름 없음'}</h2>
            <h3>{currentTime}</h3>
        </div>
    )
  }
}
