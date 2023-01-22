
const users = [
    {id: 1, posts: [{id: 11, tags: ["PHP"]}, {id: 12, tags: []}, {id: 13, tags: ["JS"]}]}
   , {id: 2, posts: [{id: 21, tags: []}, {id: 22, tags: ["Python", "PHP"]}, {id: 23, tags: []}]}
   , {id: 3, posts: [{id: 31, tags: ["PHP"]}, {id: 32, tags: []}, {id: 33, tags: []}]}
   , {id: 4, posts: [{id: 41, tags: ["CSS"]}, {id: 42, tags: ["Python"]}, {id: 43, tags: []}]}
  ]
  
 
let arr1 = {id: 1, posts: [{id: 11, tags: ["PHP"]}, {id: 12, tags: []}, {id: 13, tags: ["JS"]}]};
let arr2 = {id: 2, posts: [{id: 21, tags: []}, {id: 22, tags: ["Python", "PHP"]}, {id: 23, tags: []}]};
let arr3 = {id: 3, posts: [{id: 31, tags: ["PHP"]}, {id: 32, tags: []}, {id: 33, tags: []}]};
let arr4 = {id: 4, posts: [{id: 41, tags: ["CSS"]}, {id: 42, tags: ["Python"]}, {id: 43, tags: []}]};
let user1 = Array.from(arr1);
let user2 = Array.from(arr2);
let user3 = Array.from(arr3);
let user4 = Array.from(arr4);
let str = `${user1}, ${user2}, ${user3}, ${user4}`;
let allusers = str.split(', ');
filter(allusers, (item) => item.includes('PHP'));



