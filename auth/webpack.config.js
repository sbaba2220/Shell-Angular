const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'auth',
  exposes: {
    './LoginComponent': './src/app/auth/login/login.component.ts',
    './RegisterComponent': './src/app/auth/register/register.component.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});