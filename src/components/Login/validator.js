import {
  required,
  minLength,
  email,
} from 'vuelidate/lib/validators';

export const validateData = {
  email: {
    required,
    email,
  },
  password: {
    required,
    minLength: minLength(6),
  },
};
