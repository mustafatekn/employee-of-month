import './App.css';
import { useQuery, gql } from '@apollo/client';

function App() {
  const GET_LOCATIONS = gql`
  query {
	users{
    data{
      id
			name
      email
      address{
        street
        suite
        city
        zipcode
        geo{
          lat
          lng
        	
        }
      }
    }
  }
}
`;

function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data);
}

  return (
    <DisplayLocations/>
  );
}

export default App;
