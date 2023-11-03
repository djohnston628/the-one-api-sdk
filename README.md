LibLab Testing - Lord of the Rings SDK/Helper Library
===

A simple SDK for the [The-One-Api.dev](http://the-one-api.dev). Include the SDK/Library and make calls to the various API and Aggregate end points. Current methods are:

* fetchMovies() - Get all movies
* fetchMovieById(id) - Get movie by movie ID
* fetchMovieQuotesById(id) - Get movie quotes by movie ID 
* fetchMovieQuotes() - Get All movie quotes
* fetchMovieQuotesByQuoteId(id) - Get Movie quotes by Quote id
* moviesWithAllQuotes() - Aggregate: Return all movies with quotes attached as nested object
* moviesByName(name) - Get Movies that match a provided string filter for name



## 1) Download or Clone the Library then install dependancies

    npm install


## 2) Run Just Tests

    npm test


## 3) Run Node example file, and check console for results

    node index.js


## Usage and Examples (console.logs are for response structure examples)

```javascript
# initialize the Client
const TheOneAPIClient = require('./services/the-one-api')
const theOneApi = new TheOneAPIClient();

# Get All Movies
const movies = await theOneApi.fetchMovies();
for (const movie of movies.docs) {
    console.log(`Movie Name: ${movie.name}, ID: ${movie._id}`);
}

# Get Single Movie By Id
const movie = await theOneApi.fetchMovieById('5cd95395de30eff6ebccde5d');
console.log(`Movie Name: ${movie.docs[0].name}, ID: ${movie.docs[0]._id}`);

# Get All Movie Quotes
const quotes = await theOneApi.fetchMovieQuotes();
console.log(`Total Quotes: ${quotes.docs.length}`)

# Get Movie Quotes By Id
const quotes = await theOneApi.fetchMovieQuotesByQuoteId('5cd96e05de30eff6ebcce7f2');
for (const q of quotes.docs){
    console.log(`Quote: ${q.dialog}`);
}

# Aggregated Function: Movies With Quotes Attached
const moviesWithQuotes = await theOneApi.moviesWithAllQuotes()
for (const m of moviesWithQuotes.docs){
    console.log(`Movie: ${m.name}, has ${m.quotes.length} Quotes.`);
}

# Filter Movies by Name
const moviesByName = await theOneApi.moviesByName('ring')
for (const m of moviesByName){
    console.log(`Movies filtered: ${m.name}`);
}

```


## Contributing

Was a test SDK for LibLab candidacy

## License

Licenses would go here if this weren't just a temporary SDK