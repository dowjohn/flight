export const dataservice = class {
  constructor ($http) {
    this.$http = $http
    this.ipAddress = '10.1.1.223:8090'
  }
  // --------------------------------------------------user services
  getUsers () {
    return this.$http.get(`http://${this.ipAddress}/api/users`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  getUserByName (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/@${username}`)
    .then((response) => {
      console.log('success getUsers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsers', error.data)
    })
  }

  postUser (userObject) {
    return this.$http.post(`http://${this.ipAddress}/api/users`, userObject)
    .then((response) => {
      console.log('success postTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed postTweet', error.data)
    })
  }

  updateUser (username, userObject) {
    return this.$http.patch(`http://${this.ipAddress}/api/users/@${username}`, userObject)
    .then((response) => {
      console.log('success updateUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed updateUser', error.data)
    })
  }

  deleteUser (username) {
    return this.$http.delete(`http://${this.ipAddress}/api/users/@${username}`)
    .then((response) => {
      console.log('success deleteUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed deleteUser', error.data)
    })
  }

  followUser (username, credentials) {
    return this.$http.patch(`http://${this.ipAddress}/api/users/@${username}/follow`, credentials)
    .then((response) => {
      console.log('success followUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed followUser', error.data)
    })
  }

  unfollowUser (username, credentials) {
    return this.$http.patch(`http://${this.ipAddress}/api/users/@${username}/unfollow`, credentials)
    .then((response) => {
      console.log('success unfollowUser', response.data)
      return response.data
    }, (error) => {
      console.log('failed unfollowUser', error.data)
    })
  }
  getFeed (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/@${username}/feed`)
    .then((response) => {
      console.log('success getFeed', response.data)
      return response.data
    }, (error) => {
      console.log('failed getFeed', error.data)
    })
  }

  getUsersTweets (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/@${username}/tweets`)
    .then((response) => {
      console.log('success getUsersTweets', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsersTweets', error.data)
    })
  }

// returns tweets
  getMentions (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/@${username}/mentions`)
    .then((response) => {
      console.log('success getMentions', response.data)
      return response.data
    }, (error) => {
      console.log('failed getMentions', error.data)
    })
  }

// returns users
  getFollowers (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/@${username}/followers`)
    .then((response) => {
      console.log('success getFollowers', response.data)
      return response.data
    }, (error) => {
      console.log('failed getFollowers', error.data)
    })
  }

  getFollowing (username) {
    return this.$http.get(`http://${this.ipAddress}/api/users/@${username}/following`)
    .then((response) => {
      console.log('success getFollowing', response.data)
      return response.data
    }, (error) => {
      console.log('failed getFollowing', error.data)
    })
  }

  // -------------------------------tweet services
  getTweets () {
    return this.$http.get(`http://${this.ipAddress}/api/tweets`)
    .then((response) => {
      console.log('success getTweets', response.data)
      return response.data
    }, (error) => {
      console.log('failed getTweets', error.data)
    })
  }

  getTweet (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}`)
    .then((response) => {
      console.log('success getTweets', response.data)
      return response.data
    }, (error) => {
      console.log('failed getTweets', error.data)
    })
  }

  postTweet (tweetObject) {
    return this.$http.post(`http://${this.ipAddress}/api/tweets`, tweetObject)
    .then((response) => {
      console.log('success postTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed postTweet', error.data)
    })
  }

  deactivateTweet (id, credentials) {
    return this.$http.delete(`http://${this.ipAddress}/api/tweets/${id}`, credentials)
    .then((response) => {
      console.log('success deactivateTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed deactivateTweet', error.data)
    })
  }

  likeTweet (id, credentials) {
    return this.$http.patch(`http://${this.ipAddress}/api/tweets/${id}/like`, credentials)
    .then((response) => {
      console.log('success likeTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed likeTweet', error.data)
    })
  }

  replyToTweet (id, tweetReplyObject) {
    return this.$http.post(`http://${this.ipAddress}/api/tweets/${id}/reply`, tweetReplyObject)
    .then((response) => {
      console.log('success replyToTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed replyToTweet', error.data)
    })
  }

  repostTweet (id, credentials) {
    return this.$http.post(`http://${this.ipAddress}/api/tweets/${id}/repost`, credentials)
    .then((response) => {
      console.log('success repostTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed repostTweet', error.data)
    })
  }

  // returns hashtags in specified tweet
  getTagsInTweet (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}/tags`)
    .then((response) => {
      console.log('success getTagsInTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed getTagsInTweet', error.data)
    })
  }

  // returns list of users who have liked the specified tweet
  getWhoHasLikedTweet (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}/likes`)
    .then((response) => {
      console.log('success getWhoHasLikedTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed getWhoHasLikedTweet', error.data)
    })
  }

  // returns a list of tweets that have replied to specified tweet
  getReplyTweets (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}/replies`)
    .then((response) => {
      console.log('success getReplyTweets', response.data)
      return response.data
    }, (error) => {
      console.log('failed getReplyTweets', error.data)
    })
  }

  // returns a list of tweets that have reposted a specified tweet
  getRepostsOfTweet (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}/reposts`)
    .then((response) => {
      console.log('success getRepostsOfTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed getRepostsOfTweet', error.data)
    })
  }

  // returns a list of users mentioned in tweet
  getUsersMentionedInTweet (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}/mentions`)
    .then((response) => {
      console.log('success getUsersMentionedInTweet', response.data)
      return response.data
    }, (error) => {
      console.log('failed getUsersMentionedInTweet', error.data)
    })
  }

  // returns context, meaning all the all replies of this tweet and all replies to those replies
  getContext (id) {
    return this.$http.get(`http://${this.ipAddress}/api/tweets/${id}/context`)
    .then((response) => {
      console.log('success getContext', response.data)
      return response.data
    }, (error) => {
      console.log('failed getContext', error.data)
    })
  }

  // ---------------------Hashtag services----------------
  getTags () {
    return this.$http.get(`http://${this.ipAddress}/api/tags`)
    .then((response) => {
      console.log('success getTags', response.data)
      return response.data
    }, (error) => {
      console.log('failed getTags', error.data)
    })
  }

  // returns tweets that include the specified hashtag
  getTweetsByHashtag (hashtag) {
    return this.$http.get(`http://${this.ipAddress}/api/tags/${hashtag}`)
    .then((response) => {
      console.log('success getTweetsByHashtag', response.data)
      return response.data
    }, (error) => {
      console.log('failed getTweetsByHashtag', error.data)
    })
  }

  // ----------------------Validation Services----------------
  isUserAvailable (username) {
    return this.$http.get(`http://${this.ipAddress}/api/validate/username/available/@${username}`)
    .then((response) => {
      console.log('success isUserAvailable', response.data)
      return response.data
    }, (error) => {
      console.log('failed isUserAvailable', error.data)
    })
  }

  doesUserExist (username) {
    return this.$http.get(`http://${this.ipAddress}/api/validate/username/exists/@${username}`)
    .then((response) => {
      console.log('success doesUserExist', response.data)
      return response.data
    }, (error) => {
      console.log('failed doesUserExist', error.data)
    })
  }

  doesTagExist (tag) {
    return this.$http.get(`http://${this.ipAddress}/api/validate/tag/exists/${tag}`)
    .then((response) => {
      console.log('success doesTagExist', response.data)
      return response.data
    }, (error) => {
      console.log('failed doesTagExist', error.data)
    })
  }

  login (credentials) {
    return this.$http.post(`http://${this.ipAddress}/api/validate/login`, credentials)
    .then((response) => {
      console.log('success login', response.data)
      return response.data
    }, (error) => {
      console.log('failed login', error.data)
    })
  }
}
