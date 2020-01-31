import t from 'tcomb-form';
import { Email, Username, Password } from '../../utils/refinements';

const SignUpSchema = t.struct({
  email:  Email,
  username: Username,
  password: Password
});

const SignUpOptions = (email, username) => {
  return {
    auto: 'placeholders',
  
    fields: {
      email: {
        ...email,
        attrs: {
          autoFocus: true,
          placeholder: 'Email address'
        }
      },
  
      username: {
        ...username
      },
  
      password: {
        type: 'password',
        attrs: {
          placeholder: 'Create a password'
        }
      }
    }
  };
}

export { SignUpSchema, SignUpOptions };
