import ApiException from '@app/application/exceptions/api.exception';

class InternalException extends ApiException {
  constructor(
    code = 'internal',
    message = 'Ocorreu um erro inesperado, por favor, tente novamente!',
  ) {
    super(code, message);
  }
}

export default InternalException;