let consultas = []

alert("Bienvenidos a la página de consulta de préstamos personales")

function realizarConsulta() {
    let edad = parseInt(prompt("Ingrese su edad"))
    
    if (edad >= 18) {
        let consulta = prompt("¿Desea hacer una consulta? (si/no)").toLowerCase()
        
    if (consulta === "si") {
        let nombre = prompt("Ingrese su nombre")
        let apellido = prompt("Ingrese su apellido")
            alert("Bienvenido " + nombre + " " + apellido)
            
        let monto = parseInt(prompt("Ingrese la cantidad a solicitar"))
        let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en 12, 24 o 36 meses"))
            
    if (cuotas === 12 || cuotas === 24 || cuotas === 36) {
        let resultado = monto * 1.2 / cuotas
                alert("El monto de la cuota es " + resultado)
                
                
        consultas.push({nombre: nombre, apellido: apellido, monto: monto, cuotas: cuotas, cuotaMensual: resultado});

            } 
    else {
                alert("Cantidad de cuotas no válida. Por favor ingrese 12, 24 o 36 meses.")
            }
        } 
    else {
            alert("Gracias por su visita. Hasta la próxima.")
        }
    } else {
        alert("Eres menor de edad. NO puedes operar en el banco.")
    }
}

function mostrarConsultas() {
    if (consultas.length === 0) {
        alert("No hay consultas realizadas.")
    
    }
    
    let mensaje = "Historial de Consultas:\n\n"
    consultas.forEach((consulta, index) => {
        mensaje += `Consulta ${index + 1}:\n`
        mensaje += `Nombre: ${consulta.nombre} ${consulta.apellido}\n`
        mensaje += `Monto solicitado: ${consulta.monto}\n`
        mensaje += `Cuotas: ${consulta.cuotas}\n`
        mensaje += `Cuota mensual: ${consulta.cuotaMensual}\n\n`
    });
    
    alert(mensaje);
}

let continuar = "si"
while (continuar === "si") {
    realizarConsulta()
    continuar = prompt("¿Desea realizar otra consulta? (si/no)").toLowerCase()
}

mostrarConsultas()