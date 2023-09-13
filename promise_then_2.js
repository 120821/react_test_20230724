let result = new Promise( (resolve, reject ) => {
  let result = 0
  setTimeout( () => {
    console.info("sleep n ms...")
    result = 200
    resolve(result)   // 注意，这里的 resolve, 就相当于是返回了。
  }, 3000)
})

result.then( (temp) => {
  console.info("result : ", temp)
})

