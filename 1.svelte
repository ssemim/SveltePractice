//깃 설치 필수 + node.js 설치 후 npm 버전 체크 
//npx degit sveltejs/template svelte-app
//cd svelte-app


<script>
   let name = 'world';
   let age = 25

function assign(){

name = 'Heropy'
   age =36
   
}
   
</script>

<img src="" alt={name} /> 
<input type = "text" bind:value="{name}" />
<h1>Hello {name}!</h1>
<h2 class={age<85 ? 'active' : ''}>{age}</h2>

<button on:click={assign}>Assign</button>


<style>

h1 {
   color : red;
}
.active{
   color : blue;
}
   
</style>
