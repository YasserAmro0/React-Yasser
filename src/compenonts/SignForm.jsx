import React from "react";


export const SignForm = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [users, setUsers] = React.useState([]);
    const [confirmPass, setConfirmPass] = React.useState('');
    const [error, setError] = React.useState(false);
    const [confirm, setConfirm] = React.useState(false);
   


    const handleSubmit = () => {
        if (email === "" || password === "" || confirmPass === "") {
            setError(true);
        } else if (password !== confirmPass) {
            setConfirm(true);
        } else {
            setError(false);
            addUser();
        }
    }

    const addUser = () => {
        const addUser = {
            id: users.length + 1,
            email,
            password,
            confirmPass
        }
        setUsers([...users, addUser]);
    }

    const handlerDelete = (id) => {
        const removedUser = users.filter((user) => user.id !== id);
        setUsers(removedUser);
    }

    return (
        <div>
            <div>
                <input type='text' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="password" placeholder="Confirm Password" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)}></input>
                <button onClick={handleSubmit}>Submit</button>

                {
                    error ? <p>there is input Empty </p> : <p> </p>

                }
                {
                    confirm ? <p>Passwords Don't Match each others</p> : <p></p>
                }
                {
                    users.map((user) => {
                        return (
                            <div key={user.email}>
                                <p>Email: {user.email}</p>
                                <p>Password: {user.password}</p>
                                <button onClick={() => handlerDelete(user.id)} >Delete</button>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}