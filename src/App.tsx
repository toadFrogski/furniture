import { Canvas } from "@react-three/fiber";
import { ConstructorProvider } from "./contexts/constructor";
import Controls from "./components/Controls";
import Scene from "./components/Scene";

const App = () => {
  return (
    <ConstructorProvider>
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
    </ConstructorProvider>
  );
};

export default App;
