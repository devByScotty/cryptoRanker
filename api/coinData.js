import axios from 'axios';


const apiUrl = 'https://coinranking1.p.rapidapi.com/coin';

const options = {


  method: 'GET',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '9544714e70msh3ef047f13193e36p15fbd8jsnc615d9b69420',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

const fetchCoins = async (uuid) => {
  try {

    const coinUrl = `${apiUrl}/${uuid}`;
    options.url = coinUrl;
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export { fetchCoins };