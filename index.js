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

console.log('\u001b[1;31mFail to execute the task atom: Can not found task(git):拉取代码（GIT）| null\u001b[m')

