import styles from "@/components/Login/LoginContent.module.css"

const Login = () => {
  return (
    <>
      <div className={styles.loginContent}>

        <div className={styles.logo}>
          <img
            src="/images/thegames_logo.png"
            alt="The Games"
            className={styles.logoImg}
          />
        </div>

        <div className={styles.loginCard}>
          <div className={styles.loginCardHeader}>
            <h3>Faça seu login:</h3>
          </div>

          <div className={styles.loginCardBody}>
            <form className="formPrimary">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite seu e-mail"
                className={`${styles.input} ${"inputPrimary"}`}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Digite sua senha"
                className={`${styles.input} ${"inputPrimary"}`}
              />
              <input type="submit"
                value="Entrar"
                className={`${styles.input} ${"btnPrimary"}`}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
