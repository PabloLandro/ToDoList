const client = async (route) => {
  console.log('CALLING: ' + process.env.REACT_APP_SERVERU + route)
  //fetch(process.env.REACT_APP_SERVERU + route).then((res) => res.json()).then((result) => console.log(result))
  const response = fetch(process.env.REACT_APP_SERVERU + route)
  return (await response).json()
}

export const getTasks = async () => {
  console.log('entering')
  return await (client('api/tasks/get'))
}