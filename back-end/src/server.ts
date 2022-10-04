import express, { Application, Request, Response } from "express"

require("./db/db")

const app: Application = express()

const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})