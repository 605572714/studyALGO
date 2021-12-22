// 355. 设计推特

// 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，关注/取消关注其他用户，能够看见关注人（包括自己）的最近 10 条推文。

// 实现 Twitter 类：

//     Twitter() 初始化简易版推特对象
//     void postTweet(int userId, int tweetId) 根据给定的 tweetId 和 userId 创建一条新推文。每次调用此函数都会使用一个不同的 tweetId 。
//     List<Integer> getNewsFeed(int userId) 检索当前用户新闻推送中最近  10 条推文的 ID 。新闻推送中的每一项都必须是由用户关注的人或者是用户自己发布的推文。推文必须 按照时间顺序由最近到最远排序 。
//     void follow(int followerId, int followeeId) ID 为 followerId 的用户开始关注 ID 为 followeeId 的用户。
//     void unfollow(int followerId, int followeeId) ID 为 followerId 的用户不再关注 ID 为 followeeId 的用户。



// 示例：

// 输入
// ["Twitter", "postTweet", "getNewsFeed", "follow", "postTweet", "getNewsFeed", "unfollow", "getNewsFeed"]
// [[], [1, 5], [1], [1, 2], [2, 6], [1], [1, 2], [1]]
// 输出
// [null, null, [5], null, null, [6, 5], null, [5]]

// 解释
// Twitter twitter = new Twitter();
// twitter.postTweet(1, 5); // 用户 1 发送了一条新推文 (用户 id = 1, 推文 id = 5)
// twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含一个 id 为 5 的推文
// twitter.follow(1, 2);    // 用户 1 关注了用户 2
// twitter.postTweet(2, 6); // 用户 2 发送了一个新推文 (推文 id = 6)
// twitter.getNewsFeed(1);  // 用户 1 的获取推文应当返回一个列表，其中包含两个推文，id 分别为 -> [6, 5] 。推文 id 6 应当在推文 id 5 之前，因为它是在 5 之后发送的
// twitter.unfollow(1, 2);  // 用户 1 取消关注了用户 2
// twitter.getNewsFeed(1);  // 用户 1 获取推文应当返回一个列表，其中包含一个 id 为 5 的推文。因为用户 1 已经不再关注用户 2

// 1
// var Twitter = function () {
//   this.article = []
//   this.user = new Map();
//   this.tfUser = function (userId) {
//     if (!this.user.has(userId)) this.user.set(userId, [])
//   }
// };

// /**
//  * @param {number} userId
//  * @param {number} tweetId
//  * @return {void}
//  */
// Twitter.prototype.postTweet = function (userId, tweetId) {
//   this.article.unshift([userId, tweetId])
//   this.tfUser(userId)
// };

// /**
//  * @param {number} userId
//  * @return {number[]}
//  */
// Twitter.prototype.getNewsFeed = function (userId) {
//   this.tfUser(userId);
//   let arr = this.user.get(userId)
//   arr.push(userId)
//   let res = []
//   this.article.forEach(val => {
//     if (arr.includes(val[0])) res.push(val[1])
//   })
//   if (res.length > 10) res = res.slice(0, 10)
//   return res
// };

// /**
//  * @param {number} followerId
//  * @param {number} followeeId
//  * @return {void}
//  */
// Twitter.prototype.follow = function (followerId, followeeId) {
//   this.tfUser(followerId);
//   this.user.get(followerId).push(followeeId)
// };

// /**
//  * @param {number} followerId
//  * @param {number} followeeId
//  * @return {void}
//  */
// Twitter.prototype.unfollow = function (followerId, followeeId) {
//   this.tfUser(followerId);
//   let index = this.user.get(followerId).indexOf(followeeId);
//   if (index != -1) this.user.get(followerId).splice(index, 1)
// };

// /**
//  * Your Twitter object will be instantiated and called as such:
//  * var obj = new Twitter()
//  * obj.postTweet(userId,tweetId)
//  * var param_2 = obj.getNewsFeed(userId)
//  * obj.follow(followerId,followeeId)
//  * obj.unfollow(followerId,followeeId)
//  */
let time = 0; //维护一个全局的time,  试了 每次创建tweet的时候维护一个this.time = Date.now()不可行;
var Twitter = function () {
  //所有的用户；
  this.userMap = new Map();
  this.tfUser = function (userId) {
    if (!this.userMap.has(userId)) this.userMap.set(userId, new userId(userId))
  }
};
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tfUser(userId);
  this.userMap.set(userId, this.userMap.get(userId).post(tweetId))
}
class User {
  constructor(id) {
    this.id = id
    this.tweet = null
    this.followee = new Set()
  }
  follow (followeeId) {
    if (followeeId != this.userId) this.followee.add(followeeId)
    return this
  }
  unfollow (followeeId) {
    if (this.followee.has(followeeId) && followeeId != this.id) this.followee.delete(followeeId)
    return this
  }
  post (tweeId) {
    time += 1
    let tweet = new this.tweet(tweeId)
    tweet.next = this.tweet
    this.tweet = tweet
    return this
  }
}

let twitter = new Twitter()

