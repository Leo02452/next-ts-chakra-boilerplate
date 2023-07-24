import { FindManyEntityDto } from '@app/application/dtos/generic.dto';

function queryCustomization(url: string, dto: FindManyEntityDto) {
  let baseUrl = url;
  const queries = Object.entries(dto)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join('&');

  if (queries) {
    baseUrl += `?${queries}`;
    return baseUrl;
  }
  return url;
}

export default queryCustomization;
