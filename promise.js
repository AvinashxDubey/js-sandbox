function wait(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(ms>=0){
                resolve(`waited for ${ms} milliseconds`)
            } else{
                reject('Invalid Time')
            }
        }, ms)
    })
}

wait(2000)
.then(console.log)
.catch(console.error)