import React, { Suspense, lazy } from 'react'
import './App.scss'
const LazyClockComponent = lazy(() => import(/* webpackChunkName: 'Clock' */ './Clock'))
class App extends React.Component {
  render () {
    return (
        <div className="App">
          <Suspense fallback={<div>시계가져오는중</div>}>
            <LazyClockComponent clockName="123" />
            <LazyClockComponent clockName="456"/>
            <LazyClockComponent clockName="789"/>
          </Suspense>
        </div>
    )
  }
}

export default App
