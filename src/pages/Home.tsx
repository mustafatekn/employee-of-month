import { useQuery, gql } from "@apollo/client";
import { User } from '../types';

export default function Home() {
  const GET_LOCATIONS = gql`
    query {
      users {
        data {
          id
          name
          email
          address {
            street
            suite
            city
            zipcode
          }
          company {
            name
          }
          website
          albums{data{photos{data{thumbnailUrl}}}}
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="container pt-5">
      <div className="grid-container">
        {data.users.data.map((user: User) => (
          <div key={user.id} className="card">
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
          </div>
        ))}
      </div>
    </div>
  )
}
