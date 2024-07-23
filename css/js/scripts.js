document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextItem() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextItem, 5000); // Change slide every 5 seconds

    // Fetch personalized recommendations
    async function fetchPersonalizedContent() {
        try {
            const response = await fetch('/recommendations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: 1 }) // Replace with actual user data
            });
            const recommendations = await response.json();
            displayPersonalizedContent(recommendations);
        } catch (error) {
            console.error('Error fetching personalized content:', error);
        }
    }

    function displayPersonalizedContent(articles) {
        const feedGrid = document.getElementById('personalized-feed-grid');
        feedGrid.innerHTML = ''; // Clear existing content

        articles.forEach(article => {
            const articleElement = document.createElement('article');
            articleElement.className = 'feed-item';

            articleElement.innerHTML = `
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.summary}</p>
                <a href="#" class="read-more">Read More</a>
            `;

            feedGrid.appendChild(articleElement);
        });
    }

    fetchPersonalizedContent();
});
