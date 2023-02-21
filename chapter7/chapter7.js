    <script>
//Task 1
      let arr = [];
      let n = parseInt(prompt("Insert size of array"))
      for (let i=0; i<n; i++)
        arr[i] = parseInt(prompt("Insert number"))
      let m = parseInt(prompt("Search number"))
      let check = false;
      let index = 0;
      for (let i=0; i<arr.length; i++) {
        if (arr[i]===m) {
          check = true;
          index = arr.indexOf(m)
        }
      }
      if (check) console.log("YES "+index)
      else console.log("No")
//Task 2
      let arr = []
      let e = parseInt(prompt("Insert number"))
    
      while (e!==0) {
        arr.push(e)
        e = parseInt(prompt("Insert number"))
      }

      let count = 1;
      for (let i=0; i<arr.length; i++) {
        count *= arr[i]
      }

      let a = Math.pow(count, 1 / arr.length)
      let b = a.toFixed(3)
      alert(b)
//Task 3
      let arr = []
      let e = parseInt(prompt("Insert number"))
    
      while (e!==0) {
        arr.push(e)
        e = parseInt(prompt("Insert number"))
      }
      for (let i=0; i<arr.length; i++) {
        if (arr[i]>0) {
          console.log(arr[i])
        }
      }
//Task 4
      let num = parseInt(prompt("Enter a number"))
      let arr = [];
      for (let i=0; i<num; i++) {
        arr[i] = parseInt(prompt(`Enter a number in Array[${num}]`))
      }
      let count = arr[0];
      for (let i=1; i<arr.length; i++) {
        if (arr[i]!==0) {
          count *= arr[i];
        }
      }
      console.log(count);
//Task 5
      cars = [
        {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},
        {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},
        {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},
        {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},
        {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}
      ];
      let search = parseInt(prompt(`
        INSERT [1] TO SEARCH BY NAME
        INSERT [2] TO SEARCH BY YEAR
        INSERT [3] TO SEARCH BY ENGINE VOLUME
        INSERT [4] TO SEARCH BY PRICE
        INSERT [5] TO EXIT
      `)) 

      while(true) {
      if (search===1) {
        let name = prompt("INSERT NAME OF CAR:");
        for (i=0; i<cars.length; i++){
          if (cars[i]["name"]===name) {
            alert(cars[i]["name"]+" "+cars[i]["price"]+" "+cars[i]["year"]+" "+cars[i]["volume"])
          }
        }
        break
      }
      if (search===2) {
        let startyear = parseInt(prompt("INSERT YEAR START FROM:"));
        let endyear = parseInt(prompt("INSERT YEAR ENDS FROM:"));
        for (i=0; i<cars.length; i++){
          if (cars[i]["year"]>=startyear && cars[i]["year"]<=endyear) {
            console.log(cars[i]["name"]+" "+cars[i]["price"]+" "+cars[i]["year"]+" "+cars[i]["volume"])
          }
        }
        break
      }
      if (search===3) {
        let startengine = parseInt(prompt("INSERT ENGINE VOLUME START FROM:"));
        let endengine = parseInt(prompt("INSERT ENGINE VOLUME START FROM:"));
        for (i=0; i<cars.length; i++){
          if (cars[i]["volume"]>=startengine && cars[i]["volume"]<=endengine) {
            console.log(cars[i]["name"]+" "+cars[i]["price"]+" "+cars[i]["year"]+" "+cars[i]["volume"])
          }
        }
        break
      }
      if (search===4) {
        let startprice = parseInt(prompt("INSERT PRICE START FROM:"));
        let endprice = parseInt(prompt("INSERT PRICE ENDS FROM:"));
        for (i=0; i<cars.length; i++){
          if (cars[i]["price"]>=startprice && cars[i]["volume"]<=endprice) {
            console.log(cars[i]["name"]+" "+cars[i]["price"]+" "+cars[i]["year"]+" "+cars[i]["volume"])
          }
        }
        break
      }
        if (search===0) break
      }
//Task 6    
      let name
      let surname
      let gpa
      let users = [
        {name: "Nikita", surname: "Morozov", gpa: "3.8"},
        {name: "Adil", surname: "Bazarbay", gpa: "4.0"},
        {name: "Veronika", surname: "Serg", gpa: "4.0"}
      ];

      while(true) {
        let choice = parseInt(prompt(`
          PRESS 1 TO ADD STUDENT
          PRESS 2 TO LIST STUDENT
          PRESS 0 TO EXIT
        `))
        if (choice===1){
          name = prompt("INSERT NAME:")
          surname = prompt("INSERT SURNAME:")
          gpa = parseInt(prompt("INSERT GPA:"))
        
          let user = {}
          user.name = name
          user.surname = surname
          user.gpa = gpa

          users.push(user)
        }
        if (choice===2) {
          for (let i=0; i<users.length; i++) {
            console.log(users[i]["name"]+" "+users[i]["surname"]+" "+users[i]["gpa"])
          }
          break
        }
        if (choice===0) break
      }

  </script>