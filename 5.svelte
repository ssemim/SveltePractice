<script>

let text = ''
	
</script>

<h1>
{text}
</h1>

<input type="text" 
	value={text}
<!--  양방향 데이터 바인딩 -->
		on:input={(e) =>{text = e.target.value}} />

<input type="text"
	bind:value={text}/> 

<!--위에거나 이거나 똑같음 --> 

	<button on:click={()=>{text='Heropy'}}>
		Click
	</button>
