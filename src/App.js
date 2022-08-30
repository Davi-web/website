import logo from "./logo.svg";
import "./App.css";
import Website from "./stacks/WebsiteStack";

function App() {
  return <Website className="App" />;
}

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//     </Routes>
//   </BrowserRouter>,
//   document.getElementById("root")
// );
export default App;
