import React from 'react'
import './App.scss'
import { someElement, createGreeter, wrappedImage, escaped } from './Jsx'
import Clock from './Clock'
class App extends React.Component {
  render () {
    return (
        <div className="App">
            {someElement}
            {createGreeter({ name: 'Ham Sung Jun' })}
            {wrappedImage({ src: 'https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg' })}
            {escaped({ str: '&&&&<><><script>alert(\'hi\')</script>' })}
            <Clock clockName={'함성준 시계'} />
        </div>
    )
  }
}

export default App
