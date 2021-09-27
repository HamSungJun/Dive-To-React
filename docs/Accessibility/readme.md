## Accessibility

### Index

- 시맨틱 마크업이란 무엇인가?

- 시맨틱 마크업의 장점

#### Effect

`HTML` 태그가 가진 의미, 역할등을 깊게 이해하게 되었을 때, 아래와 같은 이점을 얻을 수 있다.

1. 손쉬운 개발 난이도 혹은 코스트

   - 각 태그에 내장된 고유의 기능을 이용하는 것을 통해 스크립트를 짜넣는 양과 그 경우의 수가 줄어들게 된다.

2. 모바일 반응성 향상

    - 억지로 태그에 의미를 새겨넣기 위한 스파게티 코드보다 더욱 간결하게 마크업을 작성하게 되고 리소스의 경량화로 이어진다.

3. 검색 엔진 최적화 우선

    - div, span 으로 도배된 페이지보다 `Heading`, `Nav` 등 의미를 가진 페이지에 더 높은 검색엔진 점수를 할당받는다.

    - 개인적으로 이 대목은 `B2B` 에서는 관대할 수 있으나 `B2C` 의 경우에는 아주 중요하다고 생각한다.

#### Example

`Good Semantic`

```html
// * 헤딩과 문단, 리스트로 구성된다.
// * 개별 요소를 CSS 선택자로 특정할 수 있다.
<h1>My heading</h1>

<p>This is the first section of my document.</p>

<p>I'll add another paragraph here too.</p>

<ol>
  <li>Here is</li>
  <li>a list for</li>
  <li>you to read</li>
</ol>

<h2>My subheading</h2>

<p>This is the first subsection of my document. I'd love people to be able to find this content!</p>

<h2>My 2nd subheading</h2>

<p>This is the second subsection of my content. I think is more interesting than the last one.</p>
```

`Bad Semantic`

```html
// * 마크업 전체가 의미없는 한 덩어리로 구성된다.
// * CSS 선택자를 통해 특정 엘리먼트에 접근하는 것이 어렵다.
<font size="7">My heading</font>
<br><br>
This is the first section of my document.
<br><br>
I'll add another paragraph here too.
<br><br>
1. Here is
<br><br>
2. a list for
<br><br>
3. you to read
<br><br>
<font size="5">My subheading</font>
<br><br>
This is the first subsection of my document. I'd love people to be able to find this content!
<br><br>
<font size="5">My 2nd subheading</font>
<br><br>
This is the second subsection of my content. I think is more interesting than the last one.
```

<hr />

`스크린 리더의 동작 고려`

- 스크린 리더가 문맥적으로 읽고 표현할 수 있도록 비 언어적인 표현보다는 언어적인 표현을 사용하는 것을 지향하라.

- 줄임말보다는 완전한 단어를 명시하는 것도 좋다. (Jan -> January)

- 레이아웃을 표현하기 위해 `Table` 태그를 사용하지 말 것. 해당 태그는 2차원의 데이터를 표현하기 위한 태그이다.

    - `Semantic Tag` 와 모던 CSS 레이아웃 속성을 통해 얼마든지 레이아웃 구성이 가능하다.

    - [Modern Layout Example](https://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/)

<hr />

`UI Controls`

- 키 입력만으로 페이지 대부분의 UI 및 Form Control 요소를 컨트롤 할 수 있도록 설계한다.

- 정말 필요한 경우에는 `TabIndex` 프로퍼티를 `HTML` 태그에 입력하여 기본 방문 순서를 조작할 수 있다.

    - TabIndex="0" 탭 키를 통한 포커싱이 불가능한 요소를 가능하도록 지정할 수 있다.

    - TabIndex="-1" 일반적으로 포커싱이 불가능한 요소를 프로그래밍적으로 가능하도록 지정할 수 있다.

<hr />

`Text Label`

- 문단의 일부 텍스트에 링크처리를 하는 경우, `'여기'` 를 클릭하라는 형태보다 `'사과에 대한 자세한 내용'` 과 같은 형태를 지향한다.

- `input` 에는 `label` 태그를 통해 관계성을 갖도록 해준다.

<hr />

`Image Alt`

- 이미지가 표시되지 못했을 경우 대체 텍스트 속성을 통해 해당 이미지가 어떤 내용인지 전달하는 텍스트를 기입할 수 있다.

- 단순 데코레이션 목적의 이미지는 값이 없는 `alt` 속성을 기입하여 스크린리더가 필요없는 동작을 하지 않도록 막아줄 수 있다.

- `aria-labelledby` 프로퍼티를 통해 `alt` 속성만으로 표현하기 어려운 내용을 대체할 수 있다.

<hr />

`Semantic Tags`

- `address` : 사용자 혹은 조직에 대한 정보를 제공할 때 사용될 수 있다.

```html
<address>
    <a href=“mailto:”></a>
    <a href=“tel:+821034551209”>010-3455-1209</a
</address>
```

- `article` : 독립적으로 배포하거나 재사용 가능한 요소를 표시할 때 사용될 수 있다.

```html
<article class=“forecast”>
    <h2>판교의 월별 날씨</h2>

    <article class=“forecast-day”>
        <h3>2021-09</h3>
        <p>구름 많음, 비</p>
    </article>

    <article class=“forecast-day”>
        <h3>2021-08</h3>
        <p>구름 많음, 비</p>
    </article>

    <article class=“forecast-day”>
        <h3>2021-07</h3>
        <p>구름 많음, 비</p>
    </article>

</article>
```

- `aside` : 메인 콘텐츠와는 크게 관련성이 없는 영역을 표시할 때 사용될 수 있다.

```html
<article>

    <h2></h2>
    <p></p>
    <p></p>

    <aside></aside>

</article>
```

- `footer` : 저작자에 대한 표시 혹은 도큐먼트와 관련된 링크를 제공할 때 사용될 수 있다.

```html
<article>

    <h2></h2>

    <ol>
        <li></li>
        <li></li>
    </ol>

    <footer></footer>

</article>
```
	
- `header` : 네비게이션, 헤딩요소, 로고, 검색폼, 저작자 이름을 표시할 때 사용될 수 있다.

```html
<header>
    <h1></h1>
</header>

<main></main>
```

- `main` : 도큐먼트와 직접적으로 연결되며 지배적인 콘텐트를 표시할 때 사용될 수 있다.

```html
<!-- header 와 main, footer 태그는 되도록 한 페이지에 하나씩 있는 것이 바람직하다. -->
<!-- header 와 main, footer 태그는 Siblig 관계에 있도록 배치하는 것이 바람직하다. -->
<header></header>

<main>
    <p></p>
    <p></p>
</main>

<footer></footer>
```

- `nav` : 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다.

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

<hr />

`WAI-ARIA`

- 실무시 웹 접근성 강화를 위해 하단의 레퍼런스 참고를 권장한다.

#### Reference

- [HTML: 접근성을 위한 기초](https://developer.mozilla.org/ko/docs/Learn/Accessibility/HTML)

- [레진 WAI-ARIA 가이드라인](https://github.com/lezhin/accessibility/blob/master/aria/README.md)
