import axios from 'axios';

const fetchCoins = async (page = 1) => {
  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '5', // Adjust the limit based on the number of coins per page
      offset: (page - 1) * 5 // Adjust the offset based on the current page
    },
    headers: {
      'X-RapidAPI-Key': '9544714e70msh3ef047f13193e36p15fbd8jsnc615d9b69420',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

export { fetchCoins };
