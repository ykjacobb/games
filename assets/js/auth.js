(function() {
    // THIS SCRIPT CHECKS IF THE USER IS AUTHENTICATED
    // IF NOT, IT HIDES THE GAME AND REDIRECTS TO THE FAKE LOGIN
    
    const isAuthenticated = sessionStorage.getItem('sga_auth') === 'true';
    
    // Check if the current page is a game page
    const isGamePage = window.location.pathname.includes('-unblocked.html');
    const isAllGames = window.location.pathname.includes('all-games.html');
    const isCategory = window.location.pathname.includes('-games.html');

    if (isGamePage || isAllGames || isCategory) {
        if (!isAuthenticated) {
            // Immediately hide content to prevent flash
            const style = document.createElement('style');
            style.innerHTML = 'html { display: none !important; }';
            document.head.appendChild(style);
            
            // Redirect to the login page with a return URL
            // We use a relative path since all files are in the same folder
            const currentPath = window.location.pathname.split('/').pop() || 'all-games.html';
            window.location.href = 'login.html?redirect=' + encodeURIComponent(currentPath);
        }
    }
})();
