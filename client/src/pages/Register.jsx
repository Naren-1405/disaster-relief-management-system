import React from "react";

const Register = () => {
    return (
        <div>
            <h1>User Registration</h1>

            <form>

                <input
                    type="text"
                    placeholder="Name"
                />

                <br /><br />

                <input
                    type="email"
                    placeholder="Email"
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Phone"
                />

                <br /><br />

                <input
                    type="password"
                    placeholder="Password"
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Location"
                />

                <br /><br />

                <select>

                    <option>Victim</option>

                    <option>Volunteer</option>

                    <option>Relief Center</option>

                </select>

                <br /><br />

                <button>
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;