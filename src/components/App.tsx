import React from 'react'
import './App.scss'
import { someElement, createGreeter, wrappedImage, escaped } from './Jsx'
import Clock from './Clock'
import NumberList from './NumberList'
import SlottedButton from './SlottedButton'
import Calculator from './Calculator'
class App extends React.Component {
  render () {
    return (
        <div className="App">
            {someElement}
            {createGreeter({ name: 'Ham Sung Jun' })}
            {wrappedImage({ src: 'https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg' })}
            {escaped({ str: '&&&&<><><script>alert(\'hi\')</script>' })}
            <Clock clockName={'함성준 시계1'} />
            <Clock clockName={'함성준 시계2'} />
            <Clock clockName={'함성준 시계3'} />
            <NumberList numbers={[1, 2, 3]}/>
            <NumberList numbers={[4, 5, 6]}/>
            <NumberList numbers={[7, 8, 9]}/>
            <SlottedButton clickHandler={() => { alert('clicked') }}>
              <div>
                <span>내가 버튼이 된다고?</span>
              </div>
            </SlottedButton>
            <SlottedButton clickHandler={() => { alert('clicked') }}>
              <div>
                <span>토마토 보더 버튼!</span>
              </div>
            </SlottedButton>
            <Calculator />
        </div>
    )
  }
}

export default App
