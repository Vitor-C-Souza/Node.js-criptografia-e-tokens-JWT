import jwt from "jsonwebtoken";

const chaveSecreta = "ChaveSuperSecreta"

const token = jwt.sign(
    {
        apelido: 'jm',
        curso: 'segurança e nodeJS'
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = jwt.verify(token, chaveSecreta)

console.log(tokenDecodificado)
