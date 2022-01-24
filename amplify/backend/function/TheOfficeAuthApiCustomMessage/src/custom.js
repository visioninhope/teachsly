exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  event.response.autoConfirmUser = true;

  const email = event.request.userAttributes.email;
  const code = event.request.codeParameter
  const name = event.request.userAttributes.name;

  const templateInvite = (name,email,code)=> `<html>

<body style="
      background-color: #333;
      font-family: PT Sans, Trebuchet MS, sans-serif;
    ">
    <div style="
        margin: 0 auto;
        width: 600px;
        background-color: #fff;
        font-size: 1.2rem;
        font-style: normal;
        font-weight: normal;
        line-height: 19px;
      " align="center">
        <div style="padding: 20">
            <img style="
            border: 0;
            display: block;
            height: auto;
            width: 100%;
            max-width: 373px;
          " alt="Animage" height="200" width="300" src="https://i.imgur.com/g1DAd29.png" />
            <h2 style="
            font-size: 28px;
            margin-top: 20px;
            margin-bottom: 0;
            font-style: normal;
            font-weight: bold;
            color: #000;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
          ">
                Hola ${name}!
            </h2>
            <h3 style="
            font-size: 20px;
            margin-top: 20px;
            margin-bottom: 0;
            font-style: normal;
            font-weight: bold;
            color: #38a3c5;
            font-size: 24px;
            line-height: 32px;
            text-align: center;
          ">
                Te damos la bienvenida a The Office English Learning
            </h3>
            <p style="
            margin-top: 40px;
            margin-bottom: 0;
            font-size: 16px;
            line-height: 24px;
            color: #000;
            text-align: left;
          ">
                A través de nuestra plataforma vas a poder tener tus cursos, libros y material extra a un solo click.
            </p>
            <p style="
            margin-top: 20px;
            margin-bottom: 0;
            font-size: 16px;
            line-height: 24px;
            color: #000;
            text-align: left;
          ">
                A continuación te dejamos los datos de acceso, en tu primer ingreso te vamos a pedir que cambies la contraseña por una más facil de recordar para vos!😜 
            </p>
            <div style="display: inline-block; width: 100%;">
                <h2 style="
              margin-top: 20px;
              margin-bottom: 0;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              text-align: left;

            ">
                    Email: ${email}
                </h2>
                <h2 style="
              margin-top: 10px;
              margin-bottom: 0;
              font-size: 16px;
              line-height: 24px;
              color: #000;
              text-align: left;
   
            ">
                    Contraseña: ${code}
                </h2>
            </div>
            <div style="Margin-top: 40px;">
                <div style="Margin-bottom: 20px;text-align: center;">
                    <a style="border-radius: 4px;display: block;font-size: 14px;font-weight: bold;line-height: 24px;padding: 12px 24px 13px 24px;text-align: center;text-decoration: none !important;transition: opacity 0.1s ease-in;color: #ffffff !important;box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);background-color: #38a3c5;font-family: PT Sans, Trebuchet MS, sans-serif; letter-spacing: 0.05rem;"
                        href="https://plataforma.theofficeenglishlearning.com">ACCEDÉ A NUESTRA PLATAFORMA AQUÍ</a>
                </div>
            </div>
            <div style="display: inline-block; width: 100%;">
                <h2 style="
                margin-top: 10px;
                margin-bottom: 0;
                font-size: 16px;
                line-height: 16px;
                color: #000;
                text-align: left;
                ">
                    Gracias por confiar en nosotros,
                </h2>
                <h2 style="
                margin-top: 5px;
                margin-bottom: 0;
                font-size: 16px;
                line-height: 24px;
                color: #000;
                text-align: left;
                ">
                    The Office English Learning Team
                </h2>
            </div>
        </div>
    </div>
</body>

</html>
`;

  event.response = {
    emailSubject: "🚀 Welcome aboard! Acceso a nuestra plataforma",
    emailMessage: templateInvite(name,event.request.usernameParameter,event.request.codeParameter)
  };
  
  callback(null, event);
};