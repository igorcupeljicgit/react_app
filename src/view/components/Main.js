import React from "react"


const Main = (props) => {

    const listView = (props.users).map((user) => {
        return (
            <ul className={`collection ${user.gender}`}  >
                <li className={`collection-item avatar ${user.gender === "female" ? "#ffebee red lighten-5 " : ""}`}>
                    <img src={user.picture} alt="" className="circle" />
                    <span className="title ">{user.name}</span>
                    <p><i className="fas fa-envelope"></i> Email: {user.email} <br />
                        <i className="fas fa-birthday-cake"></i> {new Date(user.birthday).getDay()} .{new Date(user.birthday).getMonth()} .{new Date(user.birthday).getFullYear()}
                    </p>

                </li>
            </ul>)
    })

    const gridView = (props.users).map((user) => {
        return (

            <div className="col s4 ">
                <div className="card">
                    <div className="card-image">
                        <img src={user.picture} />
                        <span className="card-title">{user.name.slice(0, user.name.indexOf(" "))}</span>
                    </div>
                    <div className={`card-content ${user.gender === "female" ? "#ffebee red lighten-5 " : ""}`}>
                        <p>{user.email} <br />
                            Birthday date: {new Date(user.birthday).getDay()} .{new Date(user.birthday).getMonth()} .{new Date(user.birthday).getFullYear()}
                        </p>

                    </div>

                </div>
            </div>
        )
    })

    return (props.case) ? listView : gridView


}




export { Main }




















// class Main extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         const UserList = this.props.users
//         console.log(UserList)

//         return UserList.map(user => {
//             return (
//                 <div>
//                     ///list
//                     <ul className="collection">
//                         <li className="collection-item avatar">
//                             <img src={user.picture} alt="" className="circle" />
//                             <span className="title">{user.name.first} {user.name.last}</span>
//                             <p><i className="fas fa-envelope-square"></i>{user.email} <br />
//                                 <i class="fas fa-birthday-cake"></i> {new Date(user.birthday).getDay()} .{new Date(user.birthday).getMonth()} .{new Date(user.birthday).getFullYear()}
//                             </p>

//                         </li>
//                     </ul>

//                     ///grid
//                     <div className="col s4 ">
//                         <div className="card">
//                             <div className="card-image">
//                                 <img src={user.picture} />
//                                 <span className="card-title">{user.name.first} </span>
//                             </div>
//                             <div className="card-content">
//                                 <p><i className="fas fa-envelope-square"></i>{user.email} <br />
//                                     <i class="fas fa-birthday-cake"></i> {new Date(user.birthday).getDay()} .{new Date(user.birthday).getMonth()} .{new Date(user.birthday).getFullYear()}
//                                 </p>

//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             )

//         })




//     }
// }




