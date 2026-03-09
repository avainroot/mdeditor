import "@fontsource-variable/geist";
import styles from "./Preview.module.scss";
import usePreview from "@hooks/usePreview";

const Preview = () => {
  const content = usePreview({ styles });

  return (
    <div
      className={styles.preview}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default Preview;
