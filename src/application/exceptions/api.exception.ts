import BaseException from '@app/application/exceptions/base.exception';

class ApiException extends BaseException {
  constructor(public readonly string: string, message: string) {
    super(message);
  }
}

export default ApiException;
