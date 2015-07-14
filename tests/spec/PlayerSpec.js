describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player(name);
  });

  it("should have a name", function() {
    player.chooseName("Hulk");
    expect(player.name).toEqual("Hulk");
  });

  it("should have a weapon", function(){
    player.chooseWeapon("Rock");
    expect(player.weapon).toEqual("Rock");
  });
});
