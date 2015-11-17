
var ironMan = [
  {
    "Name":"Robert Downey",
    "Role": "Iron Man",
    "Key": "Arc Reactor"
  }
];

var wolverine = [
  {
    "Name": "Hugh Jackman",
    "Role": "Wolverine",
    "Key": "claws"
  }
]

exports.index = function(req, res){
  res.send(ironMan);
}

exports.xmen = function(req, res){
  res.send(wolverine);
}
