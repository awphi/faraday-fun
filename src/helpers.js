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
