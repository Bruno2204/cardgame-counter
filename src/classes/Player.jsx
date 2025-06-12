export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.promise = 0;
    this.tricks = 0;
  }
  increasePromise() {
    this.promise = this.promise + 1;
  }
  decreasePromise() {
    this.promise = this.promise > 0 ? this.promise - 1 : 0;
  }
  increaseTricks() {
    this.tricks = this.tricks + 1;
  }
  decreaseTricks() {
    this.tricks = this.tricks > 0 ? this.tricks - 1 : 0;
  }
  calculateScore() {
    let score = this.tricks;

    if (this.promise === this.tricks) {
      score += 10;
      if (this.tricks > 3) {
        score += (this.tricks / 2) * 10 - 10;
      }
    }
    this.score = score + this.score;
  }
  reset() {
    this.promise = 0;
    this.tricks = 0;
  }
}
