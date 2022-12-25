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
            <header className='employee-details'>
                <div className='employee-details-header' />
                <div className='profile-image-wrapper'>
                    <img src={data.user.albums.data[0].photos.data[0].thumbnailUrl} className="profile-image" />
                </div>
                <div className='employee-information-wrapper'>
                    <div className='employee-information'>
                        <h2>{data.user.name}</h2>
                        <p>@{data.user.username.toLowerCase()}</p>
                        <p>{data.user.company.name}</p>
                    </div>

                    <div className='communication'>
                        <p>{data.user.email.toLowerCase()}</p>
                        <p>{data.user.website}</p>
                    </div>

                    <div className='address'>
                        <p>City: {data.user.address.city}</p>
                        <p>Street: {data.user.address.street}</p>
                        <p>Suite: {data.user.address.suite}</p>
                    </div>
                </div>

            </header>
        </div>
    )
}
