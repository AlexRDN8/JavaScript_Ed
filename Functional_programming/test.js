function* fibonacci() {
    let [prev, curr] = [0, 1];
    for (;;) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
}
let seq = fibonacci();
console.log(seq.next().value)
console.log(seq.next().value)
console.log(seq.next().value)
console.log(seq.next().value)
