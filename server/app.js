const express = require("express");

const path = require('path')

const app = express();

const cors = require('cors')

const bodyParser = require('body-parser');

console.log(__dirname);


app.use('/public',express.static(path.join(__dirname , 'public')));


app.use(bodyParser.json());

// const cookieParser = require('cookie-parser')

const userRouter = require("./Routes/userRoutes");

const adminRouter = require('./Routes/AdminRouter')

const catRouter =  require('./Routes/catRouter')

const productRouter = require('./Routes/productRouter')


const morgan = require("morgan");

require("dotenv").config();

app.use(cors())
app.use(express.json());

const db = require("./config/db");
db();




const port = process.env.PORT || 4000;

// app.use(cookieParser())

app.use(morgan("dev"));
app.use("/user", userRouter);
app.use('/admin',adminRouter)
app.use('/cat',catRouter)
app.use('/product',productRouter)


app.listen(port, () => console.log(`app listening on port ${port}!`));
