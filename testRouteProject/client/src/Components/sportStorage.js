export const sports = [
  {
    id: 1,
    name: "Basketball",
    players: 5,
    description: "Team sport where two teams try to score by shooting a ball through a hoop.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png" // public domain image :contentReference[oaicite:0]{index=0}
  },
  {
    id: 2,
    name: "Soccer",
    players: 11,
    description: "Also called football in many countries; two teams try to score goals by getting a ball into the opposing net.",
    imageUrl: "https://pixabay.com/get/gf3c6c12c926c109c6a87be7bb8d5bff1ea9ec1bc3e81663e7a8c1e50a5655bca3d771bf0c2e7624fa40f9f0a29ff0740_1280.jpg" // royalty-free soccer image :contentReference[oaicite:1]{index=1}
  },
  {
    id: 3,
    name: "Tennis",
    players: 2,
    description: "Players use rackets to hit a ball over a net and into the opponent’s court.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Tennis_Racket_and_Ball.jpg"
  },
  {
    id: 4,
    name: "Baseball",
    players: 9,
    description: "A bat-and-ball game where the offense tries to hit a pitch and run bases to score.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Baseball_%28crop%29.jpg"
  }
];

export function findSport(id) {
  return sports.find(function(sport) {
    return sport.id == id;
  })
}