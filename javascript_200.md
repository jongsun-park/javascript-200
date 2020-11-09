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

## 149 이벤트 위임 처리하기

이벤트가 발생하는 요소의 부모 요소에 이벤트 리스너를 작성하여, 여러 요소를 한번에 관리하기.

- NodeObject.className.indexOf('class'): 이벤트 대상 요소의 클래스 이름 확인
- NodeObject.closest('TAG'): 부모 요소 중 입력 받은 선택자에 해당하는 가장 가까운 요소 반환.
- NodeObject.remove(): 해당 요소 삭제

## 150 사용자 이벤트 생성하기

알림 메시지 창 만들기

클릭 -> 알림창 생성 -> 닫기 버튼 -> 알림창 삭제

```js
// 정의
const CustomEvent = new CustomEvent( 이벤트 식별자 , {
  bubbles: true,
  detail: { 전달하고자 하는 정보 }
})
this.dispatchEvent( CustomEvent )

// 사용
Element.addEventListener( 이벤트식별자, e => console.log(e.detail))
```

## 151 HTML 폼 활용하기

form 요소는 name 속성을 사용하여 전역 객체의 forms 속성에서 가쟈올 수 있다. form 하위 태그의 경우 form의 element 속성 아래에서 name을 사용하여 가져올 수 있다. 하이픈이 있는 경우 대괄호를 이용하고, 나머지의 경우 온점 연산자로 접근이 가능하다.

- `<form name="formElement">` // document.forms.formElement
- `<fieldset name="fieldsetElement">` // formObject.elements.fieldsetElement
- `<input name="inputElement">` // formObject.elements.inputElement
- `<option name="optionElement">` // formObject.elements.optionElement
- 입력 받은 값 // inputElement.value

```js
const orderForm = document.forms["order-form"];
const userInfo = orderForm.elements["user-info"];
const productInfo = orderForm.elements["product-info"];

const { userName, tel } = userInfo.elements;
const { productName, color } = productInfo.elements;
```

## 152 스크롤 처리하기

offsetTop, offsetLeft: 부모요소 부터 얼마나 떨어져 있는지

pageYOffset: 브라우저 상단에서 얼마나 스크롤이 내려왔는지

```javascript
window.addEventListner('scroll', () => {
  if(window.pageYoffset >= nav.offsetTop){
    nav.classList.add('fixed')
  }else{
    nav.classList.remove('fixed)
  }
})
```

## 153 문서 이동하기

전역 객체 location를 사용해서, 현재 페이지에 대한 정보를 얻거나, 페이지를 원하는 url로 이동할 수 있다.

property: host, hostname, href, origin, pathname, port, protocol

method: assign (`location.assign('https://naver.com'`)

## 154 브라우저 히스토리 이해하기

window interface "popstate event"

- 사용자의 세션 기록 탐색으로 인해 현재 활성화된 기록 항목이 바뀔때 발생
- 발생 하는 경우: 브라우저 뒤로 가기 버튼, history.back(), history.forward(), history.go(숫자)
- 발생 하지 않는 경우: history.pushState(), history.replace()

`history.pushState(state, title [, url])`
`history.replaceState(state, title [, url])`

- state: 현재 히스토리 상태 (history.state)
- title: 브라우저 상단 타이들 변경 (대부분 브라우저 미구현)
- url: 새로운 히스토리 url

```javascript
const userList = document.querySelector(".user-list");

userList.addEventListener("click", (e) => {
  const liEl = e.target;
  if (liEl.tagName === "LI") {
    const name = liEl.dataset.name; // data-name="jay"
    // console.log(name);
    select(userList, liEl);
    history.pushState(name, null, name);
  }
});

// history.pushState 로 히스토리가 변경 될 때, 노드 리스트의 클래스 수정
window.addEventListener("popstate", (e) => {
  const selectedUser = document.querySelector(
    `.user-list [data-name=${e.state}]`
  );
  select(userList, selectedUser);
});

function select(ulEl, liEl) {
  Array.from(ulEl.children).forEach((v) => v.classList.remove("selected"));
  if (liEl) {
    liEl.classList.add("selected");
  }
}
```

### Array from a NodeList

반복가능한 객체를 얕은 복사해서 배열로 만들어 반환한다.
(문자열, map, set...)

```javascript
// Create an array based on a property of DOM Elements
const images = document.getElementsByTagName("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```
