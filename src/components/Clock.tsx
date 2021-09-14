import React from 'react'

export default class Clock extends React.Component {
  constructor (props: Record<string, any>) {
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
  component
  componentWillUnmount () {
    const { clockTimerId } = this.state
    clearInterval(clockTimerId)
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
    const { currentTime } = this.state
    return (
        <div className="clock-wrap">
            <h2>Clock</h2>
            <h3>{currentTime}</h3>
        </div>
    )
  }
}
