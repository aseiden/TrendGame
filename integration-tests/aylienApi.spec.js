var chai = require('chai');
var AylienNewsApi = require('aylien-news-api');

var getNews = require('../utilities/aylienApi.js');

var expect = chai.expect;
var apiInstance = new AylienNewsApi.DefaultApi();
var appKey = apiInstance.apiClient.authentications['app_key'];
appKey.apiKey = '';

describe('Aylien API', () => {

});