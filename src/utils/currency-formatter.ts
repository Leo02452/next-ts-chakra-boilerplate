function currencyFormatter(value: string | number) {
  return Number(value).toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  });
}

export default currencyFormatter;
