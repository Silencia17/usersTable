import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'

import { getUsers } from "../redux/users/usersReducer";

import './styles.css'

export default function UsersList () {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)

    const [filteredUsers, setFilteredUsers] = useState(users)
    const [searchValue, setSearchValue] = useState('')

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    useEffect(() => {
        if (searchValue.length >= 2) {
            const filtered = users.filter((user) =>
                user.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setFilteredUsers(filtered);
        } else {
            setFilteredUsers(users)
        }
    }, [searchValue, users])

    return (
        <div className="users-table-container">
            <h1>Users</h1>
            <input
                type="text"
                placeholder="Search by username"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className='search-input'
            />
            <table style={{width: '100%'}}>
                <thead>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company Name</th>
                    <th>Location</th>
                    <th>User posts</th>
                    <th>User content</th>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => {
                        return (
                            <tr className="table-row">
                                <td className="table-username">
                                    {user.name}
                                    <span>{user.username}</span>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.company?.name}</td>
                                <td>{user.address?.city}</td>
                                <td>
                                    <Link to={`/user/${user.id}/posts`}>Posts</Link> 
                                </td>
                                <td><Link to={`/user/${user.id}/albums`}>Albums</Link> </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
