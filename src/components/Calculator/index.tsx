import React from 'react'
import add from 'hsj-test-utils/math/add'
import { formatDataSize } from 'hsj-test-utils/string'
export default class Calculator extends React.Component {
  constructor (props: Record<string, any>) {
    super(props)
    console.log(add(1, 2))
    console.log(formatDataSize(100000000, 2))
  }

  render () {
    return (
      <div></div>
    )
  }
}
