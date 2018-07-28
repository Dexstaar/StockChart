import axios from 'axios';

export const FETCH_DAILY = 'FETCH_DAILY';

const url = 'https://www.alphavantage.co/query';
// const apiKey = 'demo';
const apiKey = '7KOGGEEMBWFT0JYP';

export function fetchDaily(stockCode) {
  console.log('fetchDaily | stockCode : ', stockCode);

  const requestParams = {
    params: {
      function: 'TIME_SERIES_DAILY',
      symbol: stockCode,
      apikey: apiKey,
    },
  };

  const request = axios.get(url, requestParams);

  return (dispatch) => {
    request.then(({
      data,
    }) => {
      dispatch({
        type: FETCH_DAILY,
        payload: data,
      });
    });
  };
}
