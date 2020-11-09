# 4. 자바스크립트 응용 다지기

## 141 문서 객체 모델 이해하기

문서 객체 모델(Document Object Method): HTML과 XML을 위한 프로그래밍 인터페이스

인터페이스: 해당 타입에 어떤 속성과 메소드들이 존재해야 하는지 기술만 하고 실제 구현은 각 구현체(브라우저)에서 다르게 구현 할 수 있게 약속을 정의해놓은것

**문서 객체 모델은 인터페이스고 브라우저에서 해당 인터페이스를 구현한다**

## 142 DOM 탐색하기

노드들은 트리 구조이기 때문에 부모, 자식 그리고 형제로 서로 관계를 형성한다.

특정 태그(ex. li)는 Node 타입임과 동시에 ELement 타입을 가질 수 있다.

이런 경우 Node의 속성, Element의 속성으로 탐색이 가능해 진다.

- Node: 텍스트 노드나 코멘트 노드에 접근이 가능

  - childNodes / parentNode
  - previousSibling / nextSibling
  - fistChild / lastChild

- Element: Element만 접근이 가능

  - children / parentElement
  - previousElementSibling / nextElementSibling
  - fristElemenetChild / lastElementChild

## 143 DOM 속성과 태그 속성 이해하기

태그 속성 (Attribute), DOM 속성 (Property)

대다수의 태그 속성과 DOM 속성은 1:1 대응 하지만, 어떤 경우에는 서로 다른 이름을 사용 하거나, 값을 변경 했을 때 반영되지 않을 수 있다.

- 다른 이름 사용: 태그 - class / DOM - className
- 업데이트 X: input 태그의 value
- 태그 속성 관련 메서드: getAttribute(), hasAttribute(), getAttribute(), removeAttribute()
- DOM 속성: DOM.property = new-value

## 144 DOM 생성과 수정 그리고 삭제 하기

생성

- document.createElement('TAG')
- 아이디 추가: NodeObject.id = ID
- 내부 텍스트 추가: NodeObject.innerTEXT = TEXT

수정

- 자식 요소로 추가 하기: PARENT.appendChild( NodeObject )
- 형제 관계로 뒤에 추가하기: SIBLING.after( NodeObject )
- 특정 위치 지정하기: NodeObject.insertAdjacentHTML( location, NodeObject )
  - location: beforebegin, afterbegin, beforeend, afterend

삭제

- NodeObject.remove()

## 145 스타일 제어하기

클래스

- NodeObject.classList.add('new-class')
- NodeObject.classList.remove('old-class')
- NodeObject.classList.toggle('visible')
- NodeObject.classList.replace('foo', 'bar')

스타일 객체

- NodeObject.style.key = value
- 스타일 객체의 key 값은 카멜 케이스로 작성한다. (css: font-size -> javaScript: fontSize)

## 146 이벤트 처리하기

DOM.addEventListner( EVENTType, Function )

Event Type

- click, keydown, DOMContentloaded, onload...

Listener Function: e => {...}

Event Object

- click -> MouseEvent
- e.target // NodeObject
- e.preventDefault()
- e.stopPropagation()

## 147 이벤트 흐름 이해하기

이벤트의 흐름

1. 캡쳐링: 부모 -> 자식
   ```js
   button.addEventListener(click, (e) => console.log("click"), true);
   ```
2. 타겟팅: 해당 이벤트 리스너 호출
3. 버블링: 자식 -> 부모 (기본값)

일반적으로 부모 요소의 이벤트는 버블링 단계에서 호출 된다.
캡처링 단계에서 이벤트를 불러봐야하는 경우 이벤트 리스너의 세번째 매개변수에 true를 넣어 준다.

## 148 이벤트 전파 제어하기

e.stopPropagation(): 상위로 이벤트가 전달 되는 것(버블링)을 막는다

e.preventDefault(): 브라우저 기본 행위 또한 막는다.
