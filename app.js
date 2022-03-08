// bootstrap de notre application VueJS
const app = new Vue({
  el: '#toto',   // élément HTML du DOM visé
  data: {
    // données réactives
    monNombre: 123,
    textBim: "bimbamboom",
    anArrayOfStrings: [
      "bim",
      "bam",
      "bam",
      "boom",
    ],
    user: {
      firstname: "Joe",
      lastname: "Doe"
    },
    isActive: false,
    show: false
  }
});
