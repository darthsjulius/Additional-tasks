
const users = [
    {id: 1, posts: [{id: 11, tags: ["PHP"]}, {id: 12, tags: []}, {id: 13, tags: ["JS"]}]}
   , {id: 2, posts: [{id: 21, tags: []}, {id: 22, tags: ["Python", "PHP"]}, {id: 23, tags: []}]}
   , {id: 3, posts: [{id: 31, tags: ["PHP"]}, {id: 32, tags: []}, {id: 33, tags: []}]}
   , {id: 4, posts: [{id: 41, tags: ["CSS"]}, {id: 42, tags: ["Python"]}, {id: 43, tags: []}]}
  ]
  
  
  
  /* сначала нужно создать переменную для каждого пользователя,
  затем найти всех у кого в тэгах есть PHP и вернуть их */
  
 let usersId = users.map(item => item.id);
 const usersThatPostedAboutPHP = usersId.filter(item => ('tags' == 'PHP') ? 1 : -1);

