let ok=true;

const customFetch = (time,task) => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(ok){
                resolve(task);
            }else{
                reject('Error');
            }
        },time)
    })
}

export default customFetch

