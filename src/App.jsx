import { useGetUser } from "./hooks/api";
import styles from "./App.module.css";

export function App() {
  const { data, isLoading, error } = useGetUser("manuezi");

  if (error) return <div className={styles.container}>{error.message}</div>;
  if (isLoading) return <div className={styles.container}>Carregando...</div>;

  return (
    <div className={styles.container}>
      {isLoading ? "Carregando..." : data.name}
    </div>
  );
}
