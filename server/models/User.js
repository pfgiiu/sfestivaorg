// Rota para login de usuário
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send('Usuário não encontrado');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).send('Senha incorreta');
      }
  
      // Se o login for bem-sucedido
      res.status(200).send('Login realizado com sucesso');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      res.status(500).send('Erro ao fazer login');
    }
  });
  