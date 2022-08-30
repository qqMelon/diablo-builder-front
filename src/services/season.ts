import axios from 'axios'

class Season {
    async getActiveSeason(): Promise<any> {
        return await axios.get('/data/d3/season/')
    }
}

export default new Season()