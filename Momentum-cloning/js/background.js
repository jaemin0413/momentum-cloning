const haerin = document.createElement("img");
	haerin.src="https://user-images.githubusercontent.com/95339052/253743324-ec2d462c-7ead-4892-aee6-28934eac0ed9.jpg";

const minji = document.createElement("img");
	minji.src="https://user-images.githubusercontent.com/95339052/241748777-4147c0c2-dbcb-49c8-8332-a4f02e1e3e5b.jpg";

const hanni = document.createElement("img");
	hanni.src="https://user-images.githubusercontent.com/95339052/241748398-feccf82d-795b-472c-a6e3-8a6a9efed308.jpg";

const daniel = document.createElement("img");
	daniel.src="https://user-images.githubusercontent.com/95339052/241749190-4e2d8267-3215-4962-a0d8-cf6c2d64a464.jpg";

const hyein = document.createElement("img");
	hyein.src="https://user-images.githubusercontent.com/95339052/241749243-9054f0ef-e7ed-4e8a-b4b7-65173ed83b1e.jpg";
/* 	뉴진스 멤버들을 이미지로 정의하고, 이미지 소스를 연결했다.
	img.src로 등록하는 것이 아닌 변수명.src로 정의해야 해당 변수를 부를 때 이미지가 연동되어 나간다.*/

const images = [ haerin, minji, hanni, daniel, hyein ];
/*	랜덤으로 출력하고자 하는 변수들을 리스트에 넣었다.*/

const chosenImage =images[Math.floor(Math.random() * images.length)];
/*	리스트에 들어간 요소들은 0부터 n-1까지 셀 수 있다. 
	Math.random 함수를 통해 0과 1 사이의 일정한 수를 구하고, 리스트의 요소 갯수 n만큼 곱한다.
	그렇게 나온 값을 Math.floor를 통해 소숫점 아래로 모두 버려 결과적으로 0부터 n-1의 값까지 랜덤으로 출력한다.
	따라서 chosenImage는 images[0 ~ n-1] 중 하나의 값으로 랜덤하게 지정된다. */

const bgImage = document.createElement("img");
/*	html의 요소를 만드는 함수이다. js에서 html을 만드는 역할을 한다.
	이 함수를 통해 다양한 태그를 가진 요소들을 삽입할 수 있다.
	이번에는 img를 만들었다.*/

bgImage.src = chosenImage.src;
/*	bgImage는 단순히 이미지 요소를 참조하는 객체이다. 
	따라서 추가적인 코드를 통해 출력하고자 하는 이미지를 bgImage.src 속성에 할당해야 한다.
	chosenImage는 이미지를 나타내는 변수이고, 이미지 요소의 src 속성에 접근하기 위해 chosenImage.src를 사용해야 한다.
	만약 bgImage.src=chosenImage; 로 할당하면, src 속성에 이미지 url이 아닌 이미지 요소 자체인 chosenImage가 할당된다.
	만약 bgImage=chosenImage.src;로 할당하면 bgImage에 url이 직접 할당되지 않아 이미지가 나오지 않는다.*/
	
document.body.appendChild(bgImage);
/*	만든 요소를 html 안에 삽입하는 함수이다.*/