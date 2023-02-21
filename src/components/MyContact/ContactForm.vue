<template>
  <div class="form-container grid grid-flow-row w-full gap-4">
    <div class="form-alert">
      <AlertDialog
        :show="alertShow"
        :title="alertTitle"
        :description="alertDescription"
        :type="alertType"
      />
    </div>
    <div class="form-wrapper">
      <div class="grid grid-flow-row gap-4">
        <div class="grid grid-flow-col gap-4">
          <input
            v-model="form.name"
            type="text"
            placeholder="Name"
            class="
              py-3
              px-2
              rounded-sm
              shadow-sm
              border-b
              border-[var(--lightBackground)]
              focus:border-b-[1px] focus:border-[var(--primary)]
              caret-[var(--primary)]
              bg-[var(--lightBackground)]
            "
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="
              py-3
              px-2
              rounded-sm
              shadow-sm
              border-b
              border-[var(--lightBackground)]
              focus:border-b-[1px] focus:border-[var(--primary)]
              caret-[var(--primary)]
              bg-[var(--lightBackground)]
            "
          />
        </div>
        <div class="grid">
          <input
            v-model="form.subject"
            type="text"
            placeholder="Subject"
            class="
              py-3
              px-2
              rounded-sm
              shadow-sm
              border-b
              border-[var(--lightBackground)]
              focus:border-b-[1px] focus:border-[var(--primary)]
              caret-[var(--primary)]
              bg-[var(--lightBackground)]
            "
          />
        </div>
        <div class="grid">
          <textarea
            v-model="form.message"
            name="message"
            rows="8"
            placeholder="Message"
            class="
              py-3
              px-2
              rounded-sm
              shadow-sm
              border-b
              border-[var(--lightBackground)]
              focus:border-b-[1px] focus:border-[var(--primary)]
              caret-[var(--primary)]
              bg-[var(--lightBackground)]
            "
          ></textarea>
        </div>
        <div class="mt-3">
          <button
            type="button"
            v-customizebtn
            class="
              customizeBtn
              py-2
              px-2
              text-base
              text-[color:var(--btn-fontColor)]
              bg-[color:var(--primary)]
              font-medium
              rounded-md
              shadow-sm
              transition
              ease-in-out
              opacity-90
              hover:opacity-100 hover:bg-[color:var(--primary)]
              duration-300
              text-center
              w-full
            "
            @click="sendEmail()"
          >
            {{ sendLoading ? "Sending......" : "Send" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "@vue/reactivity";
import AlertDialog from "./AlertDialog.vue";
import emailjs, { init } from "@emailjs/browser";
init("ibnX7NKTwWmwmUFok");
export default {
  name: "ContactForm",
  components: { AlertDialog },
  setup() {
    //#1 catch input form with reactive
    const form = reactive({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    //#2 alert properties with ref

    const alertShow = ref(false);
    const alertTitle = ref("");
    const alertDescription = ref("");
    const alertType = ref("success");

    //3 const
    const sendLoading = ref(false);

    //#4 check validate email
    const checkValidateEmail = (email) => {
      const regex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
    };

    //#5 check Input Form
    const checkInput = () => {
      return form.subject == "" ||
        form.name == "" ||
        form.email == "" ||
        form.message == ""
        ? true
        : false;
    };

    //#6 set alert function

    const alertSet = ({ show, title, description, type }) => {
      alertShow.value = show;
      alertTitle.value = title;
      alertDescription.value = description;
      alertType.value = type;
    };

    //#7 check validate form

    const checkValidateForm = async (sendSuccess = false) => {
      if (sendSuccess === true) {
        alertSet({
          show: true,
          title: `Successfully Sent! I'll Check them later. 😁👍`,
          description: `It seams that your message was send successfuly. I'm not online always but I will definitely check your message when I go online.`,
          type: "success",
        });
        form.name = "";
        form.email = "";
        form.subject = "";
        form.message = "";
        return;
      }

      if (checkInput() === true) {
        alertSet({
          show: true,
          title: "Some Fields Are Empty 😢😭📧",
          description:
            "Sorry about that, it seems that there are empty fields. Please fill them all out.",
          type: "error",
        });
        return false;
      }
      if (checkValidateEmail(form.email) === false) {
        alertSet({
          show: true,
          title: "Oops! Invalid Email 😢😭📧",
          description:
            "Sorry about that, it seems that you have entered a wrong email format.",
          type: "error",
        });
        return false;
      }
      return true;
    };

    return {
      form,
      alertShow,
      alertType,
      alertTitle,
      alertDescription,
      sendLoading,
      checkValidateForm,
      async sendEmail() {
        alertShow.value = false; //#1 hidden alert box
        sendLoading.value = true;
        if (await checkValidateForm()) {
          emailjs
            .send("service_6grh6ph", "template_gqods6i", this.form)
            .then(() => {
              checkValidateForm(true); //set True for show alertSet Success
              sendLoading.value = false;
            })
            .catch((e) => {
              if (e.response.status == 500) {
                alertSet({
                  show: true,
                  title: "Oops! Email Does not Exist! 😢😭📧",
                  description:
                    "Sorry about that, it seems that you have entered a wrong email, I cant find it anywhere.",
                  type: "error",
                });
                sendLoading.value = false;
              }
            });
        } else {
          sendLoading.value = false;
        }
      },
    };
  },
};
</script>

<style lang='postcss'>
</style>