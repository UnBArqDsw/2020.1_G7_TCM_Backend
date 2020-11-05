export interface ResultMatch {
    match_id?: string
    tournament_id?: string
    player1?: string
    player2?: string
    status?:string
    score?:string
    valid?: boolean
    statusCode?:number

}
export interface PostResult {
    message: string
    statusCode:number
}