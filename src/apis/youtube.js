import axios from 'axios';

const KEY = 'AIzaSyDyEFMq8lq85_SraVoMUPmNb5xsZo1QP_I';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: `${KEY}`,
  },
});
