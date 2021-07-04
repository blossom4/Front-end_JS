export default function Profile(props) {
  console.log(props)
  const id = props.match.params.id
  console.log(id, typeof id)
  return (
    <div>
      <h2>Profile</h2>
      {id && <p>id: {id}</p>}
    </div>
  )
}