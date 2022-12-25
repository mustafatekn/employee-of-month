import { useParams } from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { getEmployee } from "../queries";

export default function EmployeeDetails() {
    const params = useParams()
    const { loading, error, data } = useQuery(getEmployee(params.id!))
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return (
        <div className="container">
            <header className='user-details-header'>
                <img src={data.user.albums.data[0].photos.data[0].thumbnailUrl} className="profile-image" />
            </header>
        </div>
    )
}
