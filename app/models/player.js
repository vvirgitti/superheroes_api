var Player = function(name){
  this.name = "";
  this.weapon = "";
};

Player.prototype.chooseName = function(playerName){
  this.name = playerName
};

Player.prototype.chooseWeapon = function(weaponType) {
  this.weapon = weaponType
};
