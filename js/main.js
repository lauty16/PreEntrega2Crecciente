

const imputBase = document.querySelector('#baseImponible');
let inputIVA = document.querySelector('#IVA');
let inputTotal = document.querySelector('#total');
let imputPrecioFinal = document.querySelector('#precioFinal');
let imputVenta = document.querySelector('#venta');
const tipoIVA = 0.21;
const tipoVenta = 1.21;



function  calcular() {
    const base = Number(imputBase.value);
    console.log("El valor del producto es: $"+base)
    const IVA = base * tipoIVA;
    inputIVA.value = IVA;
    console.log("El iva del producto es: "+IVA)
    const total = base + IVA;
    console.log("El valor del producto con IVA es: $"+total)
    inputTotal.value = total; 
    const venta = total * tipoVenta;
    console.log("El valor para la venta del producto es de: $"+venta); 
    imputVenta.value = venta; 
    
}










