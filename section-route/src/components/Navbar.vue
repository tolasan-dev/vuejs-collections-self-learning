<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/images/logo-brand.png" alt="" />
        <span class="ms-2">ក្រសួងមហាផ្ទៃ</span>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="bi bi-house"></i> ទំព័រដើម
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              <i class="bi bi-info-circle"></i> អំពីយើង
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              <i class="bi bi-telephone"></i> ទាក់ទង
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/review">
              <i class="bi bi-chat-dots"></i> មតិអតិថិជន
            </router-link>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <button class="btn btn-lg px-3 rounded-4 fs-6">
            <i class="bi bi-envelope-fill me-2"></i>សារអេឡិចត្រូនិច
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
