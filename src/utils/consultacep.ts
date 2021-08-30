import axios from "axios";

async function consultacep(CEP: string): Promise<boolean> {

    let boleano: boolean = false

    await axios.get(`https://viacep.com.br/ws/${CEP}/json/`).then((result: any) => {
        
        if (result.data.erro) {
            console.log('1',result.data.erro);
            
            boleano = result.data.erro
        }
    })

    return boleano;
}

export default consultacep;