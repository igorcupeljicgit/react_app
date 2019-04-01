import React from "react"


class Grid extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const UserList = this.props.users
        console.log(UserList)

        return UserList.map(user => {
            return (

                <div className="col s4 ">
                    <div className="card">
                        <div className="card-image">
                            <img src={user.picture} />
                            <span className="card-title">{user.name.first} </span>
                        </div>
                        <div className="card-content">
                            <p><i className="fas fa-envelope-square"></i>{user.email} <br />
                                <i class="fas fa-birthday-cake"></i> {new Date(user.birthday).getDay()} .{new Date(user.birthday).getMonth()} .{new Date(user.birthday).getFullYear()}
                            </p>

                        </div>

                    </div>
                </div>

            )

        })




    }
}




export { Grid }