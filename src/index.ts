import expres from 'express';
import { rootHandler, helloHandler } from './handler';

const app = expres();
const port = process.env.PORT || '8000';

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
