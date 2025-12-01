<template>
  <div class="container">
    <form class="ui-card" @submit.prevent="onSubmitForm">
      <h2>Create Account</h2>
      <p class="subtitle">Join our community today</p>

      <!-- Email -->
      <div class="input-group">
        <label>Email</label>
        <input type="text" v-model="email" placeholder="Enter your email" />
        <p class="error" v-if="emailError">{{ emailError }}</p>
      </div>

      <!-- Password -->
      <div class="input-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password"
        />
      </div>

      <!-- Role -->
      <div class="input-group">
        <label>Role</label>
        <select v-model="role">
          <option value="">Select role</option>
          <option value="developer">Web Developer</option>
          <option value="designer">Web Designer</option>
        </select>
      </div>

      <!-- Terms -->
      <div class="terms-box">
        <input type="checkbox" v-model="term" />
        <label>I accept the terms & conditions</label>
      </div>

      <!-- Submit -->
      <button class="submit-btn" type="submit">Create Account</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      term: false,
      emailError: "",
    };
  },

  methods: {
    onSubmitForm() {
      // Email validation
      if (this.email.trim() === "") {
        this.emailError = "Email cannot be blank";
        return;
      } else {
        this.emailError = "";
      }

      console.log("Email:", this.email);
    },
  },
};
</script>

<style>
/* --- Container --- */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  min-height: 100vh;
}

/* --- Card --- */
.ui-card {
  width: 380px;
  background: white;
  padding: 35px;
  border-radius: 22px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  transition: 0.2s ease;
}

.ui-card:hover {
  transform: translateY(-4px);
  box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.12);
}

/* --- Texts --- */
h2 {
  margin: 0;
  font-weight: 700;
  color: #1a1a1a;
  font-size: 24px;
}

.subtitle {
  color: #6c6c6c;
  font-size: 14px;
  margin-bottom: 25px;
}

/* --- Input Group --- */
.input-group {
  margin-bottom: 20px;
}

label {
  font-size: 12px;
  font-weight: bold;
  color: #6a6a6a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

input,
select {
  width: 100%;
  margin-top: 6px;
  padding: 12px 14px;
  background: #f7f9fc;
  border: 1px solid #e3e7f0;
  border-radius: 12px;
  transition: 0.2s;
  font-size: 14px;
}

input:focus,
select:focus {
  border-color: #0b6dff;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(11, 109, 255, 0.15);
  outline: none;
}

/* --- Error Message --- */
.error {
  margin-top: 6px;
  color: #ff3b3b;
  font-size: 13px;
  font-weight: 600;
}

/* --- Checkbox Section --- */
.terms-box {
  display: flex;
  align-items: center;
  margin: 15px 0 20px;
}

.terms-box input {
  width: auto;
  margin-right: 10px;
}

.terms-box label {
  font-size: 14px;
  color: #555;
  text-transform: none;
  letter-spacing: 0;
}

/* --- Submit Button --- */
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #0b6dff;
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
}

.submit-btn:hover {
  background: #095ada;
  transform: translateY(-2px);
  box-shadow: 0px 8px 20px rgba(11, 109, 255, 0.3);
}
</style>
