document.addEventListener("DOMContentLoaded", function () {

    if (document.title.includes("SignUp")) {
        const returnButton = document.getElementById('return-button');
        const submitButton = document.getElementById('submit-button');

        returnButton.addEventListener('click', function () {
            window.location.href = 'first.html';
        });

        submitButton.addEventListener('click', function () {
            window.location.href = 'signin.html';
        });
    }
   
    const movieSets = document.querySelectorAll('.movie-set');
    let currentSetIndex = 1;
    let movies;

    // Check if the page title contains "Action" or "main"
    if (document.title.includes("Action")) {
        movies = [
            { name: "The Dark Knight", imgSrc: "Action/The Dark Knight/poster.jpg" },
            { name: "The Dark Knight Rises", imgSrc: "Action/The Dark Knight Rises/Risespic.jpg" },
            { name: "Mission Impossible Ghost Protocol", imgSrc: "Action/Mission Impossible Ghost Protocol/poster.png" },
            { name: "KillBillVol.1", imgSrc: "Action/Kill Bill Vol. 1/killbillpic.jpg" },
            { name: "Heat", imgSrc: "Action/Heat/heatpic.jpg" },
            { name: "Top Gun Maverick", imgSrc: "Action/Top Gun Maverick/TopGunM.jpg" },
            { name: "V for Vandetta", imgSrc: "Action/V for Vendetta/VforVendetta.jpg" }
            // Add more movie objects as needed
        ];
    } 
    else if (document.title.includes("MYTV")) {
        movies = [
            { name: "Napoleon", imgSrc: "Trending/pic1.jpeg" },
            { name: "Thanksgiving", imgSrc: "Trending/pic4.jpeg" },
            { name: "Barbie", imgSrc: "Trending/pic5.jpeg" },
            { name: "Wonka", imgSrc: "Trending/pic6.jpeg" },
            { name: "Killer Of The Flower Moon", imgSrc: "Trending/pic7.jpeg" },
            { name: "Leo", imgSrc: "Trending/pic3.jpeg" },
            { name: "Wish", imgSrc: "Trending/pic8.jpeg" },
            { name: "The Marvels", imgSrc: "Trending/pic9.jpeg" },
            { name: "The Killer", imgSrc: "Trending/pic2.jpeg" },
            { name: "mission impossible dead reckoning part one", imgSrc: "Trending/pic10.jpeg" },
            // Add more movie objects as needed
        ];
    }
        else if (document.title.includes("Before")) {
            movies = [
                { name: "The Godfather I", imgSrc: "Drama/The Godfather/GF1.jpg" },
                { name: "The Godfather II", imgSrc: "Drama/The Godfather Part II/GF2.jpg" },
                { name: "The Godfather III", imgSrc: "Drama/The God Father III/GF3.jpg" },
                { name: "Goodfellas", imgSrc: "Drama/Goodfellas/Goodfellas.jpg" },
                { name: "The Shawshank Redemption", imgSrc: "Drama/The Shawshank Redemption/TSR.jpg" },
                { name: "The Silence of Lambs", imgSrc: "Drama/The Silence of the Lambs/TSOL.jpg" },
                { name: "Schindler's List", imgSrc: "Drama/Schindler's List/SL.jpg" },
                { name: "Saving Private Ryan", imgSrc: "Drama/Saving Private Ryan/SPR.jpg" },
                { name: "The Green Mile", imgSrc: "Drama/The green mile/TGM.jpg" },
                { name: "Good Will Hunting", imgSrc: "Drama/GoodWillHunting/GWH.jpg" },
                // Add more movie objects as needed
            ];
    } 

    else if (document.title.includes("Comedy")) {
        movies = [
            { name: "Central Intelligence", imgSrc: "Comedy/Central Intelligence/CI.jpg" },
            { name: "Men in Black 1", imgSrc: "Comedy/Men in Black 1/MIB1.jpg" },
            { name: "Men in Black 2", imgSrc: "Comedy/Men in Black 2/MIB2.jpg" },
            { name: "Men in Black 3", imgSrc: "Comedy/Men in Black 3/MIB3.jpg" },
            { name: "Rush Hour", imgSrc: "Comedy/Rush Hour/RH1.jpg" },
            { name: "Rush Hour 2", imgSrc: "Comedy/Rush Hour 2/RH2.jpg" },
            { name: "The Hangover", imgSrc: "Comedy/The Hangover.jpg" },
            { name: "Boss Baby", imgSrc: "Comedy/boss baby/bb.png" },


            // Add more movie objects as needed
        ];
}

   

    function createMovieElement(movie) {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const imgElement = document.createElement('img');
        imgElement.src = movie.imgSrc;
        imgElement.alt = movie.name;

        // Add click event listener to redirect to the movie page
        movieElement.addEventListener('click', function () {
            navigateTo(`${movie.name}.html`);
        });
        const nameElement = document.createElement('p');
        nameElement.classList.add('movie-name');
        nameElement.textContent = movie.name;

        const watchlistIcon = document.createElement('div');
        watchlistIcon.classList.add('watchlist-icon');
        watchlistIcon.textContent = '+';
        watchlistIcon.addEventListener('click', function () {
            addToWatchlist(movie.name);
        });

        movieElement.appendChild(imgElement);
        movieElement.appendChild(nameElement);
        movieElement.appendChild(watchlistIcon);

        return movieElement;
    }

    function loadMovies(setIndex, count) {
        const currentSet = movieSets[setIndex - 1];

        for (let i = 0; i < count; i++) {
            const movieIndex = (setIndex - 1) * count + i;
            if (movieIndex >= movies.length) {
                // No more movies to load
                break;
            }

            const movie = movies[movieIndex];
            const movieElement = createMovieElement(movie);
            currentSet.appendChild(movieElement);
        }
    }

    function handleScroll() {
        const lastSet = movieSets[movieSets.length - 1];
        const lastSetRect = lastSet.getBoundingClientRect();

        if (lastSetRect.bottom <= window.innerHeight) {
            // Load more movies when the last set is in view
            currentSetIndex++;
            loadMovies(currentSetIndex, 5);
        }
    }

    // Initial load of the first set of movies
    loadMovies(currentSetIndex, 5);

    // Load more movies as the user scrolls
    window.addEventListener("scroll", handleScroll);
});
function showSublist() {
    var secondSublist = document.getElementById('secondSublist');
    secondSublist.style.display = 'block';
}
function hideSublist() {
    var secondSublist = document.getElementById('secondSublist');
    secondSublist.style.display = 'none';
}

// faq.js
function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
    } else {
        answer.style.display = "none";
    }
}


function navigateTo(page) {
    window.location.href = page;
}