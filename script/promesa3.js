

const promesa = new Promise((resolve, reject) => {
    let nombre = prompt("ingrese el nombre del usuario")
    if (nombre == "") {
        reject("No  se ingresó información")
    }
    resolve("el nombre del usuario es " + nombre)
})
promesa.then(resp => {
 console.log(resp)
})

promesa.catch(error => {
    console.log(error)
})