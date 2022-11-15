const p = `
Betty Botter had some butter,  
But, she said, this butters bitter.  
If I bake this bitter butter,  
it would make my batter bitter.  
But a bit of better butter  
that would make my batter better.  
So she bought a bit of butter,  
better than her bitter butter,  
and she baked it in her batter,  
and the batter was not bitter.  
So twas better Betty Botter  
bought a bit of better butter.
`

const getUniqueWords = paragraph => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  const words = paragraph.split(' ')
  const result = {}

  alphabet.forEach(c => {
    result[c] = words.filter(w => {
      filter = w.split('').slice()
      return c === 'a'
    })
  })

  return result
}

const listsCollection = getUniqueWords(p)

console.log(listsCollection)
