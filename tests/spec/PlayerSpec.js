var matchers = window['jasmine-jquery-matchers'];

describe("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player(name);
    jasmine.addMatchers(matchers);
  });

  it("should have a name", function() {
    expect($('<input type="text" id="superheroName">')).toHaveId('superheroName');
  });
});
