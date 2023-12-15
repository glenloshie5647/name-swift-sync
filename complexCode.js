/*
  Filename: complexCode.js

  This code demonstrates a sophisticated implementation of a social media application.
  It includes functionalities such as user registration, posting and commenting on posts,
  and friend requests.

  NOTE: This code is a simplified and shortened version for demonstration purposes.
*/

// Class for User
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.friends = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    return post;
  }

  sendFriendRequest(user) {
    user.receiveFriendRequest(this);
  }

  receiveFriendRequest(user) {
    // Logic for receiving friend request
    // ...
  }

  acceptFriendRequest(requester) {
    if (requester.confirmFriendRequest(this)) {
      this.friends.push(requester);
      requester.friends.push(this);
    }
  }

  confirmFriendRequest(user) {
    // Logic for confirming friend request
    // ...
    return true;
  }

  postComment(post, content) {
    const comment = new Comment(content, this);
    post.comments.push(comment);
    return comment;
  }
}

// Class for Post
class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.comments = [];
  }

  //...
}

// Class for Comment
class Comment {
  constructor(content, user) {
    this.content = content;
    this.user = user;
  }

  //...
}

// Usage

// Create users
const user1 = new User("Alice", "alice@example.com", "password1");
const user2 = new User("Bob", "bob@example.com", "password2");

// Send friend request
user1.sendFriendRequest(user2);

// Accept friend request
user2.acceptFriendRequest(user1);

// Create post
const post = user1.createPost("Hello, world!");

// Comment on post
user2.postComment(post, "Nice post!");

// Output posts and comments
console.log(user1.posts);
console.log(user2.posts);