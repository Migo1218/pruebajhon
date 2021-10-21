const promesa = new Promise((resolve,reject)=>{
    let edad = Number(prompt("ingrese la edad"))
    let peso = Number(prompt("ingrese el peso"))

    if(peso > 100){
        resolve(console.log("El usuario tiene sobrepeso"))
    }
    reject("el usuario es saludable")
})
promesa
.then(resp=>console.log(resp))
.catch(error=>console.log(error))