var family = {
  address: "Seoul",
  members: {},
  addFamily: function (age, name, role) {
    this.members[role] = {
      age,
      name,
    };
  },
  getHeadcount: function () {
    return Object.keys(this.members).length;
  },
};

family.addFamily(30, "chloe", "aunt");
family.addFamily(3, "lyn", "niece");
family.addFamily(10, "dangdangi", "dog");

var printMembers = function () {
  var members = family.members;
  //   console.log(members);
  for (const role in members) {
    if (!members.hasOwnProperty(role)) continue;
    console.log(`role => ${role},
name => ${members[role].name},
age => ${members[role].age}`);
  }
};

printMembers();
