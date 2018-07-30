import DailyReducer from './reducer_daily';

describe('DailyReducer Test', () => {
  it('should return the initial state', () => {
    expect(DailyReducer(undefined, {})).toHaveProperty('all', { 'Time Series (Daily)': null });
  });

  it('should fetch daily', () => {
    expect(
      DailyReducer(undefined, {
        type: 'FETCH_DAILY',
        payload: { content: {} },
      }),
    ).toHaveProperty('all', { content: {} });
  });
});
