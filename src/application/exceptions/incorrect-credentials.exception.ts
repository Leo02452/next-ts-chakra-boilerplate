import ApiException from '@app/application/exceptions/api.exception';

class IncorrectCredentialsException extends ApiException {
  constructor(
    code = 'incorrect_credentials',
    message = 'Credenciais incorretas, tente novamente!',
  ) {
    super(code, message);
  }
}

export default IncorrectCredentialsException;
