<template>
	<div id="dogApp">
		<h1>{{ msg }}</h1>


		<div v-for="(item,key) in allDogs" :key="key">
			<div class="dog">
				<div class="dog_name">

					<input :data-breed="item.name" @change="checkBox($event)" type="checkbox" :id="item.name" :value="item.name" v-model="selectedItems" :disabled="selectedItems.length >= 2 && selectedItems.indexOf(item.name) == -1" />
					<label :for="item.name">{{ item.name }}</label>
				</div>
				<div class="dog_sub-breed">
					<p>Number of sub-breeds: {{ item.subBreeds.length }}</p>
				</div>


        <div v-if="item.images.length > 0">
          <div class="dog_images"  v-if="numSelected > 1">
          <DogImages v-for="(url,key2) in item.images.slice(0,5)" :key="key2" :url="url" :breed="item.name" />
          </div>
          <div class="dog_images"  v-else>
          <DogImages v-for="(url,key2) in item.images" :key="key2" :url="url" :breed="item.name" />
          </div>
        </div>

				<hr />
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
    selectedItems:{
      get () {
      return this.$store.getters.getSelectedItems;
    },
    set (value) {
      this.$store.commit('setSelectedItems', value)
    }
    }
	},
	methods: {
		checkBox: function (e) {
      const selected = {
        selected: e.target.checked,
        breed: e.target.getAttribute('data-breed'),
        numSelected: this.selectedItems.length
      }
			this.$store.dispatch("getSelectedDog", selected);
		},
	},
	mounted() {
		this.$store.dispatch("getAllDogs");
	},
};
</script>

<style scoped lang="scss">

h1{
  text-align: left;
  font-size: 90px;
}

.dog_name{
  display: flex;
  align-items: center;
    input{
    font-size: 60px;
    width: 20px;
    height: 20px;
  }
  label{
    margin-left: 10px;
    font-size: 30px;
      text-transform: capitalize;

  }

}
.dog_sub-breed{
  display: flex;
}
.dog_images{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
input[disabled]{
  outline:1px solid red; // or whatever
  &:hover{
    cursor: not-allowed;
  }
}
</style>
