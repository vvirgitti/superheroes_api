var matchers = window['jasmine-jquery-matchers'];

describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player(name);
  });

  it("should have a name", function() {
    var newPlayer = new Player("Robert");
    expect(newPlayer.playerName).toEqual("Robert");
  });
});
