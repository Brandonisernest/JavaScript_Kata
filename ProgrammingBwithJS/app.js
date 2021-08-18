const btn = document.getElementById('b-btn');

class FieldElement {
  constructor(_num, _prime) {
    this.num = _num;
    this.prime = _prime;
  }

  repr() {
    return `FieldElement_${this.num}(${this.prime})`;
  }

  eq(other) {
    if (other == null) {
      return false;
    }
    return this.num === other.num && this.prime === other.prime;
  }

  add(other) {
    if (other == null) {
      return false;
    }
    let num = (this.num + other.num) % this.prime;
    return new FieldElement(num, this.prime);
  }

  sub(other) {
    if (other == null) {
      return false;
    }
    let num = (this.num - other.num) % this.prime;
    return new FieldElement(num, this.prime);
  }

  mul(other) {
    if (other == null) {
      return false;
    }
    let num = (this.num * other.num) % this.prime;
    return new FieldElement(num, this.prime);
  }

  pow(exponent){
      let n = exponent % (this.prime - 1);
      let num = fastModularExponentiation(this.num, n, this.prime);
      return new FieldElement(num, this.prime);
  }

}

const elem1 = new FieldElement(17, 31);
const elem2 = new FieldElement(5, 31);

// console.log(elem1.repr());
// console.log(elem1.eq(elem2));
// console.log(elem1.add(elem2));
console.log(elem1.pow(3));

// console.log(assert(fastModularExponentiation(12, 53, 7), 3));
// console.log(assert(fastModularExponentiation(7, 12, 10), 1));
// console.log(assert(fastModularExponentiation(3, 51, 13), 1));

// console.log(fastModularExponentiation(12, 53, 7));