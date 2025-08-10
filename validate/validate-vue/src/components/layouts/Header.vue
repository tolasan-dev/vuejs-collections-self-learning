<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- 🧭 Navbar Links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t("home") }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/product">{{
              $t("product")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">{{
              $t("contact")
            }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">{{
              $t("about")
            }}</router-link>
          </li>
        </ul>

        <!-- 🔍 Search -->
        <form class="d-flex me-3" role="search">
          <input
            class="form-control me-2"
            type="search"
            :placeholder="$t('search')"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            {{ $t("search") }}
          </button>
        </form>

        <!-- 🌐 Language Switcher -->
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle d-flex align-items-center gap-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img :src="currentFlag" alt="flag" width="20" height="14" />
            {{ currentLanguageLabel }}
          </button>

          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            <li>
              <a
                class="dropdown-item d-flex align-items-center gap-2"
                href="#"
                @click.prevent="onChange('en')"
              >
                <img :src="flagEn" alt="English" width="20" height="14" />
                English
              </a>
            </li>
            <li>
              <a
                class="dropdown-item d-flex align-items-center gap-2"
                href="#"
                @click.prevent="onChange('kh')"
              >
                <img :src="flagKh" alt="Khmer" width="20" height="14" />
                Khmer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

import flagEn from "@/assets/flags/england.jpg";
import flagKh from "@/assets/flags/kh.jpg";

const { locale } = useI18n();

const onChange = (lang) => {
  locale.value = lang;
  localStorage.setItem("lang", lang);
};

const currentLanguageLabel = computed(() =>
  locale.value === "kh" ? "ខ្មែរ" : "English"
);

const currentFlag = computed(() =>
  locale.value === "kh" ? flagKh : flagEn
);
</script>
