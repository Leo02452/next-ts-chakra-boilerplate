function redirectToLoginIfNotAuthenticated(accessToken?: string, props?: any) {
  if (!accessToken) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return { props: props || {} };
}

export default redirectToLoginIfNotAuthenticated;
