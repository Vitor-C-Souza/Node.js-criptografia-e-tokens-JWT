import { createHash} from 'crypto'

function criaHash(senha){
    return createHash('sha256').update(senha).digest('hex')
}

console.log(criaHash("Uma String Qualquer"))

class Usuario{
    constructor(nome, senha){
        this.nome = nome
        this.hash = criaHash(senha)
    }

    autentica(nome, senha){
        if(nome === this.nome && this.hash === criaHash(senha)){
            console.log('usuario criado com sucesso!!!')
            return true
        }

        console.log("Usuario ou senha incorretos.")

        return false
    }
}

const usuario = new Usuario('joao manoel', 'minhaSenha')


console.log(usuario)

//caso de sucesso
usuario.autentica('joao manoel', 'minhaSenha')


//caso de fracasso
usuario.autentica('vitor', 'minhaSenha')
usuario.autentica('joao manoel', 'peideiNow')