const url = 'https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/heroes.json'

const getMovies = (url) => {
    const peticion = fetch(url)
    peticion
        .then(resp => resp.json())
        .then(data => console.log(data.results))
    peticion.catch(error => console.log(error))
}

const getMovies2 = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}

getMovies2(url)