import fetchPopularMovies from "./__mocks__/fetchPopularMovies";

describe('popularMovies must pass the test', () => {
  test('Fetch available popularMovies must return data', () => {
    expect(fetchPopularMovies()).toBeDefined();
  });
  test('Fetch popularMovies return value length must be 3', () => {
    expect(fetchPopularMovies()).toHaveLength(3);
  });
  test('Fourth fetched popularMovies title should be Cowboy Bebop', () => {
    expect(fetchPopularMovies()[0].title).toBe('Cowboy Bebop');
  });
});