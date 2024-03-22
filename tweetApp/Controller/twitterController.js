// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  async createTweet(text) {
    try {
      const myTweet = await this.twitterModel.tweet(text);
      return myTweet;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;
