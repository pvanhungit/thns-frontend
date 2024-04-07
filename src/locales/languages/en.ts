console.log('  🇺🇸 Loaded EN');

export default {
  fields: {
    email_address: 'Email address',
    password: 'Password',
  },

  actions: {
    login: 'Login',
    search: 'Search',
  },

  header: {
    what_are_you_looking_for: 'What are you looking for?',
  },

  footer: {
    buy: 'Buy',
    warranty: 'Warranty',
  },

  auth: {
    sign_in_to: 'Sign in to {appName}',
    don_t_have_an_account: 'Don’t have an account?',
    get_started: 'Get started',
    or: 'or',
    forgot_password: 'Forgot password?',
    continue_with: 'Continue with {provider}',
  },
} as const;
