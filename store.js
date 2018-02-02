const blueprints = require("./index.js")

const RikaPc = new blueprints.PentiumPc(
  "Dell",
  "Vostro",
  1500000,
  "white",
  1
)

const DavidUltrabook = new blueprints.Ultrabook(
  "Acer",
  "Aspire S7",
  10000000,
  1,
  2.00,
  "David",
  128,
  1
)

const DonoGamingLaptop = new blueprints.GamingLaptop(
  "Asus ROG",
  "Zephyr",
  20000000,
  1,
  3.00,
  "Dono",
  512,
  1,
  1080, [
    "Last of Us (2013)",
    "Monster Hunter World (2018)",
    "Assassin's Creed Origins (2017)"
  ]
)

DonoGamingLaptop.upgrade(512)
DavidUltrabook.upgrade(256)
console.log(DonoGamingLaptop /*.showGamesList()*/ )
console.log(DavidUltrabook)