function fill<IDontKnow>(array:any[], value:IDontKnow):IDontKnow[] {
  return array.map(() => value)
}

const result = fill([1, 2, 3], 'a')
const values = fill(['a', 'b', 'c'], 1)
