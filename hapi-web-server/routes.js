const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman ini tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman ini tidak dapat diakses dengan method tersebut";
    },
  },

  // path parameter
  {
    method: "GET",
    path: "/users/{username}",
    handler: (request, h) => {
      const { username } = request.params;
      return `ini adalah halaman profil ${username}`;
    },
  },
  {
    method: "GET",
    path: "/users/greeting/{username?}",
    handler: (request, h) => {
      const { username = "Beddu" } = request.params;

      return `haii ${username}`;
    },
  },

  // path query
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "Beddu" } = request.params;
      const { lang } = request.query;

      if (lang === "id") {
        return `hello ${name}`;
      }

      return `haii ${name}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
