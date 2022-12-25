import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationPin, faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { useAppDispatch } from '../store';
import { vote } from '../store/features/employeeSlice';
import { User, IEmployeeCardProps } from '../types';

export default function EmployeeCard(props: IEmployeeCardProps) {
    const { user } = props;
    const dispatch = useAppDispatch();

    const onClickVote = (user: User) => {
        dispatch(vote(user));
    };

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
                <button type="button" className="vote-btn" onClick={() => onClickVote(user)}>Vote!</button>
            </div>
        </div>
    )
}
