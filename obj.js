const player = {
  name: "Mustak",
  speed: 50,
  friends: ["Dabir", "Akash", "Kasem", "Baten", "Latu"],
  passion: {
    watch: "TV",
    play: "Football",
  },
  run: function () {
    return `${this.name} can run ${this.speed}km per hour`;
  },
};
// const output = player.run();
const { watch, play } = player.passion;
// const watch = player.passion.watch;
// console.log(watch);
// const play = player.passion.play;
// console.log(play);

// console.log(output);
const string = `${player.name} was watching ${player.passion.watch} with his friend ${player.friends[1]}`;
// console.log(string);

const zeroParam = () => {
  return 89;
};
// console.log(zeroParam());
const oneParam = (givenNum) => {
  return givenNum / 17;
};
// console.log(oneParam(34));

const twoParam = (first, second) => {
  return first + second / 2;
};
// console.log(twoParam(34, 50));

const multiParam = (first, second) => {
  firstAdd = first + 7;
  secondAdd = second + 7;
  total = firstAdd + secondAdd;
  return total;
};
// console.log(multiParam(34, 50));

const numbers = [7, 14, 21, 28, 35, 42];
const divided = numbers.map((num) => num / 7);
// console.log(divided);

const person = ["aamir", 8000, 23, 5.4];
const [name, balance, age, height] = person;
// console.log(balance);
