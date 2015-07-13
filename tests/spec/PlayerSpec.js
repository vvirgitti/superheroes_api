describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player("Robert");
  });

  it("should have a name", function() {
    expect(player.playerName).toEqual("Robert");
  });
});
