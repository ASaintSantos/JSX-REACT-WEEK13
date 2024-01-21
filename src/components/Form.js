import React from "react";

// const Forms =[{
//     First: "First Name",
//     Last: "Last Name",
//     Date: "Birthdate",
//     Email: "Email",
//     Phone: "Phone #",
// }]
export class Form extends React.Component {
    render () {
        return (
        <div className="border-secondary">
            <form>
                <input type="username" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
        );
    }
}



