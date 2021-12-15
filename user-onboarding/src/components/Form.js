import '../App.css';


const Form = () => {
    return (
        <form className='form-content'>
            <h1>Hello</h1>
            <label>
                Name:
                <input
                    className='input'
                    type='text'
                    placeholder='Name'
                />
            </label>
            <label>
                Email:
                <input
                    className='input'
                    type='email'
                    placeholder='Email'
                />
            </label>
            <label>
                Password:
                <input
                    className='input'
                    type='password'
                    placeholder='Password'
                />
            </label>
            <label>
                <input type='checkbox' />
                Agree to Terms of Service
            </label>
            <button className='form-button'>Add User</button>
        </form>
    );
}

export default Form;