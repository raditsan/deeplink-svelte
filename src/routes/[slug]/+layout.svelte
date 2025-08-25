<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link
		href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
		rel="stylesheet"
	/>
	<style>
      body {
          font-family: "Nunito", sans-serif;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          padding: 0;
          text-align: center;
      }

      .container {
          padding: 20px;
      }

      .image-container {
          margin-bottom: 20px;
      }

      .image-container img {
          width: 204px;
          height: 204px;
      }

      h1 {
          color: #333;
          margin: 0;
          font-size: 24px;
      }

      p {
          color: #666;
          margin: 10px 0 20px;
          font-size: 16px;
      }

      .button-link {
          display: inline-block;
          background-color: #004D43;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          font-size: 18px;
          text-decoration: none;
          transition: background-color 0.3s ease;
      }

      .button-link:hover {
          background-color: #00695c;
      }
	</style>
</svelte:head>

<div class="container">
	{@render children?.()}
</div>

