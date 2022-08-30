import http from './index'

class Season {
    async getActiveSeason(token: string): Promise<any> {
        return await http.get('/data/d3/season/', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
    async getLeaderboardSeason(token: string, id: string, leaderboard: string): Promise<any> {
        return await http.get(`/data/d3/season/${id}/leaderboard/${leaderboard}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
    }
}

export default new Season()