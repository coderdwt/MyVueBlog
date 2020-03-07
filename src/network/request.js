import axios from 'axios'
export function request(config){
  return new Promise((resolve,reject)=>{
    const instance=axios.create({
      baseURL:'http://39.107.104.155:3000'
    })
    instance(config).then(res=>{
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}

export function post(config){
  return new Promise((resolve,reject)=>{
    const instance=axios.create({
      baseURL:'http://39.107.104.155:3000/comment'
    })
    instance(config).then(res=>{
      resolve(res)
    }).catch(res=>{
      reject(res)
    })
  })
}