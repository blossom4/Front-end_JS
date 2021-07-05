import { NavLink } from 'react-router-dom'

const activeStyle = { color: 'violet'}

export default function NavLinks() {
  return (
    <ul>
      <li>
        <NavLink to="/" exact activeStyle={ activeStyle }>Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile" exact activeStyle={ activeStyle }>Profile</NavLink>
      </li>
      <li>
        <NavLink to="/profile/1" exact activeStyle={ activeStyle }>Profile/1</NavLink>
      </li>
      <li>
        <NavLink 
          to="/about" 
          exact activeStyle={ activeStyle } 
          isActive={(match, location) => {
            // console.log(location)
            return match !== null && location.search === ''
          }}
          >
            About
          </NavLink>
      </li>
      <li>
        <NavLink 
          to="/about?name=blossom" 
          exact activeStyle={ activeStyle }
          isActive={(match, location) => {
            return match !== null && location.search === '?name=blossom'
          }}
          >
            About?name=blossom
          </NavLink>
      </li>
    </ul>
  )
}