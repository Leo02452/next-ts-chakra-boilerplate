export interface AuthDto {
  role: string;
  username: string;
  password: string;
}

export interface AuthResponseDto {
  type: 'bearer';
  token: string;
}