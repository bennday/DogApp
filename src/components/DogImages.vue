<template>
	<div class="image_container" v-on:click="removeImage(url,breed)" v-bind:style="{ backgroundImage: 'url(' + url + ')' }"></div>
</template>

<script>
export default {
	name: "DogImages",
	props: {
		url: String,
		breed: String,
	},
	methods: {
		removeImage: function (url,breed) {
			const payload = {
				url: url,
				breed: breed
			}
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
		&::after{
				opacity: 0;
				content: "X";
				display: block;
				position: absolute;
				top: 0px;
				left: 0px;
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: bold;
				font-size: 80px;
				color: #fff;
				background-color: rgba(#000,0.7);
				transition: 0.3s;
		}
		&:hover{
			cursor: pointer;
			&::after{
				opacity: 1;


			}
		}
	}

</style>
