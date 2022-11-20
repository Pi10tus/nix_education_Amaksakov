//const { MongoClient } = require("mongodb");
async function authFunction() {
  try {
    const user = {
      username: document.getElementById("usrLog").value,
      password: document.getElementById("usrPass").value,
    };

    let result = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    result = await result.json();

    if (result.token) {
      document.getElementById("authModal").style.display = "none";

      let goods = await fetch("http://localhost:8000/auth/items", {
        headers: new Headers({
          authorization: result.token,
        }),
      });
      goods = await goods.json();
      await goods.forEach((el) => items.push(el));
      displayGoods(items);

      localStorage.setItem("ActiveUser", JSON.stringify(result));

      console.log(localStorage.getItem("ActiveUser"));
    } else {
      alert(result.message);
    }
  } catch (e) {}
}
async function regFunction() {
  const user = {
    username: document.getElementById("usrLog").value,
    password: document.getElementById("usrPass").value,
  };

  let result = await fetch("http://localhost:8000/auth/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  result = await result.json();
  if (result.message === "User has been registred") {
    document.getElementById("authModal").style.display = "none";

    let goods = await fetch("http://localhost:8000/auth/items");
    goods = await goods.json();
    await goods.forEach((el) => items.push(el));
    displayGoods(items);

    localStorage.setItem("ActiveUser", JSON.stringify(result));

    console.log(localStorage);

    localStorage.setItem("ActiveUser", JSON.stringify(result));

    console.log(localStorage);
  } else {
    alert(result.message);
  }
}

// async function getItems() {
//   const username = encodeURIComponent("Pilotus42");
//   const password = encodeURIComponent("fZ86JkEjrjJiYz5A");

//   let uri = `mongodb+srv://${username}:${password}@cluster0.cekqq4q.mongodb.net/?retryWrites=true&w=majority`;
//   const client = define(new MongoClient(uri));
// //   try {
// //     await client.connect();
// //     const database = client.db("Maksakov_edu_nix");
// //     const items1 = database.collection("items");
// //     const goods = items1.find();
// //     await goods.forEach((el) => items.push(el));
// //     console.log(items);
// //   } finally {
// //     await client.close();
// //   }

// }
