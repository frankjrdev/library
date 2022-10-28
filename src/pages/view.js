import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();
  console.log(params);

  const itemStyles = {
    container: {
      display: "flex",
      gap: "20px",
      color: "white",
      width: "800px",
      margin: "0 auto",
    },
  };

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  if (!item) {
    return <Layout>Item not found</Layout>;
  }
  return (
    <Layout>
      <div style={itemStyles.container}>
        <div>
          {item?.cover ? (
            <img src={item.cover} width="400" alt={item.title} />
          ) : (
            ""
          )}
        </div>
        <div>
          <div>{item?.author}</div>
          <div>{item?.intro}</div>
          <div>{item?.completed ? "Completed" : "To finish"}</div>
          <div>{item?.review}</div>
        </div>
      </div>
    </Layout>
  );
}
