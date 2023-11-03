const TheOneAPIClient = require('./the-one-api');

describe('TheOneAPIClient', () => {
    test('fetchMovies should return movie data', async () => {
      const theClient = new TheOneAPIClient();
      const response = await theClient.fetchMovies();
      expect(response).toHaveProperty('docs');
      expect(response.total).toBeGreaterThan(0);
    })
  }, 15000);

describe('TheOneAPIClient', () => {
    test('fetchMovieById should return a single movie', async () => {
      const theClient = new TheOneAPIClient();
      const response = await theClient.fetchMovieById('5cd95395de30eff6ebccde5d');
      expect(response).toHaveProperty('docs');
      expect(response.total).toBeGreaterThan(0);
    })
  }, 15000);

describe('TheOneAPIClient', () => {
    test('fetchMovieQuotesById should return a single movie', async () => {
      const theClient = new TheOneAPIClient();
      const response = await theClient.fetchMovieQuotesById('5cd95395de30eff6ebccde5d');
      expect(response).toHaveProperty('docs');
      expect(response.total).toBeGreaterThan(0);
    })
  }, 15000);

describe('TheOneAPIClient', () => {
    test('fetchMovieQuotes should return all movie quotes', async () => {
      const theClient = new TheOneAPIClient();
      const response = await theClient.fetchMovieQuotes();
      expect(response).toHaveProperty('docs');
      expect(response.total).toBeGreaterThan(0);
    })
  }, 15000);

describe('TheOneAPIClient', () => {
    test('fetchMovieQuotesByQuoteId should return a single movie quote', async () => {
      const theClient = new TheOneAPIClient();
      const response = await theClient.fetchMovieQuotesByQuoteId('5cd96e05de30eff6ebcce7f2');
      expect(response).toHaveProperty('docs');
      expect(response.total).toBeGreaterThan(0);
    })
  }, 15000);