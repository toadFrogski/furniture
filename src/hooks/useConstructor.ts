import { useContext } from "react";
import { ConstructorContext } from "../contexts/constructor";

const useConstructor = () => useContext(ConstructorContext);

export default useConstructor;
