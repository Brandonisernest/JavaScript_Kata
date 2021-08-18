const btn = document.getElementById('b-btn');

class FieldElement {
  constructor(_num, _prime) {
    if (_num >= _prime || _num < 0) {
      let error = `Num ${_num} is not in field range 0 to ${_prime - 1}`;
      throw error;
    }
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
    if (this.prime != other.prime) {
      throw `Cannot add numbers from different fields`;
    }
    let num = (this.num + other.num) % this.prime;
    return new FieldElement(num, this.prime);
  }

  sub(other) {
    if (this.prime != other.prime) {
      throw `Cannot add numbers from different fields`;
    }
    let num = (this.num - other.num) % this.prime;
    return new FieldElement(num, this.prime);
  }

  mul(other) {
    if (this.prime != other.prime) {
      throw `Cannot add numbers from different fields`;
    }
    let num = (this.num * other.num) % this.prime;
    return new FieldElement(num, this.prime);
  }

  pow(exponent) {
    let n = exponent % (this.prime - 1);
    let num = fastModularExponentiation(this.num, n, this.prime);
    return new FieldElement(num, this.prime);
  }

  trueDiv(other) {
    if (this.prime != other.prime) {
      throw `Cannot add numbers from different fields`;
    }
    let valTwo = fastModularExponentiation(
      other.num,
      this.prime - 2,
      this.prime
    );
    let num = (this.num * valTwo) % this.prime;
    return new FieldElement(num, this.prime);
  }

  rmul(coefficient){
    let num = (this.num * coefficient) % this.prime;
    return new FieldElement(num, this.prime);
  }
}

const elem1 = new FieldElement(3, 31);
const elem2 = new FieldElement(24, 31);

// console.log(elem1.repr());
// console.log(elem1.eq(elem2));
// console.log(elem1.add(elem2));
console.log(elem1.trueDiv(elem2));

// console.log(assert(fastModularExponentiation(12, 53, 7), 3));
// console.log(assert(fastModularExponentiation(7, 12, 10), 1));
// console.log(assert(fastModularExponentiation(3, 51, 13), 1));

// console.log(fastModularExponentiation(12, 53, 7));


//////POINT SECTION