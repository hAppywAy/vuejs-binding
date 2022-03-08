

// bootstrap de notre application VueJS
const app = new Vue({
  el: '#app',   // élément HTML du DOM visé
  data: {
    users: [
      {
        name: 'John',
        firstname: 'Doe',
        age: 21,
        gender: 'male',
        hobbies: ['guitare', 'Dance', 'Coding']
      },
      {
        name: 'Maria',
        firstname: 'Doe',
        age: 20,
        gender: 'female',
        hobbies: ['guitare', 'Piano', 'Cooking']
      },
      {
        name: 'Bob',
        firstname: 'Doe',
        age: 12,
        gender: 'male',
        hobbies: ['Legos', 'Cinema', 'Youtube']
      }
    ]
  },
  created() {
    console.log("isCreated");
  }
});

