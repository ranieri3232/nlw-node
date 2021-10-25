/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import 'dotenv';
import { serverHttp } from './app';

const PORT = process.env.PORT || 3333;

serverHttp.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
