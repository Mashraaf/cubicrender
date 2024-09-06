// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and gallery items
    const filterButtons = document.querySelectorAll('.actions .button');
    const galleryItems = document.querySelectorAll('.gallery .filter-item');

    // Add click event listener to each button
    filterButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the filter category from the button's data-filter attribute
            const filter = button.getAttribute('data-filter');

            // Loop through each gallery item
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');

                // If filter is 'all', show all items, otherwise filter by category
                if (filter === 'all' || filter === category) {
                    item.style.display = 'flex'; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });

            // Update button styles (optional: highlighting the active filter)
            filterButtons.forEach(btn => btn.classList.remove('primary'));
            button.classList.add('primary');
        });
    });
});
