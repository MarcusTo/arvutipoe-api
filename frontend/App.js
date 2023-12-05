export default {
  /*html*/
template: `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arvutipood - Landing Page</title>
  <!-- Bootstrap CSS -->
  <link href="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom CSS -->
  <style>
    /* Custom styles for the navbar */
    .navbar {
      background-color: #3498db; /* Blue color for the navbar */
      color: white;
    }

    .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .navbar-nav .nav-link {
      color: white;
      font-weight: bold;
    }

    .navbar-toggler {
      border-color: white;
    }

    .navbar-toggler-icon {
      background-color: white;
    }
  </style>
</head>

<body>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand">Arvutipood</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/orders">Orders</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container">
    <!-- Your router view or main content will go here -->
    <!-- This is just a placeholder for router view -->
    <router-view></router-view>
  </div>

  <!-- Bootstrap Bundle with Popper -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.bundle.min.js"></script>
</body>
  `,
  components: {
  }
}