export default function EmployeeCard(props: any) {
    const { user } = props;

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 100);
    }

    return (
        <div className="card">
            <img src={user.albums.data[0].photos.data[0].thumbnailUrl} alt="user-img" />
            <div className="card-body">
                <h3>{user.name}</h3>
                <div className="card-details">
                    <p>{user.email}</p>
                    <p>{user.company.name}</p>
                    <p>{user.website}</p>
                    <p>{user.address.city}</p>
                </div>
            </div>
            <div className="vote-information">
                <div className="vote-number">
                    <p>Vote Count</p>
                    <div>{generateRandomNumber()}</div>
                </div>
                <button type="button" className="vote-btn">Vote!</button>
            </div>
        </div>
    )
}
