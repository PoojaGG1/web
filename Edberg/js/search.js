document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results');

    // Store items with proper capitalization
    const items = [
        { name: 'AI & ML course', url: '/courses/aimlcourse.html' },
        { name: 'cyber security & ethical hacking certification course', url: '/courses/cyber.html' },
        { name: 'data analytics certification course', url: '/courses/DataAnalytics.html' },
        { name: 'certification course in data science & AI', url: '/courses/datasciencecourse.html' },
        { name: 'data structures & algorithms course', url: '/courses/datastructures.html' },
        { name: 'DevOps & cloud cloud computing certification course', url: '/courses/devops.html' },
        { name: 'digital marketing & communication certification course', url: '/courses/digitalmarketing.html' },
        { name: 'full stack developmennt training course', url: '/courses/fullstackdev.html' },
        { name: 'HTML, CSS & JavaScript course', url: '/courses/HTMLcssJS.html' },
        { name: 'java course', url: '/courses/java.html' },
        { name: 'MySQL course', url: '/courses/mysql.html' },
        { name: 'python course', url: '/courses/python.html' },
        { name: 'Salesforce certification course', url: '/courses/SalesCourse.html' },
        { name: 'SQL developer & SQL DBA training program', url: '/courses/SQLDev.html' },
        { name: 'UI & UX design course', url: '/courses/UIUX.html' },
    ];

    // Function to update the search results
    function updateResults() {
        const searchTerm = searchInput.value.toLowerCase();
        resultsContainer.innerHTML = '';
        if (searchTerm) {
            const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));
            if (filteredItems.length > 0) {
                filteredItems.forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'search-result';
                    div.textContent = item.name;  // Use the name with proper capitalization
                    div.addEventListener('click', function() {
                        window.location.href = item.url;
                    });
                    resultsContainer.appendChild(div);
                });
            } else {
                resultsContainer.textContent = 'No results found';
            }
            resultsContainer.style.display = 'block'; // Show results container
        } else {
            resultsContainer.style.display = 'none'; // Hide results container if no search term
        }
    }

    // Event listener to update results when typing
    searchInput.addEventListener('input', function() {
        updateResults();
    });

    // Event listener to hide results when clicking outside search box
    document.addEventListener('click', function(event) {
        if (!event.target.matches('.search-box') && !event.target.closest('#results')) {
            resultsContainer.style.display = 'none';
        }
    });

    // Prevent closing the results container when clicking inside it
    resultsContainer.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
