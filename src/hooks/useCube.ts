import { useContext } from "react";
import { CubeContext } from "../contexts/cube";

const useCube = () => useContext(CubeContext);

export default useCube;
