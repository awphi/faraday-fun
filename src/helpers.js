Node.prototype.empty = function() {
  while (this.firstChild) {
    this.firstChild.remove();
  }
};

Math.randRange = function(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

Math.constrict = function(a, minimum, maximum) {
  return Math.min(Math.max(a, minimum), maximum);
};

Array.prototype.exhaustiveRandomElement = function() {
  if (this.consumed === undefined) {
    this.consumed = [];
  }

  const r = Math.randRange(0, this.length - 1);
  const p = this[r];
  this.splice(r, 1);
  this.consumed.push(p);

  if (this.length === 0) {
    this.push(...this.consumed);
    this.consumed = [];
  }

  return p;
};
