const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';
const b58Char = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

let returnValue = '';
let checkCounter = 0; //counter to evenly distribute types of pw elements

function generateHandler() {
  const pwLength = lenEl.value;

  for (let pwCounter = 0; pwCounter < pwLength; ) {
    randomVal = Math.floor(Math.random() * 4);
    // console.log('Random Val:', randomVal);
    if (randomVal === 0 && upperEl.checked) {
      getUpperCase();
      pwCounter++;
    } else if (randomVal === 1 && lowerEl.checked) {
      getLowerCase();
      console.log(lowerEl.checked);
      pwCounter++;
    } else if (randomVal === 2 && numberEl.checked) {
      getNumbers();
      pwCounter++;
    } else if (randomVal === 3 && symbolEl.checked) {
      getSymbols();
      pwCounter++;
    } else if (
      !upperEl.checked &&
      !lowerEl.checked &&
      !numberEl.checked &&
      !symbolEl.checked
    ) {
      return;
    }
  }


// pwEl.innerText = returnValue;

//Hash pw
let s256ReturnValue = sha256(returnValue);
//add 5 for mainnet prefix
let s256VersionReturnValue = '5' + s256ReturnValue; 
let checksum = sha256(sha256(s256VersionReturnValue)).substring(0, 8);
let privateKey = to_b58(checksum + s256VersionReturnValue, b58Char);
pwEl.innerText = privateKey;
  resetPw();
}

function resetPw() {
  returnValue = '';
}

function getUpperCase() {
  upperIdx = Math.floor(Math.random() * upperLetters.length);
  returnValue += upperLetters[upperIdx];
}

function getLowerCase() {
  lowerIdx = Math.floor(Math.random() * lowerLetters.length);
  returnValue += lowerLetters[lowerIdx];
}

function getNumbers() {
  numbersIdx = Math.floor(Math.random() * numbers.length);
  returnValue += numbers[numbersIdx];
}

function getSymbols() {
  symbolIdx = Math.floor(Math.random() * symbols.length);
  returnValue += symbols[symbolIdx];
}



//sha256

var sha256 = function sha256(ascii) {
	function rightRotate(value, amount) {
		return (value>>>amount) | (value<<(32 - amount));
	};
	
	var mathPow = Math.pow;
	var maxWord = mathPow(2, 32);
	var lengthProperty = 'length'
	var i, j; // Used as a counter across the whole file
	var result = ''

	var words = [];
	var asciiBitLength = ascii[lengthProperty]*8;
	
	//* caching results is optional - remove/add slash from front of this line to toggle
	// Initial hash value: first 32 bits of the fractional parts of the square roots of the first 8 primes
	// (we actually calculate the first 64, but extra values are just ignored)
	var hash = sha256.h = sha256.h || [];
	// Round constants: first 32 bits of the fractional parts of the cube roots of the first 64 primes
	var k = sha256.k = sha256.k || [];
	var primeCounter = k[lengthProperty];
	/*/
	var hash = [], k = [];
	var primeCounter = 0;
	//*/

	var isComposite = {};
	for (var candidate = 2; primeCounter < 64; candidate++) {
		if (!isComposite[candidate]) {
			for (i = 0; i < 313; i += candidate) {
				isComposite[i] = candidate;
			}
			hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
			k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
		}
	}
	
	ascii += '\x80' // Append Ƈ' bit (plus zero padding)
	while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
	for (i = 0; i < ascii[lengthProperty]; i++) {
		j = ascii.charCodeAt(i);
		if (j>>8) return; // ASCII check: only accept characters in range 0-255
		words[i>>2] |= j << ((3 - i)%4)*8;
	}
	words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
	words[words[lengthProperty]] = (asciiBitLength)
	
	// process each chunk
	for (j = 0; j < words[lengthProperty];) {
		var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
		var oldHash = hash;
		// This is now the undefinedworking hash", often labelled as variables a...g
		// (we have to truncate as well, otherwise extra entries at the end accumulate
		hash = hash.slice(0, 8);
		
		for (i = 0; i < 64; i++) {
			var i2 = i + j;
			// Expand the message into 64 words
			// Used below if 
			var w15 = w[i - 15], w2 = w[i - 2];

			// Iterate
			var a = hash[0], e = hash[4];
			var temp1 = hash[7]
				+ (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
				+ ((e&hash[5])^((~e)&hash[6])) // ch
				+ k[i]
				// Expand the message schedule if needed
				+ (w[i] = (i < 16) ? w[i] : (
						w[i - 16]
						+ (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
						+ w[i - 7]
						+ (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
					)|0
				);
			// This is only used once, so *could* be moved below, but it only saves 4 bytes and makes things unreadble
			var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
				+ ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
			
			hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
			hash[4] = (hash[4] + temp1)|0;
		}
		
		for (i = 0; i < 8; i++) {
			hash[i] = (hash[i] + oldHash[i])|0;
		}
	}
	
	for (i = 0; i < 8; i++) {
		for (j = 3; j + 1; j--) {
			var b = (hash[i]>>(j*8))&255;
			result += ((b < 16) ? 0 : '') + b.toString(16);
		}
	}
	return result;
};

// sha256 end

//base58
var to_b58 = function(
  B,            //Uint8Array raw byte input
  A             //Base58 characters (i.e. "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")
) {
  var d = [],   //the array for storing the stream of base58 digits
      s = "",   //the result string variable that will be returned
      i,        //the iterator variable for the byte input
      j,        //the iterator variable for the base58 digit array (d)
      c,        //the carry amount variable that is used to overflow from the current base58 digit to the next base58 digit
      n;        //a temporary placeholder variable for the current base58 digit
  for(i in B) { //loop through each byte in the input stream
      j = 0,                           //reset the base58 digit iterator
      c = B[i];                        //set the initial carry amount equal to the current byte amount
      s += c || s.length ^ i ? "" : 1; //prepend the result string with a "1" (0 in base58) if the byte stream is zero and non-zero bytes haven't been seen yet (to ensure correct decode length)
      while(j in d || c) {             //start looping through the digits until there are no more digits and no carry amount
          n = d[j];                    //set the placeholder for the current base58 digit
          n = n ? n * 256 + c : c;     //shift the current base58 one byte and add the carry amount (or just add the carry amount if this is a new digit)
          c = n / 58 | 0;              //find the new carry amount (floored integer of current digit divided by 58)
          d[j] = n % 58;               //reset the current base58 digit to the remainder (the carry amount will pass on the overflow)
          j++                          //iterate to the next base58 digit
      }
  }
  while(j--)        //since the base58 digits are backwards, loop through them in reverse order
      s += A[d[j]]; //lookup the character associated with each base58 digit
  return s          //return the final base58 string
}

//base 58 end

generateEl.addEventListener('click', generateHandler);
