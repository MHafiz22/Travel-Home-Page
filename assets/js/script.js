const makeCoffe = (ingredient) => {
  return new Promise((resolve, reject) => {
    if (ingredient) {
      resolve("Kopi berhasil dibuat");
    } else {
      reject("kopi gagal dibuat");
    }
  });
};

makeCoffe().then(console.log).catch(console.log);

function getFullName(firstName = "Harry", lastName = "Potter") {
  return `${firstName} ${lastName}`;
}

const fullName = getFullName("Lily", undefined);

console.log(fullName);

const user = {
  name: "Harry Potter",
  origin: "England",
  enemy: "Lord Voldemort",
};

let { enemy } = user;
enemy = "Draco Malfoy";

console.log(user.enemy);
