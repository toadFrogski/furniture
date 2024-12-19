import { Canvas } from "@react-three/fiber";
import { CubeProvider } from "./contexts/cube";
import Controls from "./Controls";
import Scene from "./Scene";

const App = () => {
  return (
    <CubeProvider>
      <div className="min-h-screen bg-black flow-root">
        <div className="flex justify-center gap-6">
          <div className="w-[500px] h-[500px] bg-gray-800 rounded-xl mt-6">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
          <div className="max-w-[500px] max-h-[500px] bg-gray-800 rounded-xl mt-6">
            <Controls />
          </div>
        </div>
      </div>
    </CubeProvider>
  );
};

export default App;
