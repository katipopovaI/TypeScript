enum Membreship {
  Simple,
  Standard,
  Premium,
}

const membership = Membreship.Standard;
const membershipReverse = Membreship[2];
console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}
const social = SocialMedia.INSTAGRAM;
console.log(social);
