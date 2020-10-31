const API_Key="e3079f91e880467f94d3f4684d90dbd8";




export default {
    fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_Key}&language=en-US`,
    fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_Key}&language=en-US`,
    fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=28`,
    fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=35`,
    fetchHorrorMovies:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=27`,
    fetchRomanceMovies:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=10749`,
    fetchMystery:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=9648`,
    fetchScifi:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=978`,
    fetchWestern:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=37`,
    fetchAnimation:  `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=16`,
    fetchTV: `https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=10770`,
    
    
}
