import app from './app';

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Server stoped, error: ${err}`);
    }
    console.log(`Server running port: ${process.env.PORT}`);
});
