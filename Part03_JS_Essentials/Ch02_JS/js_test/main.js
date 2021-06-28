// 산술 연산자(arithmetic operator)

// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)

// 할당 연산자(assignment operator)

// let a = 2
// a += 1
// console.log(a)

// 비교 연산자(comparison operator)

// const a = 1
// const b = 3
// const c = 2 === 2

// console.log(a === b)

// function isEqual(x, y) {
//     return x === y
// }

// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))
// console.log(a !== b)
// console.log(c)
// console.log(!c)

// 삼항 연산자(ternary operator)

// const a = 1 < 2

// if (a) {
//     console.log('True')
// } else {
//     console.log('False')
// }

// console.log(a ? 'True' : 'False')

// 조건문(if statement)
// import random from './getRandom'

// const a = random()

// if (a === 0) {
//     console.log('a is 0')
// } else if (a === 2) {
//     console.log('a is 2')
// } else {
//     console.log('rest...')
// }

// switch (a) {
  // case 0:
  //   console.log('a is 0')
  //   break
  // case 2:
  //   console.log('a is 2')
  //   break
  // case 4:
  //   console.log('a is 4')
  //   break
  // default:
  //   console.log('rest...')
// }

// 반복문(for statement)
// for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul')
// console.log(ulEl)

// for (let i = 0; i < 10; i += 1) {
//   console.log(i)
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if (i % 2 === 0) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }

// 변수 유효범위(Variable Scope)
// var, let, const

// function scope () {
//   if (true) {
//     const a = 123
//     var b = 234
//     console.log(a)
//   }
//   // const는 scope밖으로 나갈 수 없다.
//   // console.log(a)
//   // var 함수범위에서 가능
//   console.log(b)
// }
// scope()

// 형 변환(Type conversion)

// const a = 1
// const b = '1'

// console.log(a == b)

// // Truthy (참 같은 값)
// // true, {}, [], 'false' ...

// // Falsy(거짓 같은 값)
// // false, '', null, undefined, 0, -0, NaN(1 + undefined)

// if (null) {
//   console.log(123)
// }