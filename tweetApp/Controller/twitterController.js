// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  async createTweet(text) {
    try {
      await this.twitterModel.tweet(text);
      return "Tweet created successfully";
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;
