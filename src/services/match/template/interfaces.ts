export interface ResultMatch {
    match_id?: string
    tournament_id?: string
    player1?: object
    player2?: object
    status?:string
    score?:string
    winner?:string
    valid?: boolean
    statusCode?:number

}
export interface PostResult {
    message: string
    statusCode:number
}