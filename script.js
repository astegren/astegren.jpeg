// Photo data - Add your photos here!
const photos = [
    // Example structure - modify with your actual photos:
    // {
    //     id: 1,
    //     image: "images/photo1.jpg",
    //     title: "Photo Title",
    //     description: "Brief description of the photo",
    //     category: "football"
    // },
];

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', function() {
    renderGallery('all');
    setupCategoryButtons();
});

// Render gallery items
function renderGallery(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    // Filter photos by category
    const filteredPhotos = category === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === category);

    if (filteredPhotos.length === 0) {
        gallery.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #999;">No photos in this category yet. Add some photos to get started!</p>';
        return;
    }

    // Create gallery items
    filteredPhotos.forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${photo.image}" alt="${photo.title}" loading="lazy">
            <div class="photo-info">
                <h3>${photo.title}</h3>
                <p>${photo.description}</p>
            </div>
        `;
        gallery.appendChild(item);
    });
}

// Setup category button filters
function setupCategoryButtons() {
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Render gallery with selected category
            const category = this.getAttribute('data-category');
            renderGallery(category);
        });
    });
}

// Function to add new photos (you can call this from browser console)
function addPhoto(id, image, title, description, category) {
    const newPhoto = {
        id: id,
        image: image,
        title: title,
        description: description,
        category: category
    };
    photos.push(newPhoto);
    renderGallery('all');
    console.log('Photo added! Total photos:', photos.length);
}

// Example: You can add photos like this:
// addPhoto(1, 'images/photo1.jpg', 'Fast Break', 'Basketball action shot', 'basketball');
// addPhoto(2, 'images/photo2.jpg', 'Goal!', 'Soccer player scoring', 'soccer');
