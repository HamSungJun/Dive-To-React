import React, { Suspense, lazy } from 'react'
import './index.scss'
import { AppProps, AppState } from './types'
import LanguageContext from 'Contexts/Language'
import ThemeContext from 'Contexts/Theme'
import ErrorBoundary from 'Components/ErrorBoundary'

const LazyClockComponent = lazy(() => import(/* webpackChunkName: 'Clock' */ '../Clock'))
class App extends React.Component<AppProps, AppState> {
  constructor (props: AppProps) {
    super(props)
    this.changeCurrentLang = this.changeCurrentLang.bind(this)
    this.changeCurrentTheme = this.changeCurrentTheme.bind(this)
    this.state = {
      languageContext: 'ko',
      themeContext: {
        currentTheme: 'light',
        changeTheme: this.changeCurrentTheme
      }
    }
  }

  changeCurrentLang (nextLang: string) {
    this.setState({
      languageContext: nextLang
    })
  }

  changeCurrentTheme (nextTheme: string) {
    this.setState((prevState) => ({
      themeContext: {
        currentTheme: nextTheme,
        changeTheme: prevState.themeContext.changeTheme
      }
    }))
  }

  render () {
    const { languageContext, themeContext } = this.state
    return (
      <ErrorBoundary>
        <LanguageContext.Provider value={languageContext}>
          <ThemeContext.Provider value={themeContext}>
            <div className="App">
              <Suspense fallback={<div>시계가져오는중</div>}>
                <LazyClockComponent clockName="123" />
                <LazyClockComponent clockName="456"/>
                <LazyClockComponent clockName="789"/>
              </Suspense>
            </div>
          </ThemeContext.Provider>
        </LanguageContext.Provider>
      </ErrorBoundary>
    )
  }
}

export default App
