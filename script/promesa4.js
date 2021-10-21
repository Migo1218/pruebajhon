//Crear un algoritmo que le pida al usuario 3 números, calcular la suma de los 3 números e 
//imprimir el resultado si es mayor que 25



const promesa = new Promise ((resolve, reject) => {
    let num1 = Number(prompt("ingrese numero 1"))
    let num2 = Number(prompt("ingrese numero 2"))
    let num3 = Number(prompt("ingrese numero 3"))
    suma = num1 + num2 + num3
    if(suma > 25){
        resolve("el resultado de la suma es " + suma)
    }else
    reject("el numero es menor que 25")
})

promesa
.then(resp=>console.log(resp))
.catch(error=>console.log(error))