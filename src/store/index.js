import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: function () {
		return {
			allDogs: [],
			selectedDogs: [],
			numberSelected: null,
			selectedItems: [],
		};
	},
	getters: {
		allDogs(state) {
			return state.allDogs;
		},
		selectedDogs(state) {
			return state.selectedDogs;
		},
		getNumSelected(state) {
			return state.numberSelected;
		},
		getSelectedItems(state) {
			return state.selectedItems;
		},
	},
	mutations: {
		setAllDogs(state, payload) {
			state.allDogs = payload;
		},
		setSelectedItems(state, payload) {
			state.selectedItems = payload;
		},
		setNumberSelected(state, payload) {
			state.numberSelected = payload;
		},
		setSelectedDog(state, payload) {
			for (const key in state.allDogs) {
				if (state.allDogs[key].name == payload.breed) {
					if (payload.selected === true) {
						state.allDogs[key].images = payload.images;
					} else {
						state.allDogs[key].images = [];
					}
				}
			}
		},
		removeSelectedImage(state, payload) {
			for (const key in state.allDogs) {
				if (state.allDogs[key].name == payload.breed) {
					const url = payload.url;
					state.allDogs[key].images.splice(state.allDogs[key].images.indexOf(url), 1);
          if(state.allDogs[key].images.length < 1){
            state.selectedItems.splice(state.selectedItems.indexOf(payload.breed), 1)
          }
				}
			}
		},
	},
	actions: {
		getAllDogs(context) {
			const allDogsEndpoint = "https://dog.ceo/api/breeds/list/all";
			fetch(allDogsEndpoint)
				.then((response) => response.json())
				.then(function (data) {
					const allDogs = [];
					const arr = data.message;
					for (const key in arr) {
						const item = {
							id: key,
							name: key,
							subBreeds: arr[key],
							images: [],
						};
						allDogs.push(item);
					}
					context.commit("setAllDogs", allDogs);
				});
		},
		getSelectedDog(context, payload) {
			const breedImagesEndpoint = "https://dog.ceo/api/breed/" + payload.breed + "/images";
			fetch(breedImagesEndpoint)
				.then((response) => response.json())
				.then(function (data) {
					const numberOfImages = 10;
					const imgPayload = {
						selected: payload.selected,
						breed: payload.breed,
						images: data.message.slice(0, numberOfImages),
					};
					context.commit("setSelectedDog", imgPayload);
					context.commit("setNumberSelected", payload.numSelected);
				});
		},
		removeSelectedImage(context, payload) {
			context.commit("removeSelectedImage", payload);
		},
	},
});
