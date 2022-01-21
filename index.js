// const gen = () => Math.random().toString(16).slice(2)

console.log('--- start ---')

// for(let i = 0; i < 1e5; i++) {
//   console.log(`[command]${i} - ${gen()}`)
// }

console.log('[command]command content')
console.log('[info]info content')
console.log('[error]error content')
console.log('##[group]manual group')
console.log('manual group content')
console.log('##[endgroup]')

console.groupCollapsed('autogroup')
console.log('auto group content')
console.groupEnd('autogroup')
console.log('--- done ---')

console.log('\033[33mtest\033[39m')

console.log('<a href="https://google.com">test link</a>')

