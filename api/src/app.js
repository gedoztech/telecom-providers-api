import { createServer } from 'http';
const hostname = 'api';
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! I am the App service.');
});
server.listen(process.env.API_DOCKER_PORT, hostname, () => {
  console.log(`Server running`);
});