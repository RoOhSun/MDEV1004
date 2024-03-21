// twitterModel.js
const { TwitterApi } = require("twitter-api-v2");

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
  }

  async tweet(text) {
    try {
      await this.rwClient.v2.tweet(
        text
      );
      console.log("Tweet created successfully");
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw error;
    }
  }
}

module.exports = TwitterModel;




