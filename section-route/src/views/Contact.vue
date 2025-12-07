t
<template>
  <div class="contact-page py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="feature-card shadow-lg border-0 p-4 rounded-4">
            <h2 class="fw-bold text-center mb-3">Contact Us</h2>
            <p class="text-muted text-center">
              Send us a message and we’ll reply as soon as possible.
            </p>

            <form>
              <div class="mb-3">
                <label class="form-label">Your Name</label>
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Enter name"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control form-control-lg"
                  placeholder="Enter email"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Message</label>
                <textarea
                  rows="4"
                  class="form-control form-control-lg"
                  placeholder="Write your message"
                ></textarea>
              </div>

              <div class="text-center">
                <button class="btn btn-primary btn-lg px-5" @click="work">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

function work() {
  alert();
}
</script>
<style scoped></style>
