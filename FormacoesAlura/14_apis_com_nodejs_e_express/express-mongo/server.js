import app from './src/app.js';
import 'dot'

const PORT = 3000;

app.listen(PORT, () => {
    console.log("servidor escutando na porta 3000: http://localhost:3000");
})