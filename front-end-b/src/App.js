import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  const hello = "Hello world";
  return (
    /*JSX*/
    <>
      <h1>{hello}</h1>
      <h2>Hello React</h2>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default App;
