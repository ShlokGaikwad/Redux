import { useDispatch, useSelector } from "react-redux";
const Home = () => {
  const dispatch = useDispatch();
  const { c } = useSelector((state) => state.custom);

  const addBtn = () => {
    dispatch({
      type: "increment"
    });
  };

  const addBtn25 = () => {
    dispatch({
      type: "incrementBy25",
      payload: 25
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement"
    });
  };

  return (
    <>
      <div>{c}</div>
      <button onClick={addBtn}>increment</button>
      <button onClick={addBtn25}>incrementBy25</button>
      <button onClick={subBtn}>decrement</button>
    </>
  );
};

export default Home;
