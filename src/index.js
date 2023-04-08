//Función para crear objeto persona
function Persona(nombre, saldo, password) {
    this.nombre = nombre
    this.saldo = saldo
    this.password = password
}

//Declaración de variables globales

let p1 = new Persona('Ana', 100, 'gato')
let p2 = new Persona('Luis', 200, 'perro')
let p3 = new Persona('Juan', 90, 'pato')
let clientes = [p1, p2, p3]
let clienteActivo
let nuevoSaldo 

//Objeto unico cliente

const Cliente = {
    login: function (clientes, nombreIngrsado, passwordIngresada) {

        console.log(clientes, nombreIngrsado, passwordIngresada)

        for (var i = 0; i < clientes.length; i++) {
            if (nombreIngrsado == clientes[i].nombre && passwordIngresada == clientes[i].password)
                return true
        }
        console.log("Usuario y/o password incorrecto")
        return false

    }
}

//objeto unico banco

const Banco = {
    consulta: function (Cliente){
        console.log(Cliente.saldo)
        return Cliente.saldo
    },

    depositar: function (p, montoDeposito) {
        let saldoFuturo = Number(p.saldo) + Number(montoDeposito)
        if (saldoFuturo > 990) {
            console.log("no se puede tener un saldo mayor a $990", saldoFuturo)
            return false
        }
        p.saldo = saldoFuturo
        return true
    },
    retirar: function (p, montoRetiro) {
        let saldoFuturo = Number(p.saldo) - Number (montoRetiro)
        if (saldoFuturo < 10) {
            console.log("No se puede terner un saldo menor a $10",saldoFuturo)
            return false
        }
        p.saldo = saldoFuturo
        return true
    }
}

//Funcion para recuperar el nombre del cliente ingresado

function recuperaCliente(clientes, nombreCliente) {
    for (var i=0; i<clientes.length; i++) {
        if (nombreCliente == clientes[i].nombre)
            return clientes[i]
    }
}

//Funcion pagina login 

function ingreso() {

    let inputNombre= document.querySelector("#inputName").value
    console.log(inputNombre)
    let inputPass= document.querySelector("#inputPassword").value

    if (!Cliente.login(clientes, inputNombre, inputPass)) {
        alert ("No se puede ingresar")
        return
    }
    clienteActivo = recuperaCliente(clientes,inputNombre) 
    document.getElementById("inicio").classList.remove("hidden")
    document.getElementById("paginaInicio").classList.add("hidden")
}
//funcion para el boton salir

function salir(){
    document.getElementById("paginaInicio").classList.remove("hidden")
    document.getElementById("inicio").classList.add("hidden")
    document.getElementById("saldo").classList.add("hidden")
    document.getElementById("ingreso").classList.add("hidden")
    document.getElementById("retiro").classList.add("hidden")
    document.getElementById("montoIngreso").classList.add("hidden")
    document.getElementById("montoRetiro").classList.add("hidden")
}
//funcion para pantalla de consulta de saldo

function muestraPantallaConsultaSaldo(){
    let saldoActual = Banco.consulta(clienteActivo)
    document.getElementById("mostrarSaldo").innerHTML = saldoActual
    document.getElementById("saldo").classList.remove("hidden")
    document.getElementById("inicio").classList.add("hidden")
}
//funcion para pantalla para ingresar saldo

function muestraPantallaIngreso(){
    document.getElementById("ingreso").classList.remove("hidden")
    document.getElementById("inicio").classList.add("hidden")
}
//Funcion para pantalla que muestra el monto ingresado y el total

function continuarIngreso(){

    let montoIngreso= document.getElementById("montoIngresado").value
    let depositoAutorizado = Banco.depositar(clienteActivo, montoIngreso)

    if (depositoAutorizado) {
        document.getElementById("ingresado").innerHTML= montoIngreso
    } else {
        document.getElementById("ingresado").innerHTML= "No se puede tener más de $990 en la cuenta"
    }
    document.getElementById("ingresoMonto").innerHTML=clienteActivo.saldo

    document.getElementById("montoIngreso").classList.remove("hidden")
    document.getElementById("ingreso").classList.add("hidden")
}

//funcion para pantalla para retirar saldo

function muestraPantallaRetiro(){
    document.getElementById("retiro").classList.remove("hidden")
    document.getElementById("inicio").classList.add("hidden")
}

//Funcion para pantalla que muestra el monto retirado y total

function continuarRetiro(){
    let montoRetiro= document.getElementById("montoRetirado").value
    let retiroAutorizado = Banco.retirar (clienteActivo,montoRetiro)

    if (retiroAutorizado) {
        document.getElementById("retirado").innerHTML= montoRetiro
    } else {
        document.getElementById("retirado").innerHTML= "No se puede tener menos de $10 en la cuenta"
    }

    document.getElementById("retiroMonto").innerHTML= clienteActivo.saldo

    document.getElementById("montoRetiro").classList.remove("hidden")
    document.getElementById("retiro").classList.add("hidden")
}

//funcion para mostrar menu principal
 
function menuPrincipal(){
    document.getElementById("inicio").classList.remove("hidden")
    document.getElementById("saldo").classList.add("hidden")
    document.getElementById("ingreso").classList.add("hidden")
    document.getElementById("retiro").classList.add("hidden")
}