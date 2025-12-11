<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
      <div class="container">
        <!-- Brand -->
        <router-link class="navbar-brand text-success fw-bold" to="/">
          My Vue App
        </router-link>

        <!-- Mobile Toggle Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Items -->
        <div class="collapse navbar-collapse" id="mainNavbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/about">About</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>

            <!-- Dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="productDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>

              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="productDropdown"
              >
                <li>
                  <router-link class="dropdown-item" to="/products"
                    >Product List</router-link
                  >
                </li>

                <li>
                  <router-link class="dropdown-item" to="/products/1"
                    >Product Detail (Demo)</router-link
                  >
                </li>

                <li><hr class="dropdown-divider" /></li>

                <li>
                  <router-link class="dropdown-item" to="/special"
                    >Special Offers</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.nav-link.router-link-active {
  font-weight: 600;
  color: #198754 !important; /* Highlight active link */
}
</style>
