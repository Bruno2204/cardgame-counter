export class Player {
  constructor(name) {
    this.name = name;
    this.score = [0];
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
  getScore(round = 0) {
    return this.score[round];
  }
  getPromise(round = 0) {
    return this.promise;
  }
  getTricks(round = 0) {
    return this.tricks;
  }

  calculateScore(round = 0) {
    if (!this.score[round + 1]) {
      this.score.push(this.score[round]);
    }

    let score = this.tricks;

    if (this.promise === this.tricks) {
      score += 10;
      if (this.tricks > 3) {
        score += (this.tricks / 2) * 10 - 10;
      }
    }
    this.score[round + 1] += score;
  }
  reset() {
    this.promise = 0;
    this.tricks = 0;
  }
}
