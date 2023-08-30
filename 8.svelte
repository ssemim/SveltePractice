<script>
import { storeName } from './store.js'
	import Parent from './Parent.svelte' 
	let name = 'world';
	$storeName = name

	console.log(storeName);
	console.log($storeName);
</script>

<h1>Hello {name}!</h1>
<Parent/>


<!--
자식컴포넌트로 데이터를 전달해주려면
Props의 이름으로 데이터를 계속 내려서 준다
Props 말고 자식 말고 다른 컴포넌트로 데이터를 전달 할 때는
Store라는 것을 쓸 수 있는데
쓰기 가능한 형태의 함수를 가지고 와서
그 함수를 초기값과 함께 실행하게 되면
우리가 어디서든 읽고 쓸 수 있는
store 객체가 반환되게 되고
거기에 내가 원하는 데이터를 태워주면 된다
스토어 내부에서는 읽기전용이랑 데이터만 뽑아내는 기능도 따로 있음

+) 스토어 객체 앞에 $ 붙이면 스토어 객체의 데이터라는 뜻
그래서 새로운 변수 이름을 지을 때, $붙이면 에러남
(프레임 워크의 예약어임)

스벨트는 스토어를 내장시켜놨음
신기하지
라이브러리 설치할 필요 없음 짱 -->
