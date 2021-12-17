import React, { useState, useEffect } from 'react';
import axios from 'axios';
import formSchema from './validation/formSchema';
import * as yup from 'yup';

// CSS
import './App.css';

// Components
import Form from './components/Form';
import UserTab from './components/UserTab';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}

const initialUsers = [
  // {name: 'Dylan', email: 'dylan@yahoo.com', password: 'password', terms: true},
  // {name: 'Dylan', email: 'dylan@yahoo.com', password: 'password', terms: true}
]

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState(initialUsers);
  const [formErrors, setFormErrors] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(true);

  const validate = (name,value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };

  const postNewUser = newUser => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then(resp => {
        setUsers([ resp.data, ...users ])
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      })
  };


  const formSubmit = () => {
    const newUser = {
      name: formValues.name,
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms,
    }
    postNewUser(newUser);
  };

  useEffect(() => {
    formSchema
      .isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues]);

  return (
    <div>
      <h1><center>Onboarding Users</center></h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.length > 0 ? (users.length === 1 ? <h3><center>User</center></h3> : <h3><center>Users</center></h3>) : null}
      {users.map((user, index) => <UserTab key={index} user={user} /> )}
      
    </div>
  );
}

export default App;