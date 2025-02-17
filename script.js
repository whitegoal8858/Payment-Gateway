window.onload = function() {
    // Hide the loading screen and show the content after page loads
    setTimeout(function() {
        // Hide the loading screen with a fade-out effect
        document.getElementById('loading').style.opacity = '0';
        document.getElementById('loading').style.transition = 'opacity 1s ease-out';
        
        // After the loading screen fades out, hide it
        setTimeout(function() {
            document.getElementById('loading').style.display = 'none';
            // Add a class to fade in the main content
            document.getElementById('content').classList.add('fadeInContent');
        }, 1000); // Wait for the fade-out effect to complete before hiding
    }, 3000); // Adjust the time (in ms) for how long the loading screen should be visible
};