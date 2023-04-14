"use strict";

const friends = ["Michael", "Steven", "Peter"];

const newLength = friends.push("Jay");
console.log(newLength);
console.log(friends);

friends.unshift("John");
console.log(friends);

const lastFriend = friends.pop();
console.log(lastFriend);
console.log(friends);

const firstFriend = friends.shift();
console.log(firstFriend);
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven"), friends.includes("Bob"));

friends.push(23);
console.log(friends.includes("23"));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter.");
} else {
    console.log("You don't have a friend called Peter.");
}
