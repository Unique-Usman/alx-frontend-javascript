const nums = [1, 2, 3];
const numsIterator = nums[Symbol.iterator]();

for (const n of nums) {
  console.log(n);
}

console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());

function increment () {
  let a = 0;

  return {
    next () {
      a++;
      console.log(a);
    }
  };
}

const c = increment();

c.next();
c.next();
c.next();

function squared (num) {
  return {
    [Symbol.iterator] () {
      let n = 0;
      return {
        next () {
          n++;
          if (n <= num) {
            return {
              value: n * n,
              done: false
            };
          } else {
            return {
              value: undefined,
              done: true
            };
          }
        }
      };
    }
  };
}

for (const v of squared(10)) {
  console.log(v);
}

class NumberList {
  constructor () {
    this.numbers = [1, 2, 3, 4];
  }

  [Symbol.iterator] () {
    let currentIndex = -1;

    const numbers = this.numbers;
    return {
      next () {
        return {
          value: numbers[++currentIndex],
          donw: currentIndex >= numbers.length
        };
      }
    };
  }
}

const numList = new NumberList()[Symbol.iterator]();
console.log(numList.next());
