import Client from './api'

export const ConjureUtterance = async (data, sessionLoc) => {
  console.log(data.input)

  try {
    const res = await Client.post(`/interaction/${sessionLoc}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
