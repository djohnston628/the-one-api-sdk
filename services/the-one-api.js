/*

SDK/Helper Library Written By: David Johnston | djohnston628@gmail.com | 949.306.0887
Date: October 2023

The-one-api information:
    Registered email address: djohnston628@gmail.com
    Access token: tM6w_b6XXIbgWKXRWtf3 

LibLab Interview Test Paths:
    /movie
    /movie/{id}
    /movie/{id}/quote
    /quote
    /quote/{id}

Notes: 
    Includes some direct 'the-one-api' calls, some initial caching (to show the concept, but I'm sure there could be more),
    and some abstract or aggregation functions to merge related data from multiple sources

*/


const axios = require('axios');


/**The main Client object allowing access to the-one-api Lord of the Rings data */
class TheOneAPIClient {
    
  constructor() {
    //---load then ENV vars
    require('dotenv').config();
    console.log(process.env.THE_ONE_ACCESS_TOKEN);

    //---Cache placement
    this.movies = [];
    this.quotes = [];

    //---api base and config
    this.baseURL = 'https://the-one-api.dev/v2';
    this.authConfig = {
        headers: {
          'Authorization': `Bearer ${process.env.THE_ONE_ACCESS_TOKEN}`,
        },
      };
  }

  //---
  //---Direct function calls 
  //---
  /**Get all movies */
  async fetchMovies() {
    try {
        //---check if we already have the list before making another call
        if (!this.movies || !this.movies.docs) {
            const response = await axios.get(`${this.baseURL}/movie`, this.authConfig);
            this.movies = response.data;
        } 
        return this.movies;
    } catch (error) {
        throw error;
    }
  }

  /**Get movie by movie ID */
  async fetchMovieById(id) {
    try {
        const response = await axios.get(`${this.baseURL}/movie/${id}`, this.authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
  }

  /**Get movie quotes by movie ID  */
  async fetchMovieQuotesById(id) {
    try {
        const response = await axios.get(`${this.baseURL}/movie/${id}/quote`, this.authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
  }

  /**Get All movie quotes */
  async fetchMovieQuotes() {
    try {
        //---check if we already have the list before making another call
        if (!this.quotes || !this.quotes.docs) {
            const response = await axios.get(`${this.baseURL}/quote`, this.authConfig);
            this.quotes = response.data;
        } 
        return this.quotes;
    } catch (error) {
        throw error;
    }
  }

/**Get Movie quotes by Quote id */
async fetchMovieQuotesByQuoteId(id) {
    try {
        const response = await axios.get(`${this.baseURL}/quote/${id}`, this.authConfig);
        return response.data;
    } catch (error) {
        throw error;
    }
}


//---
//---Abstract and extra function area for merging related data... only have Movies & Quotes to show the example, probably could add more?
//---
/**Aggregate: Return all movies with quotes attached as nested object */
async moviesWithAllQuotes() {
    try {
        const movies = await this.fetchMovies();
        const quotes = await this.fetchMovieQuotes();
        for (const movie of movies.docs) {
            movie.quotes = quotes.docs.filter((q) => { return q.movie === movie._id; })
        }
        return movies;
    } catch (error) {
        throw error;
    }
}

/**Filterable Movies by Name */
async moviesByName(name) {
    try {
        const movies = await this.fetchMovies();
        return movies.docs.filter((m) => { return m.name.toLowerCase().includes(name.toLowerCase()); })
    } catch (error) {
        throw error;
    }
}

}

module.exports = TheOneAPIClient;
