import t from 'tcomb-form';
import { Email, Username, Password } from '../../utils/refinements';

const SignUpSchema = t.struct({
  email: Email,
  username: Username,
  password: Password
});

const SignInSchema = t.struct({
  username: Username,
  password: Password
});

const SettingsSchema = t.struct({
  name: t.String,
  username: t.maybe(Username),
  email: t.maybe(Email)
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
};

const SignInOptions = {
  auto: 'placeholders',

  fields: {
    username: {},

    password: {
      type: 'password',
      attrs: {
        placeholder: 'Password'
      }
    }
  }
};

const SettingsOptions = {
  auto: 'placeholders',

  fields: {
    name: {
      error: 'Please enter your name',
      attrs: {
        autoFocus: true,
        placeholder: 'Name'
      }
    },

    username: {
      disabled: true,
      attrs: {
        placeholder: 'Username'
      }
    },

    email: {
      disabled: true,
      attrs: {
        placeholder: 'Email address'
      }
    }
  }
};

export {
  SignUpSchema,
  SignUpOptions,
  SignInSchema,
  SignInOptions,
  SettingsSchema,
  SettingsOptions
};
