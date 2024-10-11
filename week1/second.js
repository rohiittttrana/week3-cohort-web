
  function filterUsers(users)
  {
    return users.filter(user=>user.age >18 && user.gender == "male");
  }
  const users = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Jane', age: 22, gender: 'female' },
    { name: 'Mike', age: 17, gender: 'male' },
    { name: 'Emily', age: 19, gender: 'female' },
    { name: 'Bob', age: 30, gender: 'male' },
    { name:'rohit',age:20,gender:'male'},
    {name:'mohit',age:22,gender:'male'
    }
  ];
  
  const filteredUsers = filterUsers(users);
  console.log(filteredUsers);
 
  