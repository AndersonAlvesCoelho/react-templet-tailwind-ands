
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// ACTIONS
import { getCnae } from "../store/actions/cnae";

function ListCnae(prosp) {

  const dispatch = useDispatch();
  const { data, login } = useSelector((state) => state.cnae );
  const cane = data;

  useEffect(() => dispatch(getCnae()), [dispatch]);

  console.log("cane ", cane)

  return (
    <h1>Cnae</h1>
 
  );
}

export default ListCnae;
