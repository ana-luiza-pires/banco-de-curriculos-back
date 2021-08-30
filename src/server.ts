import express from 'express'
import 'express-async-errors'
import './database/connection'
import routes from './routes'
import cors from 'cors'
import ErrorHandler from './exceptions/ExceptionHandler'

const app = express()   // Instância do módulo express

app.use(cors())         // Permite a chamada de outras instancias diferentes da porta 3333 (Desta API)

app.use(express.json()) // Utilização de Json pelo express
app.use(routes)         // Utilização do arquivos de rotas
app.use(ErrorHandler)   // Tratamento de excessões

// Define a porta 3333 onde será executada nossa aplicação local ou a porta do Heroku
const port = process.env.PORT || 3333;
// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
