if (process.env.NODE_ENV === 'development')
  module.exports = {
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
    },
  }

if (process.env.NODE_ENV === 'production')
  module.exports = {
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
    },
  }
