import React from 'react';
import './sign-in.style.scss';
import FormInput from '../form-iput/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passward: ''
    };
  }
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', passward: '' });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have account</h2>
        <span>Sign in with your email and passward</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            label='email'
            name='email'
            type='email'
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            label='password'
            name='password'
            type='password'
            value={this.state.password}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
