import { Canvas } from "@react-three/fiber";
import { ConstructorProvider } from "./contexts/constructor";
import Controls from "./components/Controls";
import Scene from "./components/Scene";

const App = () => {
  return (
    <ConstructorProvider>
      <div className="min-h-screen bg-black flex flex-col">
        <main className="flex justify-center gap-6 flex-1 flex-wrap p-6">
          <div className="bg-gray-800 rounded-xl mt-6 flex-[2]">
            <Canvas>
              <Scene />
            </Canvas>
          </div>
          <div className="bg-gray-800 rounded-xl mt-6 flex-1">
            <Controls />
          </div>
        </main>
        <footer className="bg-gray-800 px-6 py-2 rounded-t-xl mx-auto">
          <p className="text-center text-white min-w-[200px]">Work in progress</p>
        </footer>
      </div>
    </ConstructorProvider>
  );
};

export default App;
