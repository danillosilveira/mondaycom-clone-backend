import * as mongoose from "mongoose";

type TInput = {
  db: string;
};

export default ({ db }: TInput) => {
  const options: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  };

  mongoose
    .connect(db, options)
    .then(() => {
      return console.info(`Successfully connected to database`);
    })
    .catch(error => {
      console.error("Error connecting to database", error);
      return process.exit(1);
    });
};
