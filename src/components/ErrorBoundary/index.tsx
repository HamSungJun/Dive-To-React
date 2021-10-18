import React from 'react'
import './index.scss'
import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

// [DESC] 현재 스펙상 에러 경계 컴포넌트는 반드시 클래스 컴포넌트로 선언되어야 한다.
// https://ko.reactjs.org/docs/error-boundaries.html
export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error)
    console.log(errorInfo)
  }

  render () {
    const { hasError } = this.state
    const { children } = this.props
    return (
      hasError ? <h1>에러가 발생했어요</h1> : children
    )
  }
}
