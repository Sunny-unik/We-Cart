import mongoose, { ConnectOptions } from "mongoose";

export default async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit();
  }
};
