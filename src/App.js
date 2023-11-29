import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Overview from "./pages/Overview";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div class="container mx-auto mt-16">
        <div class="flex flex-row flex-wrap py-4">
          <div class="w-full sm:w-1/3 md:w-1/4 px-2">
            <div>
              <Profile />
            </div>
          </div>
          <main class="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
            <Overview />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
