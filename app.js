import express from 'express'
import { drawTables } from './DB/connection.js'
import * as indexRouter from './modules/index.route.js'

const app = express()
const port = 5000
app.use(express.json())
app.use('/api/v1/user',indexRouter.userRouter)
app.use('/api/v1/product',indexRouter.productRouter)

drawTables()

app.listen(port,()=>{
    console.log('server running on port ' + port + ' ...................');
})