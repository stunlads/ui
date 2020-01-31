import t from 'tcomb-form';
import _ from 'underscore';

const Email = t.refinement(t.String, n => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(n);
});

const Username = t.refinement(t.String, n => {
  return /^[a-zA-Z\-]+$/.test(n);
});

const Password = t.refinement(t.String, n => {
  return /^[a-zA-Z0-9]{6,}$/.test(n);
});

Email.getValidationErrorMessage = (value, path, context) => {
  if (_.isNull(value)) {
    return 'Please enter an email address';
  }

  return 'Please enter a valid email address';
};

Username.getValidationErrorMessage = (value, path, context) => {
  if (_.isNull(value)) {
    return 'Please enter a username';
  }

  return 'Usernames may only contain letters';
};

Password.getValidationErrorMessage = (value, path, context) => {
  if (_.isNull(value)) {
    return 'Please enter a password';
  }

  return 'Password must be at least 6 characters';
};

export { Email, Username, Password };
