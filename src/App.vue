<template>
	<div id="app">
		<ListAllDogs msg="DogApp" />
	</div>
</template>

<script>
import ListAllDogs from "./components/ListAllDogs.vue";

export default {
	name: "App",
	components: {
		ListAllDogs,
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	margin: 0 auto;
	max-width: 1200px;
	background: #efefef;
	border-radius: 30px;
	filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
}
</style>
