const client = async (route) => {
  console.log('in')
  const response = fetch(process.env.REACT_APP_URL + route)
  console.log(await(response))
  return (await response).json()
}

export const getTasks = async () => {
  console.log('entering')
  return await (client('api/tasks/get'))
}