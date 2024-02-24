export function clearGallery() {
	const gallery = document.getElementById('gallery');
	gallery.innerHTML = '';
}

export function displayImages(images) {
	clearGallery();

	const gallery = document.querySelector('.gallery');
	const fragment = document.createDocumentFragment();

	images.forEach(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
		const galleryItem = document.createElement('li');
		galleryItem.classList.add('gallery-item');

		const galleryLink = document.createElement('a');
		galleryLink.classList.add('gallery-link');
		galleryLink.href = largeImageURL;

		const img = document.createElement('img');
		img.classList.add('gallery-image');
		img.src = webformatURL;
		img.dataset.source = largeImageURL;
		img.alt = tags;
		galleryLink.appendChild(img);
		galleryItem.appendChild(galleryLink);

		const infoContainer = document.createElement('div');
		infoContainer.classList.add('image-info');

		const likesInfo = document.createElement('span');
		likesInfo.classList.add('likes');
		likesInfo.textContent = `Likes: ${likes}`;
		infoContainer.appendChild(likesInfo);

		const viewsInfo = document.createElement('span');
		viewsInfo.classList.add('views');
		viewsInfo.textContent = `Views: ${views}`;
		infoContainer.appendChild(viewsInfo);

		const commentsInfo = document.createElement('span');
		commentsInfo.classList.add('comments');
		commentsInfo.textContent = `Comments: ${comments}`;
		infoContainer.appendChild(commentsInfo);

		const downloadsInfo = document.createElement('span');
		downloadsInfo.classList.add('downloads');
		downloadsInfo.textContent = `Downloads: ${downloads}`;
		infoContainer.appendChild(downloadsInfo);

		galleryItem.appendChild(infoContainer);

		fragment.appendChild(galleryItem);
	});

	gallery.appendChild(fragment);
}

function createImageCard(image) {
	const card = document.createElement('div');
	card.classList.add('card');

	const img = document.createElement('img');
	img.classList.add('card-img-top');
	img.src = image.webformatURL;
	img.alt = image.tags;

	const cardBody = document.createElement('div');
	cardBody.classList.add('card-body');

	const likes = document.createElement('p');
	likes.classList.add('card-text');
	likes.textContent = `Likes: ${image.likes}`;

	const views = document.createElement('p');
	views.classList.add('card-text');
	views.textContent = `Views: ${image.views}`;

	const comments = document.createElement('p');
	comments.classList.add('card-text');
	comments.textContent = `Comments: ${image.comments}`;

	const downloads = document.createElement('p');
	downloads.classList.add('card-text');
	downloads.textContent = `Downloads: ${image.downloads}`;

	cardBody.appendChild(likes);
	cardBody.appendChild(views);
	cardBody.appendChild(comments);
	cardBody.appendChild(downloads);

	card.appendChild(img);
	card.appendChild(cardBody);

	return card;
}






