<script>
	import { writable} from 'svelte/store'
	
	import Todo from './Todo.svelte'
	
	let title = ''
	let todos = writable([])
	let id =0
	
	function createTodo(){

		if(!title.trim()){
			return
		}
		$todos.push({

			id,
			title
			
		})
		$todos = $todos 
		//할당을 통해 반응성을 유지해야하기 때문에, 자기 자신에게 자기 자신을 할당하는 모습을 많이 볼 수 있음
		//그래서 복사본이 할당되고 그런게 아니라 뭐 문제 될 거 하나도 없음 
		title=''
		id += 1
	}
	// if(e,key ==='Enter') {createTodo()}
	// e.key === 'Enter' ? createTodo() : undefined
	// e.key === 'Enter' && createTodo()
	//세개 다  똑같은데 마지막이 젤 짧음 굿 
</script>

<input bind:value={title} 
				type="text" 
	on:keydown={(e)=>{e.key === 'Enter' && createTodo()}}/>
<button on:click={createTodo}>
Create Todo
</button>

{#each $todos as todo}
<Todo {todos} {todo}/>
{/each}
