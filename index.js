const TheOneAPIClient = require('./services/the-one-api')

const main = async () => {
  const theOneApi = new TheOneAPIClient();

  console.log('\n--MOVIES--');
  try {
    const movies = await theOneApi.fetchMovies();
    for (const movie of movies.docs) {
      console.log(`Movie Name: ${movie.name}, ID: ${movie._id}`);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
  }

  
  console.log('\n--SINGLE MOVIE--');
  try {
    const movie = await theOneApi.fetchMovieById('5cd95395de30eff6ebccde5d');
    console.log(`Movie Name: ${movie.docs[0].name}, ID: ${movie.docs[0]._id}`);
  } catch (error) {
    console.error('Error fetching movie:', error);
  }

  console.log('\n--SINGLE MOVIE QUOTES--');
  try {
    const quotes = await theOneApi.fetchMovieQuotesById('5cd95395de30eff6ebccde5d');
    console.log(`Quote: ${quotes.docs[0].dialog} Movie ID: ${quotes.docs[0].movie}, Quote ID: ${quotes.docs[0]._id}`);
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }

  console.log('\n--MOVIE QUOTES --');
  try {
    const quotes = await theOneApi.fetchMovieQuotes();
    const onlyShow = 10;
    console.log(`Total Quotes: ${quotes.docs.length} -- Only displaying first ${onlyShow}...`)
    for (let i =0; i < onlyShow; i++){
        console.log(`Quote: ${quotes.docs[i].dialog} ID: ${quotes.docs[i]._id}`);
    }
    console.log(`${quotes.docs.length - onlyShow} remaining...`)
    
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }

  console.log('\n--MOVIE QUOTES by ID--');
  try {
    const quotes = await theOneApi.fetchMovieQuotesByQuoteId('5cd96e05de30eff6ebcce7f2');
    //console.log(quotes.docs);
    for (const q of quotes.docs){
        console.log(`Quote: ${q.dialog}`);
    }
    
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }


  console.log('\n--Aggregated Function: MOVIES with QUOTES attached--');
  try {
    const moviesWithQuotes = await theOneApi.moviesWithAllQuotes()
    for (const m of moviesWithQuotes.docs){
        console.log(`Movie: ${m.name}, has ${m.quotes.length} Quotes.`);
    }
    
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }

  console.log('\n--Aggregated Function: MOVIES filtered by name--');
  try {
    //---This would obviously be triggered by a user provided filter sring, 
    //---but I wanted to display that an SDK function for filtering was created, per the req
    const tmpFilter = 'ring'
    const moviesByName = await theOneApi.moviesByName(tmpFilter)
    console.log(`Movies filtered by: '${tmpFilter}' yielded following results:`);
    for (const m of moviesByName){
        console.log(`Movies filtered: ${m.name}`);
    }
    
  } catch (error) {
    console.error('Error fetching quotes:', error);
  }


  console.log('\n\n');
};

main();
