<script lang="ts">
	let { data } = $props();
</script>

<div class="container">
	<div class="image-container">
		<img src={data.post.illustration} alt={data.post.title} />
	</div>
	<h1>{data.post.title}</h1>
	<p>{data.post.description}</p>

	<a href={data.deeplinkUrl} class="button-link">Buka Aplikasi Tring!</a>
</div>