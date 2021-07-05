import LoginButton from '../components/LoginButton'

export default function Login() {
  // console.log(props)
  // function login() {
  //   setTimeout(() => {
  //     props.history.push('/')
  //   }, 1000)
  // }
  return (
    <div>
      <h2>Login</h2>
      {/* <button onClick={login}>Login</button> */}
      <LoginButton />
    </div>
  )
}