<script>

	import Fruits from './Fruits.svelte'
	let fruits = ['Apple','Banana','Cherry','Orange','Mango']
	
</script>

<Fruits fruits={fruits}/>

<Fruits {fruits}/>

<Fruits {fruits} reverse ={true}/>

<Fruits {fruits} reverse/>

<Fruits {fruits} slice="-2" />

<Fruits {fruits} slice="0, 3" />

//f라는 이름의 props라고 함 (걍 props도 이름 똑같이해도 댐)
//속성 이름과 데이터 이름이 같을 경우 속성 이름을 생략가능

//반복되는 컴포넌트 출력시, 재활용 열심히 하라고 만든게


