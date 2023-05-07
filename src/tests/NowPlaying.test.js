import fetchNowPlaying from './__mocks__/fetchNowPlaying';

describe('NowPlaing must pass the test', () => {
  test('Fetch available animes must return data', () => {
    expect(fetchNowPlaying()).toBeDefined();
  });
  test('Fetch animes return value length must be 3', () => {
    expect(fetchNowPlaying()).toHaveLength(3);
  });
  test('Fourth fetched nowPlaying title should be Cowboy Bebop', () => {
    expect(fetchNowPlaying()[0].title).toBe('Cowboy Bebop');
  });
});
