import React from 'react'
import User from './User'

const Users = ({ users, page }) => {
    const USER_PER_PAGE = 5

    const start = (page - 1) * USER_PER_PAGE
    const selectedUsers = users.slice(start, start + USER_PER_PAGE)

    return selectedUsers.map(user => (
        <User user={user} />
    ))
}

export default Users
