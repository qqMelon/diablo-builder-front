import axios from 'axios'
import oauth from 'axios-oauth-client'

class Client {
    async getAccessToken(): Promise<any> {
        const getOAuthCode = oauth.client(axios.create(), {
            url: 'https://us.battle.net/oauth/token',
            client_id: import.meta.env.VITE_BLIZZ_CLIENT_ID,
            client_secret: import.meta.env.VITE_BLIZZ_API_KEY,
            grant_type: 'client_credentials'
        })
        return getOAuthCode()
    }
}

export default new Client()