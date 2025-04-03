const pickanumberbtn = document.getElementById("pickanumberbtn");
const result = document.getElementById("result");
const lotteryboxes = document.getElementById("lotteryboxes");
const tick = new Audio("tap.wav");
const completesound = new Audio("completesound.wav");
let gift = [
  "₹100 Cash",
  "Toy Car",
  "Chocolate Box",
  "₹500 Cash",
  "Smartphone Cover",
  "Book",
  "Headphones",
  "₹50 Cash",
  "Gift Voucher",
  "Watch",
  "Teddy Bear",
  "Bluetooth Speaker",
  "Movie Ticket",
  "₹200 Cash",
  "Puzzle Game",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Board Game",
  "Fitness Band",
  "Digital Clock",
  "Lamp",
  "Shopping Voucher",
  "Laptop Bag",
  "Wireless Mouse",
  "Travel Mug",
  "Notebook Set",
  "Gaming Mousepad",
  "₹250 Cash",
  "Keychain",
  "Water Bottle",
  "Portable Charger",
  "Desk Organizer",
  "Cooking Set",
  "Action Figure",
  "₹300 Cash",
  "Travel Pillow",
  "Mini Backpack",
  "Personalized Mug",
  "Gaming Controller",
  "Camera Strap",
  "Toy Robot",
  "₹750 Cash",
  "Sports Equipment",
  "Pen Set",
  "Bluetooth Earbuds",
  "Digital Photo Frame",
  "Wallet",
  "Backpack",
  "Gift Hamper",
];

pickanumberbtn.addEventListener("click", function () {
  for (i = 1; i < 50; i++) {
    document.getElementById(i).classList.remove("winningitem");
  }
  result.textContent = "please wait....";
  // setTimeout(function () {
  //   let randomnumber = Math.random() * 50;
  //   let drawnnumber = Math.floor(randomnumber);
  //   giftitem = gift[drawnnumber - 1];
  //   result.textContent = `you got the ${drawnnumber}, you have Won ${giftitem} 🎉`;
  //   document.getElementById(drawnnumber).classList.add("winningitem");
  // }, 5000);
  let secondcount = 0;
  const intervalid = setInterval(function () {
    tick.pause();
    tick.currentTime = 0;
    tick.play();
    secondcount = secondcount + 1;
    let randombox = Math.floor(Math.random() * 50) + 1;
    for (i = 1; i < 50; i++) {
      if (i === randombox) {
        document.getElementById(i).classList.add("highlightedbox");
      } else {
        document.getElementById(i).classList.remove("highlightedbox");
      }
    }

    // document.getElementById(randombox).classList.add("highligtedbox");
    if (secondcount == 5) {
      let randomnumber = Math.random() * 50;
      let drawnnumber = Math.floor(randomnumber);
      giftitem = gift[drawnnumber - 1];
      result.textContent = `you got the ${drawnnumber}, you have Won ${giftitem} 🎉`;
      completesound.pause();
      completesound.currentTime = 0;
      completesound.play();
      document.getElementById(randombox).classList.remove("highlightedbox");
      document.getElementById(drawnnumber).classList.add("winningitem");
      clearInterval(intervalid);
    }
  }, 1000);
});
gift.forEach(function (value, i) {
  const boxelements = `<div class ="box" id=${i + 1}>${i + 1}. ${value}</div>`;
  console.log(boxelements);
  lotteryboxes.insertAdjacentHTML("beforeend", boxelements);
});
