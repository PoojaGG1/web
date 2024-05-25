document.getElementById('search-input').addEventListener('input', function() {
    // Get the search term from the input field
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    // Get the container to display the results
    const resultsContainer = document.getElementById('results');
    
    // List of items to search through
    const items = [
        'apple',
        'banana',
        'cherry',
        'date',
        'elderberry',
        'fig',
        'grape'
    ];

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Filter items based on search term
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm));

    // Display results
    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-result';
            div.textContent = item;
            resultsContainer.appendChild(div);
        });
    } else {
        resultsContainer.textContent = 'No results found';
    }
});
