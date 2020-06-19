import userRoutes from "./routes/user.routes";

import express from "express";
import userRoutes from "./routes/user.routes";
const app = express();
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
app.use("/", userRoutes);
export default app;
