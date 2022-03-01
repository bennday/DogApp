<template>
	<div class="image_container" v-on:click="removeImage(url, breed)" v-bind:style="{ backgroundImage: 'url(' + url + ')' }"></div>
</template>

<script>
export default {
	name: "DogImages",
	props: {
		url: String,
		breed: String,
	},
	methods: {
		removeImage: function (url, breed) {
			const payload = {
				url: url,
				breed: breed,
			};
			this.$store.dispatch("removeSelectedImage", payload);
		},
	},
};
</script>

<style scoped lang="scss">
.image_container {
	position: relative;
	width: 180px;
	height: 180px;
	border-radius: 50%;
	margin: 5px;
	position: relative;
	background-size: cover;
	background-position: center center;
	overflow: hidden;
	filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.5));

	&::after {
		opacity: 0;
		content: "x";
		position: absolute;
		display: flex;
		justify-content: center;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		font-size: 150px;
		line-height: 1;

		padding: 0;
		margin: 0;
		color: #fff;
		background-color: rgba(#000, 0.7);
		transition: 0.3s;
	}
	&:hover {
		cursor: pointer;
		&::after {
			opacity: 1;
		}
	}
}
</style>
