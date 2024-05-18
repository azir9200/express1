import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
const port = 3000

//parser...
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  const a = 'myMind'
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app llllllistening on port ${port}`)
})

const a =  50;

export default app
