const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello');
  }, 2000)
})

const logResolve = async() => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log('Terminei');
}

logResolve();