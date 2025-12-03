# vue-validation

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## this is library provider form validation 

```npm install vee-validate yup


# implement code : 

```<script setup>
import { useForm, useField } from "vee-validate";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required")
});

const { handleSubmit } = useForm({ validationSchema: schema });
const { value: name, errorMessage: nameError } = useField("name");

const submitForm = handleSubmit(values => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit.prevent="submitForm">
    <input v-model="name" type="text">
    <p>{{ nameError }}</p>
    <button>Submit</button>
  </form>
</template>

