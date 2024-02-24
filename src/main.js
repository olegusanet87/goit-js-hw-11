'use strict';
import { searchImages } from './js/pixabay-api.js';
import { displayImages, clearGallery, displayErrorMessage } from './js/render-functions.js';

document.getElementById('search-form').addEventListener('submit', function (event) {
	event.preventDefault();

	const searchTerm = document.getElementById('search-input').value.trim();

	if (searchTerm === '') {
		displayErrorMessage('Please enter a search term.');
		return;
	}

	clearGallery(); // Очищаємо галерею перед новим пошуком

	searchImages(searchTerm)
		.then(images => {
			if (images.length === 0) {
				displayErrorMessage('Sorry, there are no images matching your search query. Please try again.');
				return;
			}
			displayImages(images);
		})
		.catch(error => {
			console.error('Error fetching data:', error);
			displayErrorMessage('An error occurred while fetching data. Please try again later.');
		});
});
