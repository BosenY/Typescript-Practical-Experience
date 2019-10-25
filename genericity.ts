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