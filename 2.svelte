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

  //bind:value="{변수}" 는 쌍방향 변수
  //쌍방향 변수 : 한 쪽이 변화하면 같은 변수를 할당한 놈들도 다같이 변화함 
