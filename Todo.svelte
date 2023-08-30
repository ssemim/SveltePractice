<script>
	
export let todo
export let todos
let isEdit = false // 에디트 모드니? 기본값 ㄴㄴ
let title = ''	


	
function onEdit(){
	isEdit = true
	title = todo.title
}

	function offEdit(){
isEdit = false
}
function updateTodo(){
	todo.title = title
	offEdit()
	
}	
function deleteTodo(){
	$todos = $todos.filter(t => t.id !== todo.id)
	console.log(todos)
	
}	
	
</script>

{#if isEdit} 
<div><input bind:value={title} type = "text"/>
<button on:click={updateTodo}>OK</button>
<button on:click={offEdit}>Cancle</button>
</div>
{:else}

<div>
	{todo.title}

	<button on:click={onEdit}>
	Edit</button>
	<button on:click={deleteTodo}>
		Delete
	</button>
</div>
{/if}
