// src/pages/Login.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin = async () => {

        try {

            const response = await axios.get(
                `http://localhost:8080/getloginbyusername/${username}`
            );

            if(response.data){

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

                navigate("/dashboard");
            }

        } catch(err) {
            setError("Invalid Username");
        }
    };

    return (
        <div className="container mt-5">

            <div className="card p-4 shadow">

                <h2 className="text-center mb-4">
                    HRMS Login
                </h2>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

                <button
                    className="btn btn-primary"
                    onClick={handleLogin}
                >
                    Login
                </button>

                {error && (
                    <p className="text-danger mt-3">
                        {error}
                    </p>
                )}

            </div>

        </div>
    );
}

export default Login;