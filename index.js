import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const Turn = require('node-turn');

const server = new Turn({
  listeningPort: 3475,
  authMech: 'long-term',
  credentials: {
    'tenantextensible': 'GjeWKtm5emqkb4R5'
  },
  realm: 'encryptor'
});

server.start();