function redirectToHomeIfAuthenticated(
  accessToken?: string,
  role?: string,
  props?: any,
) {
  if (accessToken) {
    return {
      redirect: {
        destination: role === 'consultant' ? '/consultant' : '/admin',
        permanent: false,
      },
    };
  }

  return { props: props || {} };
}

export default redirectToHomeIfAuthenticated;
