import axios from 'axios';

const KEY = 'AIzaSyDCv-nigo1InDQf8r4CtZtKK0rj6fuld3A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: `${KEY}`,
  },
});
