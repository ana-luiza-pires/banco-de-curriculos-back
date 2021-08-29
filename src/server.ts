import cors from "cors";
import express from "express";
import ErrorHandler from "./exceptions/ExceptionHandler";
import routes from "./routes";

const port = process.env.PORT || 3333

const app = express()
app.use(cors())
app.use(express.json)
app.use(routes)
app.use(ErrorHandler)
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})



