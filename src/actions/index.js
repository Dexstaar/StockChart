import axios from 'axios';

export const FETCH_INTRADAY = 'FETCH_INTRADAY';

const url = 'https://www.alphavantage.co/query';
const apiKey = 'demo';
// const apiKey = '7KOGGEEMBWFT0JYP';

export function fetchIntraday(stockCode, interval) {
  console.log('fetchIntraday');

  const requestParams = {
    params: {
      function: 'TIME_SERIES_INTRADAY',
      symbol: stockCode,
      interval,
      apikey: apiKey,
    },
  };

  const request = axios.get(url, requestParams);

  return (dispatch) => {
    request.then(({
      data,
    }) => {
      dispatch({
        type: FETCH_INTRADAY,
        payload: data,
      });
    });
  };
}
