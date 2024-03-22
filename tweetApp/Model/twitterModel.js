// twitterModel.js
const { TwitterApi } = require('twitter-api-v2');

class TwitterModel {
  constructor() {
    this.client = new TwitterApi({
      appKey: "21vQOOWTZzMCdoweocHIDQAKs",
      appSecret: "REMWCTFmEeMJV5hMdX1STkLhDk3AKsOTSy6aK7ZX88uTvZ6rt0",
      accessToken: "1458312361777848325-QtZBedpkIKeq1QMR00HcsvEu9jMwnj",
      accessSecret: "j86lNOHTf7ggUfbDzXA8S2pcpT7eTZxBfzjI9HhPr7ExD",
      bearerToken: "AAAAAAAAAAAAAAAAAAAAAJ47swEAAAAAVRj%2BIknTLIobZX8WB4RF4K35oPo%3Dxsv3YhtNsES7SPsxqfNDhBsZHahYkA1IWsiPs3QZaJL2rv1CZR",

    });

    this.rwClient = this.client.readWrite;
    this.twitterData = new Set();
  }

  //validate duplicate data
  async duplicateData(content) {
    if (this.twitterData.has(content)) {
      return true;
    }
    return false;
  }

  //checking if data is new
  async tweet(text) {
    try {
      const doubleTweets = await this.duplicateData(text);
      console.log('exists', doubleTweets);
      if (doubleTweets) {
        return 'Duplicate Tweet!! Please try again with different content';
      }
      this.twitterData.add(text);
      const tweetResult = await this.rwClient.v2.tweet(text);
      
      return tweetResult;
    } catch (error) {
      console.error('Error creating tweet:', error);
      throw error;
    }
  }
}

module.exports = TwitterModel;