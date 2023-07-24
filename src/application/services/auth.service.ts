import { AuthResponseDto, AuthDto } from '@app/application/dtos/auth.dto';
import { User } from '@app/application/dtos/users.dto';

import ApiClient from '@app/application/providers/api.provider';

class AuthService {
  static URL_BASE = '/auth';

  public static async create(dto: AuthDto) {
    const { data } = await ApiClient.post<AuthResponseDto>(this.URL_BASE, dto);
    return data;
  }

  public static async getAuth() {
    const { data } = await ApiClient.get<User>(this.URL_BASE);
    return data;
  }
}

export default AuthService;