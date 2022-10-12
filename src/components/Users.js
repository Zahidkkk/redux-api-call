import React from "react";
import { useSelector } from "react-redux/es/exports";
import './Users.css';

function Users() {
    const users = useSelector((state) => state.Test.users)
    console.log("users", users)


    return(
        <div className="container">
            <table>
                
                <tr>
                        <th>Serial No.</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                </tr>
                
                {users && users.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                            {item.address.street}, &nbsp;
                            {item.address.suite}, &nbsp;
                            {item.address.city},&nbsp;
                            {item.address.zipcode},&nbsp;
                            </td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Users;