import { Header } from "./components/Layout/Header";
import { Meals } from "./components/Meals/Meals";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <Header />
      <main className={styles.mainPosition}>
        <Meals />
      </main>
    </>
  );
};
