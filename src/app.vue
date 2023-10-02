<template>
    <div class="govuk-template__body">
        <div class="navody-template__content">
            <!-- header -->
            <nd-header :options="headerOptions">
                <template v-slot:logo>
                    <img
                        id="logo-img"
                        src="/assets/images/logo_big.png"
                        alt="Logo"
                    />
                </template>
            </nd-header>
            <!-- content -->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
        <!-- footer -->
        <div class="navody-template__footer">
            <nd-footer></nd-footer>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headerOptions: {
                responsiveClass: "sdn-header-1200",
                productName: "lepšie služby",
                // FIXME: Parcel cannot get :src"" only src=""
                //productLogo: "assets/images/logo_big.png",
                navigation: [
                    {
                        href:
                            "https://slovensko.digital/projekty/lepsie-sluzby",
                        text: "O Projekte",
                    },
                    {
                        href:
                            "https://lepsiesluzby.atlassian.net/jira/dashboards/10001",
                        text: "Zadané podnety",
                    },
                ],
            },
        };
    },
    mounted() {
        let srcAttrs = document.querySelectorAll("[src]");

        srcAttrs.forEach((element) => {
            let srcStr = element.getAttribute("src");
            srcStr.replace("http://localhost:8000/", "./");
            element.setAttribute("src", srcStr);
        });
    },
    methods: {
        getRidOfRecaptchaBadge: function() {
            let badge = document.querySelector(".grecaptcha-badge");
            badge.parentNode.style.display = "none";
        },
    },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");

// FIXME: I'm screaming
.govuk-template__body {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
html,
body {
    font-family: "Roboto", sans-serif;
}
body {
    margin: 0;
}
#logo-img {
    width: 80px;
    height: 16px;
    right: -0.75rem;
    bottom: 0.15rem;
    position: relative;
}
</style>
