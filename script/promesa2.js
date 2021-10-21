const doTaks = (iteration) => new promise((resolve, reject) => {
    const number = []
    for (let index = 0; index < iteration; index++) {
        const num = 1 + Math.floor(Math.random() * 6);
        number.push(num)
        if (num === 6) {
            reject({
                error: true,
                message: "se ha sacado un 6"
            })
        }

    }
    resolve({
        error: false,
        value: number
    })
})

doTaks(3)
.then(result => console.info("OK", result.value))
.catch(error => console.log("algo falló", error.message))