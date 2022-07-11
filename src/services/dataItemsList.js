//MK
import mortalKombat from "../../src/assets/Mortal-Kombat.jpg";
import edBoom from "../../src/assets/ed-boom.png";
import liuKang from "../../src/assets/liu-kang.png";
import scorpion from "../../src/assets/scorpion.png";
//STAR WARS
import lego from "../../src/assets/LEGO-Star-Wars.jpg";
import chewbacca from "../../src/assets/chewbacca.png";
import vader from "../../src/assets/Darth_vader.png";
import yoda from "../../src/assets/lego-yoda.png";

const itemsList = [
  {
    id: "mortal-kombat",
    imageName: "Mortal Kombat",
    imageAuthor: "Gus Morais",
    imageUrl: mortalKombat,
    itemList: [
      {
        id: "edboom",
        name: "Ed Boom",
        image: edBoom,
        found: false,
      },
      {
        id: "liu-kang",
        name: "Liu Kang",
        image: liuKang,
        found: false,
      },
      {
        id: "scorpion",
        name: "Scorpion",
        image: scorpion,
        found: false,
      },
    ],
  },
  {
    id: "lego-star-wars",
    imageName: "Lego Star Wars",
    imageAuthor: "Gus Morais",
    imageUrl: lego,
    itemList: [
      {
        id: "chewbacca",
        name: "Chewbacca",
        image: chewbacca,
        found: false,
      },
      {
        id: "darth-vader",
        name: "Darth Vader",
        image: vader,
        found: false,
      },
      {
        id: "yoda",
        name: "Yoda",
        image: yoda,
        found: false,
      },
    ],
  },
];

export { itemsList };
