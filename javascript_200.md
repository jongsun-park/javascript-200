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

## 155 브라우저 로컬 스토리지 사용하기

전역 객체 localStorage: 하나의 페이지( 스키마 + 호스트 이름 + 포트 )는 하나의 로컬 스토리지로 관리 된다.

- localStorage.getItem(this.\_key)
- localStorage.setItem(this.\_key, itemString)
- 로컬 스토리지는 JSON 문자열로 저장 한다. 로컬 스토리지에서 가져온 값 (getItem)은 객체로 전환해야 하고 (parse), 로컬 스토리지에 넣을 값은 문자열로 전환해서 넣어야 한다. (stringify)

- JSON.parse( JSON문자열 ) // 반환 값: 객체
- JSON.stringify( 객체 ) // 반환 값: JSON 문자열

```javascript
const obj = {};
localStorage.setItem(this._key, JSON.stringify(obj));

const str = localStorage.getItem(this._key);
JSON.parse(str);
```

## 156 로컬 파일을 브라우저에서 읽기

이벤트 (이벤트 핸들러) [모질라 드래그 앤 드롭 API](https://developer.mozilla.org/ko/docs/Web/API/HTML_%EB%93%9C%EB%9E%98%EA%B7%B8_%EC%95%A4_%EB%93%9C%EB%A1%AD_API)

- dragover (ondragover): 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생. / 파일을 드래그해서 드롭 박스 위에 올렸을 때 발생 (hover 단계)
- drop (ondrop): 요소나 텍스트 블록을 적합한 대상에 드롭했을 때 발생 / 파일을 드롭박스 위에 놓을 때 발생. (active 단계)

객체

- e.dataTransfer // 드롭 한 파일의 정보가 담겨져 있는 객체 // DropTransfer {dropEffect, effectAllowed, types, files}
- e.dataTransfer.files // FileList [{name, lastModified, size, type}]

생성자 함수

- [FileReader](https://developer.mozilla.org/ko/docs/Web/API/FileReader): 웹에서 비동기적으로 파일을 읽어 사용자 컴퓨터에 저장하는 것을 가능하도록 해주는 API
  - onload: 읽기 동작이 성공적으로 완료 되었을 때마다 발생
  - readAsDataURL: 인자로 받은 파일(File/Blob)을 읽고, 반환 값의 result 속성이 문자형으로 파일 정보를 가진다.

```javascript
const reader = new FileReader();
reader.onload = (e) => {
  const imgEl = document.createElement("img");
  imgEl.src = e.target.result;
  imgEl.title = file.name;
  document.getElementById("result").appendChild(imgEl);
};
reader.readAsDataURL(file);
```

## 157 iframe 조작하기

타입: HTMLIframeELement `{contentWindow, contentDocument}`

iframe 은 바깥 문서와 다른 별도의 window, document 객체를 가질 수 있다.

- contentWindow: `document.querySelector('#iframe1').contenWindow.location = 'https://google-analytics.com'`
- contentDocument: `document.querySelector('#iframe1').contenDocument.body.style.backgroundColor = 'blue'`

X-Frame-Options: 다른 페이지에 내장될 수 있는지 정의 (deny | sameOrigin)

- `<meta htttp-equiv="X-Frame-Options" content="deny">`
- same-origin: 인베딩은 할 수 있지만, 내부 접근은 할 수 없다. (로케이션만 변경 가능하고, window 객체 나 document 객체에 접근하여 수정 할 수 는 없다.)

## 158 iframe 과 메시지 교환하기

현재 문서에서 발생한 이벤트로 임베딩한 iframe 의 문서 객체 제어하기

`window.parent.postMessage(message, targetOrigin, [transfer])`: 한 윈도우에서 다른 윈도우로 MessageEvent를 전송할 수 있다.

- targetWindow: window.parent
- message: 다른 window에 보내질 데이터
- targetOrigin: "\*" or url

전달 된 메시지 사용하기

- `window.addEventListener('message', e => console.log(e.data)`
- [MessageEvent](https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent): 타겟으로 전달 받은 메시지를 보여주는 인터페이스

```javascript
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let myForm = document.getElementById("myForm");
  let formData = new FormData(myForm);

  const names = Array.from(inputs)
    .filter((input) => input.name)
    .map((input) => input.name);

  names.forEach((name) => {
    formData[name] = formData.get(name);
  });

  // window.parent.postMessage(formData, "*");
});
```

## 159 XMLHttpRequest로 비동기 통신 처리하기

- 어떠한 형식의 데이터도 비동기로 서버와 통신 할 수 있다.

- 생성: `const req = new XMLHttpReqeust()`
- req.onload = () => {}
- req.onerror = () => {} // 에러 발생시 콜백 함수 지정
- req.open('GET', url) // HTTP 메소드 (GET/POST/PUT/DELETE), 요청 주소 입력
- req.setReqeustHeader('Accept', 'application/json') // 요청하는 클라이언트 받을 수 있는 데이터 타입
- req.status // HTML 상태 코드 ex. 200
- req.statusText // HTML 상태 텍스트 ex. OK
- req.response // 요청 후 반환 값
- req.send() // 요청 보내기

```javascript
// 요청 함수 정의
function sendRequest(url, successCallback, failureCallback){
  const req = new XMLHttpRequest();
  const {status, statusText, response} = req;
  req.onload = () => {
    if(status >= 200 && status < 300>){
      // sucess
      sucessCallback(response);
    }else{
      // fail
      failureCallback(new Error(statusText))
    }
  }
  // 초기화
  req.onerror = failureCallback;
  req.open('GET', url);
  req.setReqeustHeader('Accept', 'application/json');
  // 요청
  req.send()
}
// 요청
const url = '' // api
const successHandler = (data) => {console.log(JSON.parse(data))}
const failureHandler = (err) => {console.err(err)}

sendRequest(url, successHandler, failureHandler);
```

## 160 Fetch API를 활용한 비동기 통신 처리하기

```javascript
const reqPromise = fetch( url, {...} )
reqPromise
  .then( res =>
    if (res.status >= 200 && res.status < 300){
      return res.json()
    }else{
      return Promise.reject( new Error(`Got status ${res.status}`)))
    }
  .then( user => console.log(user) )
  .catch(error => alert(error))
```

## 161 웹 워커로 백그라운드 코드 실행하기

웹 워커는 백그라운드 스레드에서 스크립트는 실행 할 수 있도록 도와 준다.

- 생성: `const worker = new Worker()`
- 외부 스레드로 값 보내기: worker.postMessage({...})
- 외부 스레드에서 값 가지고 오기: worker.onMessage = e => console.log( e.data )

메인 스크립트에서 postMessage로 메시지를 전달하면 외부 스크립트에 등록된 콜백 함수가 실행 된다. 결과값은 postMessage 함수를 사용해서 메인 스크립트로 전달한다. 외부 스크립트에서 메시지가 전달 되면 메인 함수 워커 인스턴스의 onmessage가 실행 된다.

메인 스크립트

```javascript
if (window.Worker) {
  // 워커를 사용 할 수 있는지 확인
  const worker = new Worker(external.js);
  let result;
  worker.poestMessage({ key: value });
  worker.onmessage = (e) => {
    result = e.data;
  };
}
```

외부 스크립트

```javascript
onmessage = (e) => {
  const input = e.data;
  const result = ...;
  postMessage(result)
};
```

## 162 Node.js의 자바스크립트 이해하기

서버와 클라이언트

- 서버: 웹서비스의 HTTP 요청을 받아, 프로세스와 파일 시스템 등의 작업을 처리한 후 응답
- 클라이언트: 사용자가 클라이언트를 통해 서비스를 요청

Node.js

- 서버와 관련된 기술
- Chrome v8 JavaScript engine으로 빌드된 자바스크립트 런타임
- 코어의 V8 엔진을 통해 자바스크립트로 작성된 코드를 기계어로 변환

```javascript
const http = require("http");

const hostname = "127.0.0.1";
const posrt = 3000;

const server = http.createSErver((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

## 163 node 명령어로 파일 실행하기

터미널에서 `node 파일명`으로 파일 실행
`mode hello_node.js`

## 164 Node.js의 모듈 이해하기

모듈(Module)

- 코드의 모음, 코드의 블록
- 코드를 정리하여 기능별로 나누거나, 한가지 목적만을 위해 관련된 코드를 묶어 놓은 블록 단위

자바스크립트의 코드를 모듈로 만드는 합의된 일련의 표준명세서: CommonJs, AMD

문법

- 선언: module.exports
- 로딩: require

## 165 Node.js 내장 모듈 사용하기

- Node.js API / 코어 모듈 / 내장 모듈
- require 함수에 문자열 인자를 넣어 호출 하면 Node 코어 lib 폴더 안에서 일치하는 모듈을 찾아 가져와 사용 할 수 있다.

```javascript
const util = require("util");
const name = "Tony";
const greeting = util.format("Hello %s", name);
console.log(greeting);
```

## 166 Node.js 예외 처리하기

비동기 모듈 / 함수 인 경우

- 콜백함수의 첫 번째 매개변수로 에러 정보를 반환한다.
- 에러 정보가 빈 값인 것을 확인한 이후 다음 작업을 수행한다.

```javascript
const asyncFn = async (isError, result) => {
  if (isError && isError instanceof Error) {
    return console.error(isError);
  } else {
    // await 구문
    return result;
  }
};
```

비동기 형식

- try-catch, thow

```javascript
try{
  const fileList = fs.readSync("/undefined/");
  fileList.forEach(file => {...})
}catch(err){
  console.log(err)
}
```

## 167 Event Emitter 이해하기

이벤트: 어떤 사건이 특히 예외적이거나 중요하게 발생되는 것

리스너: 발생한 이벤트에 대한 응답으로 반응 하는 것

Event Emitter: 이벤트-리스너 패턴으로 구현되는 것

Emit 모듈

- constructor: this.events = {}
- on(type, listener): events 속성에 type 키를 가진 배열에 listener 추가
- emit(type): events 속성에 type 키에 있는 모든 listener 실행

실행 코드 파일

- Emitter.on(type, ()=>{}) // 특정 이벤트에 리스너 추가 (stack)
- Emitter.emit(type) // 특정 이벤트 실행 (resolve stack)

```javascript
//emitter.js
class Emitter {
  constructor() {
    this.events = {};
  }
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }
  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach((listener) => listener());
    }
  }
}

module.exports = Emitter;
//app.js
const Emitter = require("./emitter.js");
const em = new Emitter();

em.on("greet", () => console.log("Hello First"));
em.on("greet", () => console.log("Hello Second"));
em.emit("greet");
```

## 168 Event Emitter 이해하기 2

Node.js 이벤트

- System Events: 컴퓨터에서 시스템적으로 발생하는 이벤트 (C++ 로 작성된 Node.js 코어 라이브러리; libuv 에서 처리)
- Custom Events: 직업 구현 하여 만들수 있는 이벤트 (Event Emitter 모듈에서 해당 이벤트 처리)

```javascript
const Emitter = require("events");
const em = new Emitter();
const eventConfig = require("./config").events;
em.on(eventConfig.GEET, () => {});
em.on(eventConfig.GEET, () => {});
em.emit(eventConfig.GEET);

// config.js
// 하나의 파일 안에서 변수 문자열 관리
module.exports = {
  events: {
    GREET: "greet",
  },
};
```

## 169 폴더 생성하기

[File System](https://nodejs.org/docs/latest/api/fs.html)

`fs.stat(path, (err, stats) => {})`

- syntax: `fs.stat(path[,options],callback)`
- 인자로 입력 받은 path에 있는 파일의 상태를 확인 할 때 사용한다.
- callback 함수는 err, stats을 인자로 받아 stats.isDirectory()를 통해 해당 경로에 폴더가 있는지 확인 할 수 있다.

- fs.open(), fs.readFile(), fs.writeFile() -> 파일에 직접 접근해야할 때에는 반드시 접속 권한을 확인 해야 하므로 fs.access() 모듈을 사용하길 권장한다.

  ```javascript
  const fs = require("fs");
  const pathsToCheck = ["./txtDir", "./txtDir/file.txt"];
  for (let i = 0; i < pathsToCheck.length; i++) {
    fs.stat(pathsToCheck[i], function (err, stats) {
      console.log(stats.isDirectory());
      console.log(stats);
    });
  }
  ```

`err.code === 'ENOENT'`

- Common system errors
- ENOENT: No such file or directory

`stats.isDirectory()`

- stats instace of fs.Stats
- fs.stat(), fs.lstat(), fs.fstat() 함수가 해당 객체를 반환한다.
- 확인된 결과값은 fs.Stats 클래스로 래핑되어 콜백 함수로 전달한다.
- stats.isDirectory() / stats.isFile() / stats.isFIFO()
- 객체 서술하는 타입일 때 true 를 반환 한다. (문서/파일/ first-in-first-out pipe)

`__dirname`

- 해당 폴더가 있는 절대 경로를 리턴한다.

`fs.mkdir(path, err => {}`

- syntax: `fs.mkdir(path[,options],callback)`
- 비동기로 폴더를 생성한다.
- options: `{recursive: false* | true}`
- callback: error => {...}

```javascript
fs.mkdir("/tmp/a/apple", { recursive: true }, (err) => {
  if (err) throw err;
});
```

## 170 파일 쓰기

fs.writeFile(path, content, utf8, errorCallback)

- syntax: `fs.writeFile(file, data[, options], callback)`
- file: 파일 이름, 파일 서술자 (fd; file descriptor, 특정 파일에 접근하기 위한 추상적인 키)
- data:
- options: encoding(`utf-8`), mode(`0o666`), flag(`w`), signal
- callback: err => {...}

- 파일이름으로 파일을 생성할 경우, 기존에 동일한 이름의 파일이 이미 존재한다면, 덮어쓴다.
- data는 문자열이나 버퍼가 될 수 있다.
- data가 버퍼 타입 인 경우, 인코딩 옵션은 무시된다.
- data가 문자열 인 경우, 반드시 toString 메소드를 가지고 있어야 한다.

```javascript
const data = new UnitBuffer(Buffer.from("Hello Node.js"));
fs.writeFile("message.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
```

fs.appendFile(path, content, errorCallback)

- syntax: `fs.appendFile(path,data[,options],callback`
- path: 해당 경로가 없는 경우 새로운 파일을 생성한다.
- data: string or Buffer
- options: coding(`utf-8`), mode(`0o666`), flag(`a`)

```javascript
fs.appendFile("message.txt", "data to append", (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
```

fs.open(path, wv, (err,fd)=>{...})

- syntax: `fs.open(path[, flags[, mode]], callback)`
- flags: 'r'
- mode: '0o666' (readable ans writable)
- fd(file desciptor): 경로는 이후 업데이트를 위하 fd로 전달 될 수 있다. 서술자는 파일을 닫을 때 까지 계속 유지 한다.

```javascript
fs.open("message.txt", "a", (err, fd) => {
  if (err) throw err;
  fs.appendFile(fd, "data to append", "utf8", (err) => {
    fs.close(fd, (err) => {
      if (err) throw err;
    });
    if (err) throw err;
  });
});
```

## 171 파일 정보 탐색하기

간단한 정보 확인:

- `path.parse(path)`
- `{ root, dir, base, ext, name }`

폴더 안에 파일 반환: fs.readdir(path, (err, files) => { //files.forEach( f => console.log(f) )})

상세 정보 확인: fs.stat(path, (err, fileInfo) => { console.log(fileInfo) })

## 172 파일 읽기

파일 존재 확인

```javascript
fs.open(filePath, "r", (err, fd) => {
  if ((err && err.code = "ENOENT")) console.log("Not Exist");
  if(err) console.log(err)
  fs.readFile(...)
});
```

비동기

```javascript
fs.readFile(filePath, "utf-8", (err, data) => {
  if(err) console.log(err)
  console.log(data))
};
```

동기

```javascript
try {
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(data);
} catch (err) {
  console.log(err);
}
```

## 173 파일 삭제하기

fs.access() : 파일 접근 권한 확인

- `fs.access(filePath, fs.constants.F_OK, err => {...})`

fs.unlink() : 파일 삭제

- `fs.unlink(filePath, err => {...})`

[fs.constants (파일 시스템 모듈의 상수)](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_constants)

- 파일 접근: fs.access() - F_OK, R_OK, W_OK, X_OK
- 파일 상태: fs.stats() -
- 파일 열기: fs.open() - O_RDONLY, O_WDONLY...

## 174 특정 폴더 내 모든 파일 삭제하기

`fs.rmdir(path, err => {...})`

- 경로가 아닌 파일 일 경우, `ENOENT` 에러가 발생 할 수 있다.
- 디렉토리를 삭제하기 전에 파일인지 확인하고, unlink 메소드를 사용해서 파일 부터 삭제 해준다.

```javascript
// const callback = (err, path) => { ... }
const removeDir = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if (err) return callback(err);

    if (!stats.isDirectory()) {
      console.log("이 경로는 파일입니다.");
      return fs.unlink(path, (err) =>
        err ? callback(err) : callback(null, p)
      );
    }

    console.log("이 경로는 폴더입니다.");
    fs.rmdir(path, (err) => {
      if (err) return callback(err);
      return callback(null, path);
    });
  });
};
```

## 174 Http 서버 띄우기
