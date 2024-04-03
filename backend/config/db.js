import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error('Database connection failed. Exiting now...', err);
        process.exit(1);
    }
};

export default connectDB;
