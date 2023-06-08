var Membreship;
(function (Membreship) {
    Membreship[Membreship["Simple"] = 0] = "Simple";
    Membreship[Membreship["Standard"] = 1] = "Standard";
    Membreship[Membreship["Premium"] = 2] = "Premium";
})(Membreship || (Membreship = {}));
var membership = Membreship.Standard;
var membershipReverse = Membreship[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
var social = SocialMedia.INSTAGRAM;
console.log(social);
