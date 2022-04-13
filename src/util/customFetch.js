
let is_ok = true;
const customFetch = (time, task) =>{ 
   
    return new Promise((resolve, reject) => {
    
        setTimeout(() => {
            if(is_ok){
                resolve(task)
            } else { 
                reject(new Error("Error"))
        }
    }, time);
  });
}
export default customFetch;