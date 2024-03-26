
import axios from 'axios';

const Api = class {

  fetchData() {
    axios.get('http://localhost/user/4')
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.error(error);
      })

  }
}

const getApi = new Api();

getApi.fetchData()

export default Api