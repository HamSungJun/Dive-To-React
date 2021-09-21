import React from 'react'
import { NumberListProps } from './types'
import { nanoid } from 'nanoid'
import './index.scss'

// [ISSUE] 배열 순회 인덱스를 key 로 지정하는 경우
// https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
// https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children
export default function NumberList ({ numbers }: NumberListProps) {
  return (
    <ul className="number-list">
        {numbers.map(number => (
            <li className="number-list-item" key={nanoid()}>{number}</li>
        ))}
    </ul>
  )
}
