const AylienNewsApi = require('aylien-news-api');
const epoch = require('epoch.js');


const getStories = (peaks, queryString, callback) => {

  // Format date query for API
  const peakDate = new Date(peaks[0][0] * 1000);
  let formattedPeakDate = epoch(peakDate).format('YYYY[-]MM[-]DD[T]hh[:]mm[:]ss[Z]');

  // Establish API instance and supply credentials
  const apiInstance = new AylienNewsApi.DefaultApi();
  
  let apiInfo;
  try {
    apiInfo = require('../lib/env/aylienApiKeys');
  } catch (e) {
    apiInfo = {};
  }

  let appId = apiInstance.apiClient.authentications['app_id'];
  try {
    appId.apiKey = AYLIEN_ID;
  } catch (e) {
    appId.apiKey = apiInfo.id;
  }

  let appKey = apiInstance.apiClient.authentications['app_key'];
  try {
    appKey.apiKey = AYLIEN_KEY;
  } catch (e) {
    appKey.apiKey = apiInfo.key;
  }

  // Assign options for API query
  const opts = {
    'title': queryString,
    'sortBy': 'source.links_in_count',
    'language': ['en'],
    'publishedAtStart': formattedPeakDate,
    'publishedAtEnd': 'NOW', 
  };

  apiInstance.listStories(opts, callback);
};

getStories([[1464480000, 0]], 'explosion', (error, data, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log('this is the respons data!!!', data);
  }
});

module.exports = getStories;