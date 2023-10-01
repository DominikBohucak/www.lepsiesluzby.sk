<template>
    <div class="govuk-width-container">
        <main class="govuk-main-wrapper">
            <div class="govuk-grid-column-full">
                <h2 class="govuk-heading-l">
                    Máte nápad ako zlepšiť elektronické služby ?
                </h2>
                <p>
                    Poďme do toho spolu a ukážme, kde je priestor na zlepšenie.
                </p>
            </div>
            <div class="govuk-grid-column-two-thirds">
                <form id="submit-form" action="/" method="post">
                    <fieldset class="govuk-fieldset">

                        <div class="govuk-form-group">
                            <label for="select-issueType" class="govuk-label">Čo chcem urobiť </label>


                            <select
                                class="govuk-select"
                                @change="selectIssueType"
                                v-model="form.issueType"
                            >
                                <option v-for="option in issueTypes" :value="option.id">{{ option.name }}</option>
                            </select>
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-summary" v-if="isBug">
                                Akú situáciu riešite?
                            </label>
                            <label class="govuk-label" for="govuk-input-summary" v-if="!isBug">
                                Môj nápad sa týka
                            </label>
                            <input
                                id="govuk-input-summary"
                                v-model="form.summary"
                                class="govuk-input"
                                :class="{ 'error-input': !valid.summary }"
                                name="govuk-input-summary"
                                type="text"
                                @blur="
                                    valid.summary = validInput(
                                        form.summary,
                                        'text'
                                    )
                                "
                            />
                            <span class="govuk-error-message">
                                <span class="govuk-visually-hidden">Error:</span>
                                Toto pole je povinné.
                            </span>
                        </div>

                        <div class="govuk-form-group" v-if="isBug">
                            <label for="govuk-input-url" class="govuk-label">
                                Na akej stránke (skopírujte odkaz url na stránku s problémom)
                            </label>
                            <input
                                id="govuk-input-url"
                                name="govuk-input-url"
                                v-model="form.url"
                                type="url"
                                class="govuk-input"
                                :class="{'error-input': !valid.url }"
                                @blur="
                                    valid.url = validInput(
                                        form.url,
                                        'url'
                                    )
                                "
                            />
                            <span class="govuk-error-message">
                                <span class="govuk-visually-hidden">Error:</span>
                                Toto pole je povinné.
                            </span>
                        </div>

                        <div class="govuk-form-group">
                            <label
                                class="govuk-label"
                                for="govuk-textarea-description"
                                v-if="isBug"
                            >Popíšte Váš problém</label
                            >
                            <label
                                class="govuk-label"
                                for="govuk-textarea-description"
                                v-if="!isBug"
                            >Popis námetu na zlepšenie</label
                            >
                            <textarea
                                id="govuk-textarea-description"
                                v-model="form.description"
                                class="govuk-textarea"
                                :class="{ 'error-input': !valid.description }"
                                name="govuk-textarea-description"
                                rows="5"
                                @blur="
                                  valid.description = validInput(
                                      form.description,
                                      'text'
                                  )
                              "
                            ></textarea>
                            <span class="govuk-error-message">
                                <span class="govuk-visually-hidden"
                                >Error:</span
                                >
                                Toto pole je povinné.
                            </span>
                        </div>


                        <div class="govuk-form-group">
                            <label class="govuk-label" for="file-upload"  v-if="isBug">
                                Príloha (jpg. screenshot)
                            </label>
                            <label class="govuk-label" for="file-upload"  v-if="!isBug">
                                Príloha (schéma, podrobnejšie zdôvodnenie námetu, a pod.)
                            </label>
                            <nd-files @file="form.files = $event"></nd-files>
                        </div>

                        <div
                            class="govuk-form-group"
                            v-if="isBug"
                        >
                            (Vďaka kontaktným údajom môžte rýchlejšie vyriešiť problém)
                        </div>

                        <div
                            class="govuk-form-group"
                            v-if="!isBug"
                        >
                            (Vďaka kontaktným údajom môžme spolupracovať so štátnou správou na zlepšení e-služieb)
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-name">
                                Meno a priezvisko
                                <em>(nepovinné)</em>
                            </label>
                            <input
                                id="govuk-input-name"
                                v-model="form.name"
                                class="govuk-input govuk-!-width-two-thirds"
                                name="govuk-input-name"
                                type="text"
                            />
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-email">
                                Telefónne číslo
                                <em>(nepovinné)</em>
                            </label>
                            <input
                                id="govuk-input-phone"
                                v-model="form.phone"
                                class="govuk-input govuk-!-width-two-thirds"
                                :class="{ 'error-input': !valid.phone }"
                                name="govuk-input"
                                type="text"
                                @blur="
                              valid.phone =
                                (form.phone === '' ||
                                validInput(form.phone, 'phone'))
                            "
                            />
                            <span class="govuk-error-message">
                                <span class="govuk-visually-hidden"
                                >Error:</span
                                >
                                 Telefónne číslo je v nesprávnej forme.
                            </span>
                        </div>

                        <div class="govuk-form-group">
                            <label class="govuk-label" for="govuk-input-email">
                                E-mail
                                <em>(nepovinné)</em>
                            </label>
                            <input
                                id="govuk-input-email"
                                v-model="form.email"
                                class="govuk-input govuk-!-width-two-thirds"
                                :class="{ 'error-input': !valid.email }"
                                name="govuk-input-email"
                                type="text"
                                @blur="
                                    valid.email =
                                        form.email === '' ||
                                        validInput(form.email, 'email')
                                "
                            />
                            <span class="govuk-error-message">
                                <span class="govuk-visually-hidden"
                                >Error:</span
                                >
                                Email je v nesprávnej forme.
                            </span>
                        </div>



                        <button
                            class="govuk-button"
                            :disabled="!gdpr || !isValidForm"
                            @click.prevent="createIssue"
                        >
                            Vytvoriť
                        </button>
                        <div class="govuk-checkboxes suhlas">
                            <div class="govuk-checkboxes__item">
                                <input
                                    v-model="gdpr"
                                    class="govuk-checkboxes__input"
                                    type="checkbox"
                                />
                                <label
                                    class="govuk-label govuk-checkboxes__label"
                                >
                                    Súhlasím so spracovaním osobných údajov v
                                    súlade s nariadením
                                    <a
                                        href="https://slovensko.digital/ochrana-osobnych-udajov"
                                        target="_blank"
                                    >GDPR o ochrane osobných údajov</a
                                    >.
                                </label>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
import persona from "../jira_personas";

export default {
    data() {
        return {
            token: "",
            gdpr: false,
            hasSent: false,
            hasOptions: false,
            isBug: true,
            form: {
                issueType: 20,
                categories: {
                    persona: "Žiadne",
                    field: null,
                },
                url: "",
                summary: "",
                description: "",
                files: [],
                name: "",
                surname: "",
                email: "",
                phone: "",
            },
            valid: {
                // True at the begining for the scss class
                description: true,
                summary: true,
                email: true,
                url: true,
                phone: true,
            },
            categories: {
                persona,
            },
            issueTypes: [
                {
                    name: "Sťažnosť na fungovanie e-služieb",
                    id: 20
                },
                {
                    name: "Mám nápad na zlepšenie e-služieb",
                    id: 19
                },
            ],
        };
    },
    computed: {
        isValidForm: function () {
            let validity = false;
            // This disables the button if email is not it the right form
            let email = true;
            if (this.form.email !== "") {
                email = this.validInput(this.form.email, "email");
            }

            if (
                this.validInput(this.form.summary, "text") &&
                this.validInput(this.form.description, "text") &&
                email
            ) {
                validity = true;
            }
            return validity;
        },
        subCategories: {
            get: function () {
                // There have to be options
                let options = [];
                let persona = this.form.categories.persona;
                if (persona && persona !== "Žiadne") {
                    let index = this.categories.persona.findIndex(
                        (category) => category.value === persona
                    );
                    if (this.categories.persona[index].children) {
                        options = options.concat(
                            this.categories.persona[index].children
                        );
                    }
                }
                return options;
            },
        },
    },
    methods: {
        async createIssue() {
            // (optional) Wait until recaptcha has been loaded.
            await this.$recaptchaLoaded();

            // Execute reCAPTCHA with action "issue".
            // Do stuff with the received token.
            this.token = await this.$recaptcha("issue");
            this.submitForm();
        },
        validInput: function (value, type) {
            let answer = false;
            let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let regPhone = /^[+,0-9]*$/;
            let regUrl = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

            switch (type) {
                case "email":
                    answer = regEmail.test(value);
                    break;
                case "text":
                    if (value !== "") {
                        answer = true;
                    }
                    break;
                case "url":
                    answer = regUrl.test(value);
                    break;
                case "phone":
                    answer = regPhone.test(value);
                    break;
                default:
                    break;
            }

            return answer;
        },
        logout: async function () {
            const logoutURL =
                "https://lepsiesluzby.atlassian.net/rest/auth/1/session";
            try {
                await this.axios.delete(logoutURL);
            } catch (error) {
                console.log(error);
            }
        },
        postData: async function (inputData) {
            const postURL = "https://api.lepsiesluzby.sk/issue/" + inputData.type;
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Accept": "application/json",
                    "Recaptcha-Token": this.token,
                    "Recaptcha-Action": "issue",
                },
            };

            try {
                await this.axios.post(postURL, inputData, config);
                this.$router.push("success");
                // }
            } catch (error) {
                this.$router.push({ name: "error", params: { data: error } });
                console.log(error);
            }
        },
        submitForm: function () {
            let data = this.form;

            const output = new FormData();
            output.append("summary", data.summary);
            output.append("description", data.description);
            output.append("name", data.name);
            output.append("surname", "");
            output.append("email", data.email.toLowerCase());
            output.append("phone", data.phone);
            output.append("type", "idea");
            output.type = "idea";

            if (this.isBug) {
                output.append("url", data.url);
                output.type = "problem";
            }

            if (this.form.files.length > 0) {
                this.form.files.forEach((file) => {
                    output.append("file", file);
                });
            }

            this.postData(output);
            this.hasSent = true;
        },
        selectIssueType: function (event) {
            this.isBug = (parseInt(event.target.value) === this.issueTypes[0].id);
        },
    },
};
</script>

<style lang="scss">
.suhlas {
    margin: 0 0 1rem 0;
    & label {
        padding: 0 0 0 1rem;
        font-size: 1rem;
        width: 75%;
    }
}
.error-input {
    outline: 3px solid red;
    & + .govuk-error-message {
        visibility: visible;
    }
}
.govuk-error-message {
    visibility: hidden;
    margin: 0.75rem 0;
}
#govuk-textarea-description {
    margin-bottom: 0;
}
.govuk-input-sublabel {
    margin-bottom: 10px;
    font-size: 0.8rem;
}
</style>
