## List-With-Key

### Reason

- 배열을 순회하는 과정에서 `key` 는 어떤 역할을 하는가

#### Example

배열 데이터에 `map()` 함수를 통해 JSX 엘리먼트를 반환하는 경우 `key` 프로퍼티가 요구된다.

```ts
export function NumberList ({numbers}: NumberListProps) {
    return (
        <ul className="number-list">
            {numbers.map((number, index) => (
                <li className="number-list-item" key={index}>{number}</li>
            ))}
        </ul>
    )
}
```

- 순회 인덱스로 `key` 를 매핑하는 경우 두가지 상황을 생각해볼 수 있다.

    - 리스트 데이터가 앞으로 변하지 않을 경우

    - 리스트 데이터의 추가 및 삭제가 예상되는 경우

> 리스트 데이터가 절대 변할일이 없다면 `index` 를 `key` 에 매핑하는 행위가 오히려 컴퓨팅 연산을 절약할 수 있다. 왜나하면 `uniqueId` 를 부여해주기 위해 `nanoId()` 함수실행의 절차를 생략할 수 있기 때문이다. 하지만 데이터의 추가 삭제가 동반되면 이야기가 달라진다.

`Reconciliation` 자식 노드에 대한 재귀적 처리 과정에서 전과 후 자식 리스트를 비교하며 새로 추가한 엘리먼트를 확인한다.  

리스트 아이템 1,2는 동일하다고 판별하고 추가된 아이템 3번만 추가적으로 렌더링한다.

```html
// [DESC] 리스트의 가장 마지막에 아이템을 추가하는 경우
// AS-IS
<ul>
    <li>1</li>
    <li>2</li>
</ul>

// TO-BE
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>
```

추가된 리스트 아이템 3번과 더불어 아이템 1, 2도 같은 엘리먼트로 판단하지 않아 전부 재렌더링한다.

```html
// [DESC] 리스트의 가장 앞에 아이템을 추가하는 경우
// AS-IS
<ul>
    <li>1</li>
    <li>2</li>
</ul>

// TO-BE
<ul>
    <li>3</li>
    <li>1</li>
    <li>2</li>
</ul>
```

유일한 `key` 를 부여해준다면 비교과정에서 해당 값을 이용하여 비교한다. 이전 리스트의 아이템 1, 2 키가 후에도 존재하므로
재사용 한다. 아이템 3의 키값은 새로 추가되었으므로 추가적으로 렌더링한다.

```html
// [DESC] 유일키가 할당된 리스트의 가장 앞에 아이템을 추가하는 경우
// AS-IS
<ul>
    <li key={1}>1</li>
    <li key={2}>2</li>
</ul>

// TO-BE
<ul>
    <li key={3}>3</li>
    <li key={1}>1</li>
    <li key={2}>2</li>
</ul>
```

#### Effect

- 리스트 렌더링 과정에서 데이터의 변동 유무를 확인하여 순회 인덱스를 매핑할지 유일키를 매핑할지 상황에 따라 결정하면 된다.
- `nanoId` 와 같은 유일키 발급 라이브러리를 사용하기 좋아보임.

#### Reference

- [index-as-a-key-is-an-anti-pattern](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318)
- [reconciliation](https://ko.reactjs.org/docs/reconciliation.html#recursing-on-children)
- [why-is-nanoid-replacing-uuid](https://blog.bitsrc.io/why-is-nanoid-replacing-uuid-1b5100e62ed2)