export const authenticateUser = async () => {
  return await new Promise.resolve({
    id: '1234',
    email: 'social@kaizen.com.na',
    username: 'Kaizen'
  })
}

export const deauthenticateUser = async () => {
  return await new Promise.resolve(true)
}