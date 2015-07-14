describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player(name);
  });

  it("should have a name", function() {
    player.chooseName("Robert");
    expect(player.name).toEqual("Robert");
  });

  it("should have a weapon", function(){
    player.chooseWeapon("Rock");
    expect(player.weapon).toEqual("Rock");
  });
});
