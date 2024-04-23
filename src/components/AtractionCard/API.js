var axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://sky-scrapper.p.rapidapi.com/api/v1/checkServer',
  headers: {
    'X-RapidAPI-Key': '35f19a1679msh858a51b60a222c3p17c2d1jsnde19af989834',
    'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
