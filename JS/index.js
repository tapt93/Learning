Array.prototype.groupBy = function (prop) {
  return this.reduce(function (groups, item) {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups
  }, {})
}

const Player = (name, country) => ({ name, country });
const team = [
  Player('Tuan anh', 'VN'),
  Player('nam', 'VN'),
  Player('virgilk', 'HL'),
  Player('ronaldo', 'BDN'),
  Player('messi', 'ARG'),
  Player('vdb', 'HL'),
]
var x =team.groupBy('country');
console.log(x)