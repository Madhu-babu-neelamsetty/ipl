import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-style">
      <li className="list-container">
        <img src={teamImageUrl} alt={name} className="team-image-url" />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
