<template>
    <q-page class="q-pa-sm">
            <!-- Desktop -->
            <div v-if="$q.screen.gt.xs" class= "row full-width q-col-gutter-sm q-pr-sm text-center justify-center">
                <q-form ref="form" class="full-width">
                    <div class="col-12 q-mt-md text-h6 text-primary">
                        Datos de contacto
                    </div>
                    <div class="row justify-center">
                        <q-input autofocus v-model="customer.name" @input="resetVal" outlined label="Nombre" class="col-8 q-mt-lg text-h7 text-primary" lazy-rules="ondemand" :rules="[val=> !!val || 'Campo Obligatorio']" ref="nameField">
                        </q-input>
                        <q-select outlined v-model="payement.payementSelected" :options="payement.options" label="Método de pago" class="col-8 q-mt-lg text-h7 text-primary"/>
                        <q-input outlined v-model="customer.address" label="Dirección Completa" class="col-8 q-mt-lg text-h7 text-primary">
                        </q-input>
                        <q-input outlined v-model="customer.postalCode" label="C.P" class="col-8 q-mt-lg text-h7 text-primary">
                        </q-input>
                    </div>                


                    <div class="col-12">
                    </div>

                </q-form>
                <div class="col-12 q-mt-xl q-mb-lg" >
                    <q-btn v-if="$route.name == 'cartCheckout' " color="secondary" icon-right="shopping_cart" class=" shadow-2" label="FINALIZAR COMPRA"  @click="sendOrderToWhatsapp" />
                    <q-btn v-if="$route.name == 'orderNow' " color="secondary" icon-right="shopping_cart" class=" shadow-2" label="FINALIZAR COMPRA"  @click="sendOrderNowToWhatsapp" />
                </div>    
            </div>       
            <!-- Mobile -->
            <div v-if="!$q.screen.gt.xs" class= "row full-width q-col-gutter-sm q-pr-sm text-center justify-center">
                <q-form ref="form">
                    <div class="col-12 q-mt-md text-h6 text-primary">
                        Datos de contacto
                    </div>                
                    <q-input autofocus v-model="customer.name" @input="resetVal" outlined label="Nombre" class="col-12 q-mt-md text-h6 text-primary" lazy-rules="ondemand" :rules="[val=> !!val || 'Campo Obligatorio']" ref="nameField">
                    </q-input>
                    <q-select outlined v-model="payement.payementSelected" :options="payement.options" label="Método de pago" class="col-12 q-mt-md text-h6 text-primary"/>
                    <q-input outlined v-model="customer.address" label="Dirección Completa" class="col-12 q-mt-md q-pb-sm text-h6 text-primary">
                    </q-input>
                    <q-input outlined v-model="customer.postalCode" label="C.P" class="col-12 q-mt-md text-h6 text-primary">
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
                    <q-btn v-if="$route.name == 'cartCheckout' " color="secondary" icon-right="shopping_cart" class=" shadow-2" label="FINALIZAR COMPRA"  @click="sendOrderToWhatsapp" />
                    <q-btn v-if="$route.name == 'orderNow' " color="secondary" icon-right="shopping_cart" class=" shadow-2" label="FINALIZAR COMPRA"  @click="sendOrderNowToWhatsapp" />
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
import mapExtra from 'src/mixins/mapExtra.js'
export default {
    name: 'cartCheckout',
    mixins:[mapCart,mapExtra],

    data(){
        return {
            customer: {
                name: "",
                address:"",
                postalCode:"",
            },
            payement:{
                payementSelected:null,
                options:['Efectivo', 'Transferencia', 'Tarjeta de Crédito', 'Mercado Pago']
            }
        }
    },
    methods: {
        sendOrderToWhatsapp() {
            this.$refs.nameField.validate() 
            if(this.$refs.nameField.innerError){
                return
            }
            if(!this.customer.address){
                this.customer.address="No específica"
            }
            if(!this.customer.postalCode){
                this.customer.postalCode="No específica"
            }
            let payementMethod= this.payement.payementSelected
            if(!payementMethod){
                payementMethod = "No específica"
            }
            //armo el text basándome en this.order(con un forEach) y this.customer
            //"%0D%0A" es para mandarle un newLine o enter al mensaje de wsp y que quede organizado sin ser choclazo.
            let text = this.customer.name + " ha solicitado enviar un pedido a: " + "%0D%0A"+ `Direccion: ${this.customer.address}` +'%0D%0A' + `C.P: ${this.customer.postalCode}` +"%0D%0A"+ `Método de pago: ${payementMethod}` + "%0D%0A"+ "*(Click en enviar mensaje para que podamos ver su solicitud de compra)*"
            let total_price
            this.cartProducts.forEach(order_detail => {
                text += "%0D%0A" + "------"+ "%0D%0A"  +  "Detalles del pedido: " + "%0D%0A" + "%0D%0A"+ "Producto: " + order_detail.name + "%0D%0A" + " Cantidad: " + `${order_detail.quantitySelected}` + "%0D%0A" + "Precio : " + `$ ${order_detail.partialPrice}`
            })
            text += "%0D%0A"+ "------" + "%0D%0A"+ "Precio Total: " + `$ ${this.GetCartProductsTotalPrice()}`

            let trimedPhone= this.contact[0].phone.split(' ').join('').split('-').join('')
            let link = `https://wa.me/${trimedPhone}?text=${text}`
            //let link = `https://wa.me/${this.contact[0].phone}?text=${text}`

            window.open(link, "_blank")
        },
        sendOrderNowToWhatsapp(){
            this.$refs.nameField.validate()
            if(this.$refs.nameField.innerError){
                return
            }
            if(!this.customer.address){
                this.customer.address="No específica"
            }
            if(!this.customer.postalCode){
                this.customer.postalCode="No específica"
            }
            let payementMethod= this.payement.payementSelected
            if(!payementMethod){
                payementMethod = "No específica"
            }
            //armo el text basándome en this.order(con un forEach) y this.customer
            //"%0D%0A" es para mandarle un newLine o enter al mensaje de wsp y que quede organizado sin ser choclazo.
            let text = this.customer.name + " ha solicitado enviar un pedido a: " + "%0D%0A"+ `Direccion: ${this.customer.address}` +'%0D%0A' + `C.P: ${this.customer.postalCode}` +"%0D%0A"+ `Método de pago: ${payementMethod}` + "%0D%0A"+ "*(Click en enviar mensaje para que podamos ver su solicitud de compra)*"
            let total_price
            text += "%0D%0A" + "------"+ "%0D%0A"  +  "Detalles del pedido: " + "%0D%0A" + "%0D%0A"+ "Producto: " + this.cartOrderNow.name + "%0D%0A" + " Cantidad: " + `${this.cartOrderNow.quantitySelected}` + "%0D%0A" + "Precio : " + `$ ${this.cartOrderNow.price * this.cartOrderNow.quantitySelected}`
            
            let trimedPhone= this.contact[0].phone.split(' ').join('').split('-').join('')
            let link = `https://wa.me/${trimedPhone}?text=${text}`
            //let link = `https://wa.me/${this.contact[0].phone}?text=${text}`

            window.open(link, "_blank")
        },
        resetVal(){
            this.$refs.nameField.resetValidation()
        }
    }
}

</script>


