<script>
   let name = 'world';
   let toggle = false;

   if(toggle){}
</script>
<button on:click={()=>{toggle = !toggle}}>
   Toggle
</button>

{#if toggle}
<h1>Hello {name}!</h1>
{/if}

  // if 문 사용 가능 : 토글 기능 O 
