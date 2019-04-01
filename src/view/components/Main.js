import React from "react"


class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const UserList = this.props.users
        console.log(UserList)

        return UserList.map(user => {
            return (
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src={user.picture} alt="" className="circle" />
                        <span className="title">{user.name.first} {user.name.last}</span>
                        <p><i className="fas fa-envelope-square"></i>{user.email} <br />
                            <i class="fas fa-birthday-cake"></i> {new Date(user.birthday).getDay()} .{new Date(user.birthday).getMonth()} .{new Date(user.birthday).getFullYear()}
                        </p>

                    </li>
                </ul>
            )

        })




    }
}




export { Main }