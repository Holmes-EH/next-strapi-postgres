/* eslint-disable import/no-anonymous-default-export */

export default ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'contact@samuelholmes.tech',
        defaultReplyTo: 'contact@samuelholmes.tech',
        testAddress: 'contact@samuelholmes.tech',
      },
    },
  },
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    },
  },
})
