import { createClient } from 'redis'

export async function connectRedis({ url }) {
  if (!url) return { client: null, connected: false }

  const client = createClient({ url })

  client.on('error', (err) => {
    console.warn(`Redis error: ${err?.message || err}`)
  })

  try {
    await client.connect()
    return { client, connected: true }
  } catch (err) {
    console.warn(`Redis connection failed (safe mode): ${err?.message || err}`)
    try {
      await client.quit()
    } catch {
      // ignore
    }
    return { client: null, connected: false }
  }
}
