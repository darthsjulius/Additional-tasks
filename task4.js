const users = [
  {id: 1, posts: [{id: 11, tags: ["PHP"]}, {id: 12, tags: []}, {id: 13, tags: ["JS"]}]}
  ,{id: 2, posts: [{id: 21, tags: []}, {id: 22, tags: ["Python", "PHP"]}, {id: 23, tags: []}]}
  ,{id: 3, posts: [{id: 31, tags: ["PHP"]}, {id: 32, tags: []}, {id: 33, tags: []}]}
  ,{id: 4, posts: [{id: 41, tags: ["CSS"]}, {id: 42, tags: ["Python"]}, {id: 43, tags: []}]}
];

const usersThatPostedAboutPHP = filter(users, user => 
{const postsAboutPHP = users.posts.filter(post => post.tags.includes('PHP')); 
return postsAboutPHP.length > 0;
});




