let app = new Vue({
    el:'#carrito',
    data:{
        nums: [0,2,4],
        tenis: [
            {
                nombre: "Tenis Reebok Royal Techque T para Hombre",
                existencia: 10,
                rutaImg: "rebook-azul.webp",
                precio: "1349",
                enCarrito: 0,
            },
            {
                nombre: "Tenis Nike Air Max Excee para Mujer",
                existencia: 10,
                rutaImg: "nike-air-rosa.webp",
                precio: "1899",
                enCarrito: 0,
            },
            {
                nombre: "Tenis Vans Street Wear Classic Fit para Mujer",
                existencia: 10,
                rutaImg: "vans-street.webp",
                precio: "999",
                enCarrito: 0,
            },
            {
                nombre: "Tenis Supra Skytop Juvenil",
                existencia: 10,
                rutaImg: "supra-rojos.jpg",
                precio: "1299",
                enCarrito: 0,
            },
            {
                nombre: "Tenis Fila para Mujer",
                existencia: 10,
                rutaImg: "fila-mujer.webp",
                precio: "1149",
                enCarrito: 0,
            },
            {
                nombre: "Tenis Sportline para Hombre",
                existencia: 10,
                rutaImg: "sportline.webp",
                precio: "699",
                enCarrito: 0,
            },
        ],
        tenisCarrito: [],
        total: 0,
    },
    methods: {
        agregarTeni:function (cve) {
            if ( !this.tenisCarrito.includes(cve) ) {
                this.tenisCarrito.push(cve);
            }
            this.tenis[cve].enCarrito++;
        },
    },
    computed: {
        sumarTenis() {
            this.total = 0;
            for( teni of this.tenis ) {
                this.total += parseInt(teni.precio) * parseInt(teni.enCarrito);
            }
            return this.total;
        }
    }
});
