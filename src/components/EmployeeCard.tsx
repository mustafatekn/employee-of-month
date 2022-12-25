import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons'

export default function EmployeeCard(props: any) {
    const { user } = props;

    return (
        <div className="card">
            <img src={user.albums.data[0].photos.data[0].thumbnailUrl} alt="user-img" />
            <div className="card-body">
                <h3>{user.name}</h3>
                <div className="card-details">
                    <p><FontAwesomeIcon icon={faEnvelope} width={16} /><span>{user.email}</span></p>
                    <p><FontAwesomeIcon icon={faBuilding} width={16} /><span>{user.company.name}</span></p>
                    <p><FontAwesomeIcon icon={faGlobe} width={16} /><span>{user.website}</span></p>
                    <p><FontAwesomeIcon icon={faLocationPin} width={16} /><span>{user.address.city}</span></p>
                </div>
            </div>
            <div className="vote-information">
                <div className="vote-number">
                    <p>Vote Count</p>
                    <div>{user.voteCount}</div>
                </div>
                <button type="button" className="vote-btn">Vote!</button>
            </div>
        </div>
    )
}
