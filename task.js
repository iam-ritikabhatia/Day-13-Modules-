const axios = require('axios');
const url = 'https://jsonplaceholder.typicode.com/users';
axios.get(url)
.then(response => {
    console.log('Data Fetched Succesfully:', response.data);

})
.catch (error => {
console.error('Error fetching data:', error.message);
})
