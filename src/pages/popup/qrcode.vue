<template>
    <div>
        <img :src="img" alt="" v-show="img">
    </div>
</template>

<script>
/* eslint-disable */
import getIP from "@/utils/getIP";
import QRCode from "qrcode";

export default {
    name: "qrcode",
    data () {
        return {
            img: '',
            url: ''
        }
    },
    methods: {
        localToNetwork() {
            chrome.tabs.getSelected(null, tab => {
                this.url = tab.url;
                let regx = /(localhost|127.0.0.1|0.0.0.0)/;
                if (regx.test(this.url)) {
                    getIP().then(ip => {
                        this.url = this.url.replace(regx, ip);
                        QRCode.toDataURL(this.url).then(img => {
                            this.img = img;
                        }).catch(err => {
                            console.error(err);
                        });
                    });
                } else {
                    QRCode.toDataURL(this.url).then(img => {
                        this.img = img;
                    }).catch(err => {
                        console.error(err);
                    });
                }
            });
        }
    },
    mounted() {
        this.localToNetwork();
    }
};
</script>