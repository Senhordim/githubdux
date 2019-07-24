import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background: #ffeaa7;
  padding: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background: #fdcb6e;
  height: 52px;
  margin-top: 10px;
`;

export const TextBtn = styled.Text`
  color: #333;
  font-size: 18px;
`;

export const ErrorMsg = styled.Text`
  color: #ff817e;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;
