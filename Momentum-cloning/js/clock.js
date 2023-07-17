const clock = document.querySelector("h2.clock");
/*	html의 clock 부분을 정의*/

function getClock() {
    const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes = String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
/*	date= new date()로 정의하여 date object를 생성했다. 
	이 함수는 사용 당시의 현재 날짜와 시간을 알려준다. 
	해당 함수를 통해 시간을 불러오면 01초가 1초로 표기된다. 
	이를 해결하기 위해 수를 string으로 바꾼 뒤 padStart를 사용하여 두 글자가 되지 않을 시 앞에 0이 붙게 한다.
	*/

getClock();
setInterval(getClock, 1000);
/*	특정 코드를 일정 간격으로 반복 실행할 때 setInterval 함수를 사용함.
	이 경우 1000ms 단위로 getClock 함수를 실행한다.
	다만 웹페이지가 켜지고 1000ms 뒤에 getClock이 시행되기에 첫 1초간은 시간이 나타나지 않는다.
	이를 해결하기 위해 그냥 getClock을 따로 적어 웹페이지가 보임과 동시에 시간이 보이도록 했다.*/
