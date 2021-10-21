const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById("form")
const search = document.getElementById("search")
const main = document.getElementById("main")

//const getMovie = (url) => {
//   const peticion = fetch(url)
//   peticion
//      .then(resultado => resultado.json())
//      .then(peliculas => peliculas.results)
//}
const getMovie = async (url) => {
    try {
        const peticion = await fetch(url);
        const pelicula = await peticion.json()
        const data = pelicula.results;
        console.log(data);
        showMovie(data)
    } catch (error) {
        console.log(error);
    }

    function showMovie(movie){
        main.innerHTML = ''
        movie.forEach(movie => {
            
       
        const {title, poster_path, vote_average, overview} = movie
        const movieElement = document.createElement("div")
        movieElement.classList.add("movie")

        movieElement.innerHTML=`<img src="${IMG_PATH + poster_path}" alt="">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>overview</h3>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quas vero neque sint quisquam rerum
            sit. Exercitationem sint temporibus dicta?
        </div>`
        main.appendChild(movieElement)
    });
    }
}
function getClassByRate(vote) {
    if (vote >= 8.0) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const searchTerm = search.value
    if(searchTerm !==''){
        getMovie(SEARCH_URL + searchTerm)
    }else{
        window.location.reload()
    }
})

getMovie(API_URL)

