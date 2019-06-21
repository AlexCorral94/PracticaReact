import * as React from "react";

function FormComponent(props) {
    const onSubmit = (event) => {
        event.preventDefault();
        const values = {};

        for (const { name, value } of event.target) {
            values[name] = value;
        }

        props.onSubmit(values);

        return false;
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="username"
                    placeholder="UserName"
                />
                <br/>
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                />
                <br/>
                <button
                    type='submit'
                    value='LogIn'
                    color='#1ed75f'
                >
                    Ingresar
                </button>
            </form>
            {
                !!props.error && (
                    <p>{props.error}</p>
                )
            }
        </div>
    );
}

export default FormComponent;