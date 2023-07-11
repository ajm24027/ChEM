import Client from './api'

export const SummonGhosts = async () => {
  try {
    const res = await Client.get('/ghost')
    return res.data
  } catch (error) {
    throw error
  }
}
