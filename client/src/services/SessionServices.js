import Client from './api'

export const ConjureSession = async (data) => {
  console.log(data)
  try {
    const res = await Client.post('/session/create', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const RenderSessions = async (data) => {
  try {
    const res = await Client.get(`/session/${data}/userSessions`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const deleteSession = async (data) => {
  try {
    const res = await Client.delete(`/session/${data}`)
    return res.data
  } catch (error) {
    throw error
  }
}
