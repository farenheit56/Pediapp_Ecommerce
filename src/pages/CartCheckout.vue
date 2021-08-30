<template>
    <q-page class="q-pa-sm">
            <div class= "row full-width q-col-gutter-sm q-pr-sm text-center" :class="`${$q.screen.lt.md ? 'justify-center': ''}`">
                <q-form ref="form">
                    <div class="col-12 q-mt-md text-h6 text-primary">
                        Datos de contacto
                    </div>                
                    <q-input autofocus v-model="customer.name" @input="resetVal" outlined label="Nombre" class="col-12 q-mt-md text-h6 text-primary" lazy-rules="ondemand" :rules="[val=> !!val || 'Campo Obligatorio']" ref="nameField">
                    </q-input>
                    <q-input outlined label="E-mail" class="col-12 q-mt-md q-pb-sm text-h6 text-primary">
                    </q-input>
                    <q-input outlined label="Telefono" class="col-12 q-mt-lg text-h6 text-primary">
                    </q-input>    

                    <div class="col whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
                    <div class="col-12">
                    </div>
                    <div class="col q-pl-none whiteSpace-grid" :class="`${$q.screen.lt.md ? 'hidden': ''}`">
                        <!-- Add WhiteSpace When Screen is Medium or Large -->
                    </div>
                </q-form>
                <div class="col-12 q-mt-md q-mb-lg" >
                    <q-btn color="secondary" icon-right="shopping_cart" class=" shadow-2" label="FINALIZAR COMPRA"  @click="sendOrderToWhatsapp" />
                </div>    
            </div>
            <!-- Append extra element when reached certain scroll offset-->
<!--             <q-page-scroller expand position="top" :scroll-offset="250" :offset="[0, 0]">
                <div class="bg-grey full-width text-center">Up</div>
            </q-page-scroller> -->
  </q-page>
</template>

<script>
import mapCart from 'src/mixins/mapCart.js'
export default {
    name: 'cartCheckout',
    mixins:[mapCart],
    mounted(){
/*         this.$nextTick(_=>{
            this.$refs.nameField.focus()
        }) */
        if(this.cartProducts.length == 0){
            this.$router.push({path:'/'})
        }
    },
    data(){
        return {
            contact: [
                {
                    phone: 5491162459649
                }
            ],
            customer: {
                name: "",
            },
        }
    },
    methods: {
/*         getContactData() {
            api
            .get("contact")
            .then((response) => {
            this.contact = response.data;
            })
            .catch((e) => {
            console.log("error" + e);
            });
        }, */
        sendOrderToWhatsapp() {
            this.$refs.nameField.validate()
            if(this.$refs.nameField.innerError){
                return
            }
            //armo el text basándome en this.order(con un forEach) y this.customer
            //"%0D%0A" es para mandarle un newLine o enter al mensaje de wsp y que quede organizado sin ser choclazo.
            let text = this.customer.name + " ha solicitado el siguiente pedido:" +"%0D%0A"+ "*(Click en enviar mensaje para que podamos ver su solicitud de compra)*"
            let total_price
            this.cartProducts.forEach(order_detail => {
                text += "%0D%0A" + "------"+ "%0D%0A"  + "Producto: " + order_detail.name + "%0D%0A" + " Cantidad: " + `${order_detail.quantitySelected}` + "%0D%0A" + "Precio : " + `$ ${order_detail.partialPrice}`
            })
            text += "%0D%0A"+"------" +"%0D%0A"+ "Precio Total: " + `$ ${this.GetCartProductsTotalPrice()}`

            let link = `https://wa.me/${this.contact[0].phone}?text=${text}`

            window.open(link, "_blank")
        },
        resetVal(){
            this.$refs.nameField.resetValidation()
        }
    }

    
}

//Data obj e.g:
/* 
let data ={
    //order
    order: [
        {
        product_name: "Producto 1",
        product_amount: 5,
        product_price: 10
        },
    ],
    //customer
    customer:{
        name: 'nombre'
    }
} */
</script>


