let clowns = {
  group: "Payasos",
  members: ["Gaby", "Fofó", "Miliki"],
  showList() {
     this.members.forEach(
        member => console.log(this.group + ': ' + member)
     );
  }
};

clowns.showList();
