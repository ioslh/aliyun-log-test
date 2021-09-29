const gen = () => Math.random().toString(16).slice(2)

console.log('--- start ---')

for(let i = 0; i < 1e5; i++) {
  console.log(`${i} - ${gen()}`
}

console.log('--- done ---')
