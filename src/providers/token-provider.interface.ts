export interface TokenProviderInterface{
    create(id: string): Promise<string>
    check(token: string): boolean
    get_info(token: string): { id: string; exp: number; iat: number }

}
