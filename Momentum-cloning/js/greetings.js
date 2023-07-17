const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector(".greeting");

/*	자바스크립트에서는 변수를 우선 정의해야 이를 활용할 수 있다.
	html의 login-from, login-input의 요소를 querySelector를 통해 정의했고,
	greeting이라는 클래스 또한 querySelector를 통해 정의했다.
	querySelector를 통해 요소를 정의할 때는 해당 요소가 class인지 id인지 구별해야 한다,*/

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY = "username";

/*	string만 포함된 변수는 대문자만 사용하여 변수명을 짓는다.
	단순 문자열 오타로 인한 오류가 발생했을 때 발생한 오류는 js가 잡아내지 못 하지만,
	이를 변수로 지정한 후 변수에서 오타가 발생했을 때는 정의되지 않은 변수로 찾을 수 있기 때문이다.*/

function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreetings(username);
} 

/*	preventDefault를 통해 event가 원래 하는 행동을 정지한다. 이 경우에는 브라우저 새로고침에 해당한다.
	브라우저 새로고침시 받은 값이 날아가므로 새로고침을 막았다. 이후 이름 입력 창의 class에 hidden을 추가해 창을 숨겼다. 
	username이라는 변수가 loginInput에서 받은 값이라고 선언한다.
	localStorage에 해당 값을 저장하고, paintGreetings 함수를 실행한다.*/

function paintGreetings(username) {
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

/*	greeting이라는 클래스를 가진 요소에 텍스트를 추가한다. 
	~ 아래에 있는 `` 안에 ${} 를 활용하여 변수를 텍스트로 변환하여 넣을 수 있다.
	이후 greeting에 hidden 클래스를 없애 해당 요소가 보이도록 한다.*/

const savedUsername = localStorage.getItem(USERNAME_KEY);

/*	브라우저에는 localStorage가 있고, 이에 값을 저장할 수 있다.
	저장된 username의 키값를 불렀을 때 나오는 밸류값을 변수로 지정했다.*/

if (savedUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit",onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}

/*	savedUsername에 값이 없다면, loginForm의 클래스에서 hidden을 지워 이름 입력 창이 나타나게 한다.
	이후 값이 제출된다면 onLoginSubmit 함수를 실행한다.
	값이 없다면, paintGreetings 함수를 실행한다.*/
