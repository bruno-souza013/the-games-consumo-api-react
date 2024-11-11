import styles from "@/components/Loading/Loading.module.css";

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src="images/loading.gif" alt="Carregando" />
      <p>Carregando...</p>
    </div>
  );
};
