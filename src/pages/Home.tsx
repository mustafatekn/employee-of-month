import { useEffect } from 'react';
import { useQuery } from "@apollo/client";
import EmployeeCard from "../components/EmployeeCard";
import { User } from '../types';
import { getEmployees } from "../queries";
import { useAppDispatch, useAppSelector } from "../store";
import { setEmployees } from "../store/features/employeeSlice";

export default function Home() {
  const { loading, error, data } = useQuery(getEmployees)
  const employees = useAppSelector(state => state.employees.employees)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!(!loading && data)) return;
    dispatch(setEmployees(data.users.data))
  }, [data, loading])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="container pt-5">
      <div className="grid-container">
        {employees.map((user: User) => <EmployeeCard user={user} key={user.id} />)}
      </div>
    </div>
  )
}
