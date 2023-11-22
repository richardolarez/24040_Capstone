import React from "react";
import { useState } from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // If login is successful, redirect to menu page
        if (username === "example" && password === "password") {
            console.log("Login Good");
            localStorage.setItem('isLoggedIn', 'true');
            history("/menu");
        } else {
            window.alert("Login bad");
        }
    };

    return (
        <div>
            <head>
                <title>J.A.N.U.S. Login</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <h2 class="banner">
                    <img src="Engineering.png" alt="Engineering" />
                    <img src="NGC.png" alt="NGC logo" />
                </h2>

                <div class="logo">
                    <h3 class="name">J.A.N.U.S.</h3>
                    <h3 class="name2">Electrical & Technical Diagram Assistant</h3>
                    <form class="center-form" onSubmit={handleLogin}>
                        <label for="username"></label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <br></br>
                        <label for="password"></label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br></br>
                        <input class="button" type="submit" value="Login" />
                    </form>
                </div>
                <script src="script.js"></script>
            </body>
        </div>
    );
}

export default Login;
