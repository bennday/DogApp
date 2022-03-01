<template>
	<div id="dog_app">
		<div class="intro container">
			<div class="title">
				<h1>{{ msg }}</h1>
				<font-awesome-icon icon="fa-solid fa-dog" />
			</div>
			<div class="pullquote">
				<p>Select a maximum of two dog breeds to reveal up to ten images.</p>
			</div>
		</div>

		<div class="dog_list_container" v-for="(item, key) in allDogs" :key="key">
			<div class="dog">
				<div class="dog_name container">
					<input :data-breed="item.name" @change="checkBox($event)" type="checkbox" :id="item.name" :value="item.name" v-model="selectedItems" :disabled="selectedItems.length >= 2 && selectedItems.indexOf(item.name) == -1" />
					<label class="breed_name" :for="item.name">{{ item.name }}</label>
				</div>

				<div v-if="item.images.length > 0">
					<div class="dog_images container" v-if="numSelected > 1">
						<DogImages v-for="(url, key2) in item.images.slice(0, 5)" :key="key2" :url="url" :breed="item.name" />
					</div>
					<div class="dog_images container" v-else>
						<DogImages v-for="(url, key2) in item.images" :key="key2" :url="url" :breed="item.name" />
					</div>
				</div>

				<div class="dog_sub-breed container">
					<p>
						Number of
						<span class="breed_name">{{ item.name }}</span>
						sub-breeds: {{ item.subBreeds.length }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DogImages from "./DogImages.vue";

export default {
	name: "ListAllDogs",
	components: {
		DogImages,
	},
	props: {
		msg: String,
	},
	computed: {
		allDogs() {
			return this.$store.getters.allDogs;
		},
		selectedDogs() {
			return this.$store.getters.selectedDogs;
		},
		numSelected() {
			return this.$store.getters.getNumSelected;
		},
		selectedItems: {
			get() {
				return this.$store.getters.getSelectedItems;
			},
			set(value) {
				this.$store.commit("setSelectedItems", value);
			},
		},
	},
	methods: {
		checkBox: function (e) {
			const selected = {
				selected: e.target.checked,
				breed: e.target.getAttribute("data-breed"),
				numSelected: this.selectedItems.length,
			};
			this.$store.dispatch("getSelectedDog", selected);
		},
	},
	mounted() {
		this.$store.dispatch("getAllDogs");
	},
};
</script>

<style scoped lang="scss">

svg {
	width: 100px;
	height: 100px;
}
.container {
	padding: 0 60px;
}
input[disabled] {
	outline: 1px solid red;
	&:hover {
		cursor: not-allowed;
	}
}
#dog_app {
	.intro {
		margin-bottom: 60px;
		padding-top: 30px;
		.title {
			display: flex;
			align-items: center;
			h1 {
				text-align: left;
				font-size: 90px;
				margin: 0;
			}
		}
		.pullquote {
			border-left: 10px solid rgb(41, 41, 41);
			padding-left: 20px;
			max-width: 500px;
			font-size: 20px;
			font-style: italic;
		}
	}
	.dog_list_container {
		.dog {
			margin-bottom: 30px;
			.breed_name {
				text-transform: capitalize;
			}
			.dog_name {
				padding: 0 60px;
				display: flex;
				align-items: center;
				justify-content: center;
				input {
					font-size: 60px;
					width: 20px;
					height: 20px;
				}
				label {
					margin-left: 10px;
					font-size: 30px;
				}
			}
			.dog_sub-breed {
				background-color: rgb(219, 219, 219);
				padding: 15px 60px;
				font-style: italic;
				text-align: center;
			}
			.dog_images {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-wrap: wrap;
				padding: 15px 60px;
			}
		}
	}
}
</style>
