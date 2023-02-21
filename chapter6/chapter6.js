 <script>
  //Task 1
      let n = parseInt(prompt("Insert n"));
      let arr = [];
      for (let i=0; i<n; i++) {
        arr[i] = parseInt(prompt("Insert nums"));
      }
      for (let i=arr.length; i>0; i--) {
        console.log(i);
      }
//Task 2
      let n = parseInt(prompt("Insert n"));
      let arr = [];
      for (let i=0; i<n; i++) {
        arr[i] = parseInt(prompt("Insert nums"));
      }
      let max = 0;
      for (let i=0; i<arr.length; i++) {
        if (max<arr[i]) max = arr[i]
      }
      console.log(max);
//Task 3
      let n = parseInt(prompt("Insert n"));
      let arr = [];
      for (let i=0; i<n; i++) {
        arr[i] = parseInt(prompt("Insert nums"));
      } 
      let sum = 0;
      for (let i=0; i<arr.length; i++) {
        sum += arr[i];
      }
      console.log(sum, sum/arr.length);
//Task 4
      let n = parseInt(prompt("Insert n"));
      let arr = [];
      for (let i=0; i<n; i++) {
        arr[i] = parseInt(prompt("Insert nums"));
      } 
      for (let i=0; i<arr.length; i++) {
        console.log(arr[i]*arr[i]);
      }
//Task 5
      let login = prompt("Name");
      let password = prompt("Password");
      users = [
        {"login":"ilyas", "password": "qwerty"},
        {"login":"eldar", "password": "qqqqq"},
        {"login":"assylkhan", "password": "qweqwe"},
        {"login":"anel", "password": "asdasd"},
        {"login":"alibek", "password": "aaaaaa"}
      ];
      let auth = false;
      for(let i=0;i<users.length;i++){
        if (users[i]["login"]===login && users[i]["password"]===password)
          auth = true;
      } 
      if (auth) console.log("Welcome, you are authenticated")
      else console.log("User not found")
//Task 6    
    let arr = [
      {"name":"Harry Potter and the Philosopher's Stone",
       "autor":"Joanne Rowling",
       "ISBN": "222322",
       "price":"50$"},
      {"name":"Harry Potter and the Chamber of Secrets",
       "autor":"Joanne Rowling",
       "ISBN": "222332",
       "price":"40$"},
      {"name":"Harry Potter and the Prisoner of Azkaban",
       "autor":"Joanne Rowling",
       "ISBN": "452323",
       "price":"55$"},
    ]
    let name = prompt("Insert name");
    for (let i=0; i<arr.length; i++) {
      if (arr[i]["name"]===name)
      console.log(arr[i]["name"]+" - "+arr[i]["autor"]+" - "+arr[i]["ISBN"]+" - "+arr[i]["price"])
    }
  </script>