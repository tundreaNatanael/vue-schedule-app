<template>
  <div class="space-y-4 p-4 bg-white rounded-lg shadow-md">
    <User :user="user" />

    <hr class="my-4" />

    <VForm @submit="onSubmit">
      <div class="text-lg font-semibold">Personal settings</div>

      <div class="flex items-center justify-right gap-8">
        <label for="nickname">Edit nickname</label>
        <Field
          id="nickname"
          name="nickname"
          type="text"
          v-model="formValues.nickname"
          class="border p-2"
        />
      </div>
      <ErrorMessage name="nickname" class="text-red-400" />

      <div class="flex items-center justify-right gap-8">
        <label for="emoji">Edit emoji</label>
        <Field
          id="emoji"
          name="emoji"
          type="text"
          v-model="formValues.emoji"
          class="border p-2"
        />
      </div>
      <ErrorMessage name="emoji" class="text-red-400" />

      <div class="text-lg font-semibold">General user setting</div>

      <div class="flex items-center justify-right gap-8">
        <label for="perWeekHours">Set max number of weekly hours</label>
        <Field
          id="perWeekHours"
          name="perWeekHours"
          type="number"
          v-model="formValues.perWeekHours"
          class="border p-2"
        />
      </div>
      <ErrorMessage name="perWeekHours" class="text-red-400" />

      <hr class="my-4" />
      <div class="flex justify-end">
        <Button type="submit" label="Save" class="bg-amber-600 text-white" />
      </div>
    </VForm>
  </div>
</template>

<script>
import { ref } from "vue";
import { Form as VForm, Field, ErrorMessage, configure } from "vee-validate";
import * as Yup from "yup";
import Button from "../components/Button.vue";
import User from "../components/User.vue";

const validationSchema = Yup.object().shape({
  nickname: Yup.string().required("Nickname is required"),
  emoji: Yup.string().required("Emoji is required"),
  perWeekHours: Yup.number()
    .min(0, "Cannot be lower than nothing")
    .max(168, "Cannot be more than 168")
    .required("Max user weekly hours is required"),
});

export default {
  components: {
    VForm,
    Field,
    ErrorMessage,
    Button,
    User,
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const formValues = ref({
      nickname: props.user.nickname || "",
      emoji: props.user.emoji || "",
      perWeekHours: props.user.perWeekHours || 0,
    });
    configure({
      validateOnInput: true,
    });

    const onSubmit = (values) => {
      console.log(values);
    };

    return {
      formValues,
      validationSchema,
      onSubmit,
    };
  },
};
</script>

<style scoped>
/* Add your scoped styles here */
</style>
