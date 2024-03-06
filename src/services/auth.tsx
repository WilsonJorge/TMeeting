import { GoogleLogin } from 'react-google-login';

// Função para autenticar com o Google
export const signInWithGoogle = () => {
  const responseGoogle = (response: any) => {
    console.log(response);
    // Aqui você pode lidar com a resposta do Google, como obter o token de acesso
  };

  return (
    <GoogleLogin
      clientId="993229853039-tv2nkgc4tsdgfssgpgjp29eik0rcl19f.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};
export default signInWithGoogle;