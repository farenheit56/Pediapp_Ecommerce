<template>
  <div>
      <q-btn color="white" text-color="black" label="Enviar pedido" @click="sendOrderToWhatsapp" />
  </div>
</template>

<script>
//Guarda que no se vos como te levantas el endpoint, yo en el metodo getContactData() solo le paso el final de la url, sin http://localhost:puerto/api
import { api } from "../../boot/axios";

export default {
    data() {
        return {
            contact: {},
            order: [
                {
                product_name: "Producto 1",
                product_amount: 5,
                product_price: 10
                },
                {
                product_name: "Producto 2",
                product_amount: 3,
                product_price: 12
                }
            ],
            customer: {
                name: "Esteban Quito",
            },
        };
    },
    created() {
        //Me traigo inicialmente los datos de contacto del comercio
        this.getContactData()
    },
    computed: {

    },
    methods: {
        getContactData() {
            api
            .get("contact")
            .then((response) => {
            this.contact = response.data;
            })
            .catch((e) => {
            console.log("error" + e);
            });
        },
        sendOrderToWhatsapp() {
            //armo el text basándome en this.order(con un forEach) y this.customer
            //"%0D%0A" es para mandarle un newLine o enter al mensaje de wsp y que quede organizado sin ser choclazo.
            let text = this.customer.name + " ha solicitado el siguiente pedido:"
            let total_price = null
            this.order.forEach(order_detail => {
                text += "%0D%0A" + "Producto: " + order_detail.product_name + " Cantidad: " + order_detail.product_amount
                total_price +=order_detail.product_price
            })
            text += "%0D%0A" + "Precio Total: " + total_price

            let link = `https://wa.me/${this.contact[0].phone}?text=${text}`

            window.open(link, "_blank")
        }
    }
}
</script>

<style>

</style>