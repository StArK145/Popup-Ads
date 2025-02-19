// All popup ads
const ads = [
    document.getElementById('ad1'),
    document.getElementById('ad2'),
    document.getElementById('ad3')
];

// Close button functionality
document.querySelectorAll('.close-button').forEach(button => {
    button.addEventListener('click', function() {
        const adElement = this.closest('.popup-ad');
        adElement.style.opacity = 0;
        adElement.style.transform = 'translateY(10px)';
        adElement.style.transition = 'all 0.3s ease-out';
        
        setTimeout(() => {
            adElement.style.display = 'none';
            adElement.style.opacity = '';
            adElement.style.transform = '';
            adElement.style.transition = '';
            
            // Schedule next popup
            setTimeout(showRandomAd, 3000); // 8 seconds
        }, 300);
    });
});

// Function to show a random ad
function showRandomAd() {
    // Select random ad
    const randomAdIndex = Math.floor(Math.random() * ads.length);
    const adToShow = ads[randomAdIndex];
    
    // Position randomly on screen with better margins
    const maxX = window.innerWidth - 340;
    const maxY = window.innerHeight - 350;
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));
    
    adToShow.style.left = randomX + 'px';
    adToShow.style.top = randomY + 'px';
    
    // Display the ad
    adToShow.style.display = 'block';
}

// Show first ad after page load
window.addEventListener('load', function() {
    setTimeout(showRandomAd, 1500); // Show first ad after 1.5 seconds
});