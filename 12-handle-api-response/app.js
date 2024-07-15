// JS-CC-12 : Handle API Response
// Purpose of the this coding challenge is to practice fetching data from an API, handle API response, locate desired information, extract that information from response and use it in your APP.

// Problem Statement
// Fetch users data from https://randomuser.me/api/?results=500&seed=foo

// Provide solutions to following tasks.

// 1 - display female and male users count seperately
// 2 - display all the users older than 40
// 3 - display all the users from Germany
// 4 - display the index position of the first user from Germany
// 5 - find the first user whoose age is 28
// 6 - generate a new user list from response:
  // - add an ID property containing a random number between 1000 and 5000,
  // - take only these properties: gender, full name (first + last name), city, country, email, username, password, age, picture(thumbnail)
  // - and add an additional property as credit and give a random value to credit between 1 to 100. Please check sample below:
    // {
    //   id: 1578,
    //   gender: 'female',
    //   fullName: 'Andréia Monteiro',
    //   city: 'Passo Fundo',
    //   country: 'Brazil',
    //   email: 'andreia.monteiro@example.com',
    //   username: 'beautifulgorilla966',
    //   password: 'banker',
    //   age: 66,
    //   picture: 'https://randomuser.me/api/portraits/thumb/women/60.jpg',
    //   credit: 55
    // }
// 7 - Develop a bootstrap card and display first 20 users whose credit is greater than 50
// 8 - Add 3 buttons to filter users as all, female and male



let users = [];
let filteredUserList = [];

const fetchData = async () => {
  const response = await fetch(
    "https://randomuser.me/api/?results=500&seed=foo"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  const users = data.results;

  // 1 - display female and male users count seperately

  // Using .filter()
  //   const maleUsers = users.filter(user => user.gender === 'male').length;
  //   const femaleUsers = users.filter(user => user.gender === 'female').length;

  // Using .reduce()
  const maleUsers = users.reduce((acc, user) => {
    if (user.gender === "male") acc++;
    return acc;
  }, 0);
  const femaleUsers = users.reduce((acc, user) => {
    if (user.gender === "female") acc++;
    return acc;
  }, 0);

  console.log(maleUsers);
  console.log(maleUsers);

  // 2 - display all the users older than 40
  //   const usersOlderThan40 = users.filter(user => user.dob.age > 40);
  //   console.log(usersOlderThan40);

  // 3 - display all the users from Germany
  //   const germans = users.filter(user => user.location.country === 'Germany');
  //   console.log(germans);

  // 4 - display the index position of the first user from Germany
  //   Using .findIndex()
  //   const firtsGermanUserIndex = users.findIndex(
  //     user => user.location.country === 'Germany'
  //   );
  //   console.log(firtsGermanUserIndex);

  // 5 - find the first user whoose age is 28
  //   const firstUserAge28 = users.find(user => user.dob.age === 28);
  //   console.log(firstUserAge28);
  // just to check in the API is it is the same person that console.log is showing checking the index position and checking in the api list
  //   const firstUserAge28Index = users.findIndex(user => user.dob.age === 28);
  //   console.log(firstUserAge28Index);

  // 6 - generate a new user list from response:
  userList = users.map((user) => ({
                     //  range            start
    id: Math.floor(Math.random() * 4000) + 1000,
    gender: user.gender,
    fullName: `${user.name.first} ${user.name.last}`,
    city: user.location.city,
    country: user.location.country,
    email: user.email,
    username: user.login.username,
    password: user.login.password,
    age: user.dob.age,
    picture: user.picture.thumbnail,
    credit: Math.floor(Math.random() * 100) + 1,
  }));
  //  console.log(userList);

  // 7 - Develop a bootstrap card and display first 20 users whose credit is greater than 50
  filteredUserList = userList.filter((user) => user.credit > 50).slice(0, 20);
  const userCardsContainer = document.getElementById("user-cards");
  userCardsContainer.innerHTML = "";
  userList.forEach((user) => {

    const html = 
        `
        <div class = "col-md-3 mb-4">
            <div class ="card">
                <img src="${user.picture}" class="card-img-top" alt="${user.fullName}">
                <div class="card-body">
                    <h5 class="card-title"> ${user.fullName}</h5>
                    <p class="card-text">Age: ${user.age}</p>
                    <p class="card-text">City: ${user.city}, Country: ${user.country}</p>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Username: ${user.username}</p>
                    <p class="card-text">Credit: ${user.credit}</p>
                </div>
            </div>
        </div>
        `;
    userCardsContainer.innerHTML += html;

  });
};

fetchData();

// 8 - Add 3 buttons to filter users as all, female and male

const allBtn = document.getElementById("filter-all");
const maleBtn = document.getElementById("filter-male");
const femaleBtn = document.getElementById("filter-female");

maleBtn.addEventListener("click", () => {
  filteredUserList = userList
    .filter((user) => user.gender === "male")
    .filter((user) => user.credit > 50)
    .slice(0, 20);
  const userCardsContainer = document.getElementById("user-cards");
  userCardsContainer.innerHTML = "";
  filteredUserList.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "col-md-3 mb-4";
    userCard.innerHTML = `
    <div class ="card">
    <img src="${user.picture}" class="card-img-top" alt="${user.fullName}">
    <div class="card-body">
    <h5 class="card-title">${user.fullName}</h5>
    <p class="card-text">Age: ${user.age}</p>
    <p class="card-text">City: ${user.city}, Country: ${user.country}</p>
    <p class="card-text">Email: ${user.email}</p>
    <p class="card-text">Username: ${user.username}</p>
    <p class="card-text">Credit: ${user.credit}</p>
    </div>
    </div>
    `;
    userCardsContainer.appendChild(userCard);
  });
});

femaleBtn.addEventListener("click", () => {
  filteredUserList = userList
    .filter((user) => user.gender === "female")
    .filter((user) => user.credit > 50)
    .slice(0, 20);
  const userCardsContainer = document.getElementById("user-cards");
  userCardsContainer.innerHTML = "";
  filteredUserList.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "col-md-3 mb-4";
    userCard.innerHTML = `
      <div class ="card">
      <img src="${user.picture}" class="card-img-top" alt="${user.fullName}">
      <div class="card-body">
      <h5 class="card-title">${user.fullName}</h5>
      <p class="card-text">Age: ${user.age}</p>
      <p class="card-text">City: ${user.city}, Country: ${user.country}</p>
      <p class="card-text">Email: ${user.email}</p>
      <p class="card-text">Username: ${user.username}</p>
      <p class="card-text">Credit: ${user.credit}</p>
      </div>
      </div>
      `;
    userCardsContainer.appendChild(userCard);
  });
});

allBtn.addEventListener("click", () => {
  filteredUserList = userList.filter((user) => user.credit > 50).slice(0, 20);
  const userCardsContainer = document.getElementById("user-cards");
  userCardsContainer.innerHTML = "";
  filteredUserList.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.className = "col-md-3 mb-4";
    userCard.innerHTML = `
      <div class ="card">
      <img src="${user.picture}" class="card-img-top" alt="${user.fullName}">
      <div class="card-body">
      <h5 class="card-title">${user.fullName}</h5>
      <p class="card-text">Age: ${user.age}</p>
      <p class="card-text">City: ${user.city}, Country: ${user.country}</p>
      <p class="card-text">Email: ${user.email}</p>
      <p class="card-text">Username: ${user.username}</p>
      <p class="card-text">Credit: ${user.credit}</p>
      </div>
      </div>
      `;
    userCardsContainer.appendChild(userCard);
  });
});
