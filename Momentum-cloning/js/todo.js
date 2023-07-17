const toDoForm =document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-form input");
const toDoList =document.querySelector(".todo-list");
/*	js에서 html의 요소들을 활용하기 위해 querySelector를 통해 정의했다.
	이때 querySelector를 통해 클래스를 정의할 때 선택자를 빼먹으면 오류가 발생하니 주의할 것.*/

const TODOS_KEY = "todos";

let toDos = [];
/*	newTodo로 들어오는 텍스트를 array의 형태로 저장하기 위해 둠
	const를 통해 toDos를 정의하면 localStorage에 저장한 input.value들이 생성될 때마다 빈 array에 저장된다.
	이를 방지하기 위해 변경이 가능한 let으로 toDos를 정의하고, 기존의 toDos를 새 toDos에 push한다. */

function saveToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
/*	localStorage에 todos를 저장하는 함수. 
	toDos 배열을 JSON 배열로 바꿔 localStorage에 array 형태로 저장할 수 있게 한다.*/

function deleteToDo(event) {
	const li=event.target.parentElement;
	li.remove();
	toDos = toDos.filter( (toDo) =>toDo.id !== parseInt(li.id) );	
	saveToDos();
}
/*	단순히 button을 눌러서 생성된 li를 지우면 모든 li가 지워진다.
	버튼을 누른 li 안의 span을 지우기 위해서는 li의 족보를 따져 누른 button의 상위 요소를 찾아야 한다.
	event 객체는 이벤트가 발생한 요소와 관련된 정보를 제공한다.
	이를 통해 어떤 버튼이 클릭되었는지 알 수 있다.
	target.parentElement를 통해 버튼의 상위 요소에 해당하는 li를 찾은 뒤 해당 요소를 지우도록 했다.
	
	이후 localStorage에 들어간 toDos를 지우기 위해 filter 함수를 사용하여 리스트를 갱신한다.
	filter 함수는 배열의 값 갯수만큼 작동하는 함수로, 조건을 걸었을 때 false가 반환되는 요소를 제외하고 새 리스트를 만드는 함수이다.
	deleteToDo가 작동할 때 해당 값의 id를 확인하고 해당 값의 id와 일치하지 않는 함수만 true를 반환하게 한다.
	따라서 id가 일치하는 값을 제외하고 배열이 재생성된다.
	
	다만 이 때 toDo의 id는 int지만 li의 id는 string이다. 
	localStorage에 toDos를 저장하기 위해 JSON.stringify를 통해 배열을 모두 string으로 바꿨기 때문이다.
	따라서 li.id를 int로 바꿔 비교해야 localStorage의 배열을 지울 수 있다.*/

function paintToDo(newTodo) {
	const li = document.createElement("li");
	const span = document.createElement("span");
	const button = document.createElement("button");
	li.id = newTodo.id;
	button.innerText="✔";
	li.appendChild(span);
	li.appendChild(button);
	span.innerText=newTodo.text;
	toDoList.appendChild(li);
	button.addEventListener("click", deleteToDo );
}
/*	html의 ul 안에 li를 만들고, li 안에 span을 만들어 리스트를 만드는 함수이다.
	handleToDoSubmit에서 사용된 매개변수를 재사용하는 것으로 보일 수 있으나, 해당 함수의 newTodo와 이 함수의 newTodo는 별개의 매개변수이다.
	html에 li라 정의된 "li"를 만들고, 이후에 span이라 정의된 "span"을 만든다.
	변수명은 li가 아닌 어느 것을 해도 좋으나, createElement("") 안에 있는 요소는 html의 요소 중 하나를 적어야 한다.
	이후 li 안에 span을 추가하고, span 안에 입력받은 newTodo를 적는다.
	해당 li는 toDoList 안에 추가한다.
	
	newTodoObj를 받음에 따라 paintToDo는 텍스트가 아닌 오브젝트를 받는다.
	따라서 span에 추가되는 것은 newTodo.text가 되어야 한다.
	오브젝트로 받는 parameter를 바꾼 이유는 list에 id를 부여하기 위함이다. 
	따라서 li.id=newTodo.id로 정의한다.*/

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo=toDoInput.value;
	toDoInput.value="";
	const newTodoObj = {
		text:newTodo,
		id:Date.now(),
	};
	toDos.push(newTodoObj);
	paintToDo(newTodoObj);
	saveToDos();
}
/*	submit이 발생할 때 브라우저에서는 새로고침을 한다.
	이를 막기 위해 preventDefault를 하고, toDoInput.value의 값을 변수로 정의한다.
	새로고침이 발생하기 않아 input칸이 비워지지 않기 때문에, js를 통해 toDoInput.value의 칸을 ""로 만든다.
	위에서 정의된 toDos list에 newTodo를 올리고, saveToDos 함수를 작동한다.
	이후 paintToDo 함수를 작동한다.
	
	localStorage에서 value들을 삭제할 때 값들에 id를 주고 삭제하면 더 정확하게 원하는 값만 삭제할 수 있다.
	그러기 위해서 단순히 toDoList에 텍스트만 올리는 것이 아닌, object를 올려 해당 값과 id를 얻게 만들었다.
	newTodoObj라는 변수는 newTodo와 id로 이루어져 있다. 이를 toDos와 paintToDo에 올려 해당 값을 받게 한다.*/

toDoForm.addEventListener("submit", handleToDoSubmit);
/*	toDoForm에서 submit이 발생하면 handleToDoSubmit 함수를 작동시킨다.*/

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !==null) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos=parsedToDos;
	parsedToDos.forEach(paintToDo);
}
/*	일반적으로 웹페이지를 새로고침하면 브라우저는 해당 페이지를 처음 로드한 상태로 초기화한다.
	따라서 js로 인해 생성된 모든 html 요소들도 사라진다.
	그 상태에서 다시 todo-list를 생성하고자 input을 입력한다면, 기존의 toDos 배열이 초기화되고 새로 입력된다.
	이는 js에서 매번 toDos를 빈 배열로 정의했기 때문이다. 
	따라서 const가 아닌 변경이 가능한 let으로 toDos를 정의하고, 새로고침 시 toDos 안에 값들이 남아있다면 해당 값을 parsedToDos를 통해 불러온다.
	이후 toDos 안의 값들을 paintToDo를 통해 화면에 출력하여 새로고침 후에도 요소들을 유지할 수 있다.
	
	for each 함수를 통해 각 배열의 요소마다 함수를 실행할 수 있다.*/

