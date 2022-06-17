export interface TokenProviderInterface{
    create?(id: string): Promise<string>
    check?(token: string): Promise<object>
}