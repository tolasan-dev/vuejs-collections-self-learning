<template>
  <div class="home-page">
    <section class="hero text-center py-5">
      <div class="container">
        <div class="row">
          <div class="col-4">
            <img
              src="https://www.interior.gov.kh/leader-remark-leader.png"
              alt=""
            />
          </div>
          <div class="col-8">
            <h2>សារស្វាគមន៍របស់រដ្ឋមន្ត្រី</h2>
            <p>
              សូមស្វាគមន៍មកកាន់គេហទំព័រផ្លូវការរបស់ក្រសួងមហាផ្ទៃ!
              ក្នុងនាមជារដ្ឋមន្ត្រីខ្ញុំមានសេចក្តីសោមនស្សរីករាយ
              សូមស្វាគមន៍យ៉ាងកក់ក្តៅ​ចំពោះ​ការចូលទស្សនា​គេហទំព័រនេះ។
            </p>
            <router-link
              to="/about"
              class="btn btn-primary btn-lg px-3 mt-3 rounded-4"
            >
              អានលម្អិត <i class="bi bi-arrow-right-circle-fill ms-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="features py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-md-4">
            <div class="feature-card p-4 text-center shadow-sm rounded">
              <i class="bi bi-lightning-charge fs-1 text-primary"></i>
              <h4 class="mt-3">Fast Performance</h4>
              <p class="text-muted">Optimized with Vue 3 Composition API.</p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="feature-card p-4 text-center shadow-sm rounded">
              <i class="bi bi-brush fs-1 text-primary"></i>
              <h4 class="mt-3">Modern UI</h4>
              <p class="text-muted">
                Crafted with clean, sleek Bootstrap 5 components.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="feature-card p-4 text-center shadow-sm rounded">
              <i class="bi bi-phone fs-1 text-primary"></i>
              <h4 class="mt-3">Fully Responsive</h4>
              <p class="text-muted">Looks beautiful on any device.</p>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </div>
  <div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
</template>

<style>
.hero {
  background: linear-gradient(to bottom right, #f0ecc0, #eef1f5);
  border-radius: 10px;
}

.feature-card {
  transition: 0.3s;
  cursor: pointer;
}
.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
