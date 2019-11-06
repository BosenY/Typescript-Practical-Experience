/**
 * to reverse array
 * @param items reversed array
 */
function reverse<T>(items: T[]): T[] {
  const toreturn: T[] = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

const sample = [1,2,3]
let reversed = reverse(sample)





function extend<T, U>(first: T, second: U):T & U {
  const result = <T & U & any>{};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}
const x = extend({ a: 'hello' }, { b: 42 });
console.log(x)