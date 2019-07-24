import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as LoginActions from '../../store/actions/login';

import api from '../../services/api';

import { Container, Input, Button, TextBtn, ErrorMsg } from './styles';

class Login extends Component {
  state = {
    username: '',
  };

  handleSubmit = async () => {
    const { username } = this.state;
    const { loginSuccess, loginFailure, navigation } = this.props;
    try {
      await api.get(`/users/${username}`);

      loginSuccess(username);

      navigation.navigate('Repositories');
    } catch (error) {
      loginFailure();
    }
  };

  render() {
    const { username } = this.state;
    const { error } = this.props;
    return (
      <Container>
        {error && <ErrorMsg>Usuário inexistente</ErrorMsg>}
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          value={username}
          onChangeText={text => this.setState({ username: text })}
        />
        <Button onPress={this.handleSubmit}>
          <TextBtn>Entrar</TextBtn>
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  error: state.login.error,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
