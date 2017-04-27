const chai = require('chai');
const AylienNewsApi = require('aylien-news-api');

const getNews = require('../utilities/aylienApi.js');
const apiInfo = require('../lib/env/aylienApiKeys');

const expect = chai.expect;
const apiInstance = new AylienNewsApi.DefaultApi();

let appId = apiInstance.apiClient.authentications['app_id'];
appId.apiKey = apiInfo.id;

let appKey = apiInstance.apiClient.authentications['app_key'];
appKey.apiKey = apiInfo.key;

xdescribe('Aylien API', () => {

});
