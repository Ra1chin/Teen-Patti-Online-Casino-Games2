// Toggle the mobile menu visibility
document.getElementById('toggle-bar').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
});

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");
    
    // Show the current slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
}

// Show the current slide initially
showSlides();

// Function to change the slides when clicking next/prev buttons
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    showSlides();
}

// Auto-change slides every 5 seconds (slower transition)
setInterval(() => plusSlides(1), 10000); // Change every 5 seconds



// Game Data
const games = [
    { img: "DragonTiger.webp", link: "https://teenpattistars.io/games/dragon-tiger/", name: "Dragon Tiger" },
    { img: "Andar Bahar.webp", link: "https://teenpattistars.io/games/andar-bahar/", name: "Andar Bahar", },
    { img: "Mines.webp", link: "https://teenpattistars.io/games/1-best-teen-patti-mines-game-india/", name: "Mines" },
    { img: "BlackReds.webp", link: "https://teenpattistars.io/games/the-black-reds-2/", name: "The Black Reds" },
    { img: "IndianRummy.webp", link: "https://teenpattistars.io/games/indian-rummy-game/", name: "Indian Rummy" },
    { img: "Roulette.webp", link: "https://teenpattistars.io/games/roulette/", name: "Roulette" },
    { img: "Omaha-Poker.webp", link: "https://teenpattistars.io/games/omaha-poker-variants/", name: "Omaha Poker" },
    { img: "LightningBaccarat.webp", link: "https://teenpattistars.io/games/lightning-baccarat/", name: "Lightning Baccarat" },
    { img: "LightningRoulette.webp", link: "https://teenpattistars.io/games/lightning-roulette-live/", name: "Lightning Roulette" },
    { img: "Lightningdice.webp", link: "https://teenpattistars.io/games/lightning-dice/", name: "Lightning Dice"},
    { img: "supersicbo.webp", link: "https://teenpattistars.io/games/super-sic-bo-teen-patti-stars/", name: "Super Sic bo" },
    { img: "texascowboy.webp", link: "https://teenpattistars.io/games/texas-cowboy-2/", name: "Texas Cowboy" },
    { img: "Footballdice.webp", link: "https://teenpattistars.io/games/football-studio/", name: "Football Studio" },
    { img: "Crazytime.webp", link: "https://teenpattistars.io/games/crazy-time/", name: "Crazy Time" },
    { img: "Bacbo.webp", link: "https://teenpattistars.io/games/bac-bo/", name: "Bac bo" },
    { img: "Dreamcatcher.webp", link: "https://teenpattistars.io/games/dream-catcher/", name: "Dream Catcher", },
    { img: "crash.webp", link: "https://teenpattistars.io/games/experience-exciting-thrills-with-positive-crash-gambling/", name: "Crash" },
    { img: "DeadorAlive.webp", link: "https://teenpattistars.io/games/dead-or-alive-saloon/", name: "Dead or Alive" },

];

// Pagination Setup
let currentPage = 1;
const gamesPerPage = 6;

// Function to display games based on page number
function displayGames() {
    const startIndex = (currentPage - 1) * gamesPerPage;
    const endIndex = startIndex + gamesPerPage;
    const gameList = document.getElementById("game-list");

    gameList.innerHTML = ""; // Clear previous games

    games.slice(startIndex, endIndex).forEach(game => {
        const gameItem = document.createElement("div");
        gameItem.classList.add("game-item");
        gameItem.innerHTML = `
            <a href="${game.link}">
                <img src="${game.img}" alt="${game.name}">
            </a>
            <h3>${game.name}</h3>
          
        `;
        gameList.appendChild(gameItem);
    });

    // Update Page Number
    document.getElementById("pageNumber").innerText = currentPage;

    // Disable buttons if at first/last page
    document.getElementById("prevBtn").disabled = currentPage === 1;
    document.getElementById("nextBtn").disabled = currentPage === Math.ceil(games.length / gamesPerPage);
}

// Function to change pages
function changePage(step) {
    if ((currentPage + step) >= 1 && (currentPage + step) <= Math.ceil(games.length / gamesPerPage)) {
        currentPage += step;
        displayGames();
    }
}

// Initial Load
displayGames();
