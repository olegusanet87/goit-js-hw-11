export function clearGallery() {
	const gallery = document.getElementById('gallery');
	gallery.innerHTML = '';
}

export function displayImages(images) {
	clearGallery();

	const gallery = document.getElementById('gallery');
	images.forEach(image => {
		const card = createImageCard(image);
		gallery.appendChild(card);
	});
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
Тепер в файлі main.js ви можете використовувати ці функції для відображення зображень після отримання їх з сервера.Наприклад:

javascript
Copy code







const gallery = document.querySelector('.gallery');
console.log(gallery);

const fragment = document.createDocumentFragment();

images.forEach(({ preview: smallImage, original: largeImage, description: imageAlt }) => {
	const galleryItem = document.createElement('li');
	galleryItem.classList.add('gallery-item');

	const galleryLink = document.createElement('a');
	galleryLink.classList.add('gallery-link');
	galleryLink.href = largeImage;

	const img = document.createElement('img');
	img.classList.add('gallery-image');
	img.src = smallImage;
	img.dataset.source = largeImage;
	img.alt = imageAlt;
	galleryLink.appendChild(img);
	galleryItem.appendChild(galleryLink);
	fragment.appendChild(galleryItem);
});

gallery.appendChild(fragment);