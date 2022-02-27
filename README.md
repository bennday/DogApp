# DogApp


# Project description

- Use https://dog.ceo/dog-api/documentation/ API
- Write a vuejs App with below features:
	- List all breeds with checkbox ( displaying number of sub-breeds under every top level breed)
	- Max 2 breeds can be selected
	- Show 10 images from selected breed
	- If two breeds are selected show 10 images in total (5 from each breed)
	- Ability to remove images, once all images of a breed removed that breed should be unselected in list
	- Images of breed & list of all breeds could be child components of main app
	- Write service to communicate to external API, components to call service to get data.
	- Make sure that both - list ( to show all breeds ) and images of breed are child components of main app
	- No direct communication between list component and image component they should communicate through parent using events.





## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
