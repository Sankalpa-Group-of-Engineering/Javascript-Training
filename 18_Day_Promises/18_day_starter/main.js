// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('not fullstack developer')
    }
  }, 2000)
})

//1. make wrapper function => async
//2. use try and catch
//3. call promise using await and store value in variable

const checkFullStack = async () => { //wrapper function
  try {
    const result = await doPromise 
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}