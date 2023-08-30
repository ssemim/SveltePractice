
<script>
export let fruits
export let reverse
export let slice 
	
//Props
let computedFruits = []
let name = ''

if(reverse){
	computedFruits = [...fruits].reverse()
	name = 'reverse'
}	else if(slice){
// slice => '-2','0,3'
	//slice.split(',') => ['-2'만 있는 배열 : 쉼표가 없으니까], ['0','3' : 두 개 짜리 배열로 나뉨 쉼표 기준으로]
	
	computedFruits = fruits.slice(...slice.split(','))
	//name = 'slice' + slice 밑에껄로 쓰는게 더 깔끔하다 
	name = `slice ${slice}`
}else{

	computedFruits = fruits
}
</script>

<h2>
	Fruits {name}
</h2>

{#each computedFruits as fruit}
<li>{fruit}</li>
{/each}
