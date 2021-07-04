export default function About(props) {
  console.log(props)
  const searchParams = props.location.search
  console.log(searchParams)
  const obj = new URLSearchParams(searchParams)
  console.log(obj.get('name'))
  return (
    <div>
      <h2>About</h2>
      { obj.get('name') && <p>name: { obj.get('name') }</p> }
    </div>
  )
}

// URLSearchParams를 지원하지 않는 브라우저와 호환하거나 key-value쌍으로 사용하기 원한다면
// npm i query-string해서 import하여 사용한다.

// import queryString from 'query-string'

// export default function About(props) {
//   console.log(props)
//   const searchParams = props.location.search
//   console.log(searchParams)
//   const query = queryString.parse(searchParams)
//   console.log(query)
//   return (
//     <div>
//       <h2>About</h2>
//       { query.name && <p>name: { query.name }</p> }
//     </div>
//   )
// }