import * as jwt from 'jsonwebtoken';

export const isTokenExpired = (token: string) => {
    if (!token) return true
    const decodeToken = jwt.decode(token)
    const tokenDate = new Date((decodeToken as jwt.JwtPayload).exp! * 1000)
    const FECHA_ACTUAL = new Date()
    return tokenDate < FECHA_ACTUAL
}