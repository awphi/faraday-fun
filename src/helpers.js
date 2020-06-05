Node.prototype.empty = function() {
  while (this.firstChild) {
    this.firstChild.remove();
  }
};
