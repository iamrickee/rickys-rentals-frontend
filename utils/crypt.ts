import * as crypto from 'crypto'

const algorithm: string = 'aes-256-cbc'
const inputEncoding: crypto.Encoding = 'utf-8'
const outputEncoding: crypto.Encoding = 'hex'
const key: string = getKey()

export function encrypt(text: string): string {
    const iv: string = randomString(16)
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    let encrypted = cipher.update(text, inputEncoding, outputEncoding)
    encrypted += cipher.final(outputEncoding)
    return iv + '-' + encrypted
}

export function decrypt(encryptedText: string): string {
    const iv: Buffer = Buffer.from(encryptedText.split('-')[0],inputEncoding)
    const encryptedTextWithoutIv: string = encryptedText.split('-')[1]
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    let decrypted = decipher.update(encryptedTextWithoutIv, outputEncoding, inputEncoding)
    decrypted += decipher.final(inputEncoding)
    return decrypted
}

function getKey(): string {
    return process.env.NEXT_PUBLIC_SECRET === undefined ? '' : process.env.NEXT_PUBLIC_SECRET
}

function randomString(length: number): string {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let randomString: string = ''
    for (let i = 0; i < length; i++) {
        var rnum = Math.floor(Math.random() * chars.length)
        randomString += chars.substring(rnum, rnum + 1)
    }
    return randomString
}