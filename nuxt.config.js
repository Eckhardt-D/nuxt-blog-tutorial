export default {
  head: {
    title: "Kaizen Blogr.",
    meta: [{
      name: "description",
      hid: "description",
      content: "Read all about it.",
    }],
  },
  serverMiddleware: [
    {
      path: '/api/v1',
      handler: '~/api/index.js'
    }
  ]
};
