const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http'); // Adicionar http
const { Server } = require('socket.io'); // Importar socket.io
require('dotenv').config();
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Criar um servidor HTTP e configurar o Socket.IO
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.json());

// Conexão com o MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.get('/', (req, res) => {
  res.send('API do FestivaOrg está funcionando!');
});


app.use('/api', userRoutes);


// Socket.IO
io.on('connection', (socket) => {
  console.log('Um usuário se conectou:', socket.id);

  // Exemplo de evento
  socket.on('mensagem', (data) => {
    console.log('Mensagem recebida:', data);
    // Você pode enviar a mensagem de volta ou para outros sockets
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado:', socket.id);
  });
});

// Iniciando o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const codeRoutes = require('./routes/codeRoutes');
app.use('/api', codeRoutes);

