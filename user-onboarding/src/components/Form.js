import '../App.css';


const Form = (props) => {
    const { values, change, submit, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form-content' onSubmit={onSubmit}>
            <h1>Create User</h1>
            <label>
                Name:
                <input
                    className='input'
                    placeholder='Enter your name'
                    type='text'
                    name='name'
                    onChange={onChange}
                    value={values.name}
                />
            </label>
            <div className='errors'>
                <p>{errors.name}</p>
            </div>
            <label>
                Email:
                <input
                    className='input'
                    placeholder='Enter your email'
                    type='text'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                />
            </label>
            <div className='errors'>
                <p>{errors.email}</p>
            </div>
            <label>
                Password:
                <input
                    className='input'
                    placeholder='Enter a password'
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                />
            </label>
            <div className='errors'>
                <p>{errors.password}</p>
            </div>
            <label>
                <input
                    type='checkbox'
                    name='terms'
                    onChange={onChange}
                    value={values.terms}
                />
                <span>Agree to Terms of Service</span>
            </label>
            <div className='errors'>
                <p>{errors.terms}</p>
            </div>
            <button className='form-button' disabled={disabled}>Create User</button>
        </form>
    );
}

export default Form;