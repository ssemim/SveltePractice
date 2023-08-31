<script>
import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte'

let name = 'Something...'
let h1

function moreDot(){

name += '.'

}

// 컴포넌트 렌더링 전에 동작하는 부분이기 떄문에
//온마운트 콜 백 함수 뒤에 h1을 찾게 만들어줘야함 
beforeUpdate(()=>{
console.log('Before update!')
console.log(h1 && h1.innerText)
})

afterUpdate(()=>{
console.log('After update!')
})

onMount(()=> {
 console.log('Mounted!')
 h1 = document.querySelector('h1')

})
onDestroy(()=>{
    
console.log('Before destory~')


})

</script>

<h1 on:click={moreDot}>{name}</h1>
