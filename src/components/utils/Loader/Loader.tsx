// Style import
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
