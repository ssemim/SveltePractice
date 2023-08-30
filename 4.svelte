<script>
	//import {onMount} from 'svelte'
	let name = 'world';
	let isRed = false;
	
//	onMount(()=>{
//		const box = document.querySelector('.box')
//	box.addEventListener('click',()=>{isRed =! isRed})
//	})

	function enter(){
		name = 'enter'
	}

	function leave(){

		name = 'leave'
	}

</script>

<h1>Hello {name}!</h1>
<div class = "box"
	style="background-color : {isRed ?  'red' : 'orange'};"
	on:click={()=>{isRed = ! isRed}}
on:mouseenter={enter}
on:mouseleave={leave}>BOX! </div>

//on directive (모든 이벤트 전부 작성 가능)
한 줄 따리 내부에 스벨트 내부에 핸들러만 갖다붙이면 된다. 

//모두 일부러 인라인으로 작성할 필요 없으니까 
//핸들러 대신 함수 이름을 명시해주면 js와 같은 방법으로 쓸 수 있음



<style>

	.box{

		width : 300px;
		height : 150px;
		background-color: orange;
		
	}
	
</style>
