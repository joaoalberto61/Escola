import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const { username, password } = this.state;

    // Aqui você pode realizar a lógica de autenticação, por exemplo, comparar com dados no backend
    if (username === 'usuario' && password === 'senha') {
      alert('Login bem-sucedido!');
      // Redirecionar para a página Home
      window.location.href = '/home.html';
    } else {
      alert('Login falhou. Verifique seu usuário e senha.');
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <label>
          Usuário:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default Login;