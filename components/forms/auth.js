import t from 'tcomb-form';

const SignUpSchema = t.struct({
  email: t.String,
  username: t.String,
  password: t.String
});

const SignUpOptions = {
  auto: 'placeholders',

  fields: {
    email: {
      error: 'Please enter an email address',
      attrs: {
        autoFocus: true,
        placeholder: 'Email address'
      }
    },

    username: {
      error: 'Please enter a username'
    },

    password: {
      error: 'Please enter a password',
      attrs: {
        placeholder: 'Create a password'
      }
    }
  }
};

export { SignUpSchema, SignUpOptions };
