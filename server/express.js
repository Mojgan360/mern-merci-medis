import express from "express";
const app = express();
import userRoutes from "./routes/user.routes";
//
app.use("/", userRoutes);
/*... configure express ... */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send(Template());
});
export default app;
