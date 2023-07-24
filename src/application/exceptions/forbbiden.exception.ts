import BaseException from '@app/application/exceptions/base.exception';

class ForbbidenException extends BaseException {
  constructor() {
    super('Você não tem permissão para realizar esta ação!');
  }
}

export default ForbbidenException;
