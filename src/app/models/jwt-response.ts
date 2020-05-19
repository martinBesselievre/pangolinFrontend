export interface JwtResponse {
    pangolin: {
    	id:  string,
        name: string,
        lat: number,
        lng: number,
        access_token: string
        expires_in: string
    }
}