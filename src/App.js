import Header from "./components/Header";
import Button  from "./components/Button";
import { Image } from "./components/Image";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Button lable={"Add to cart"} />
      <Button lable={"Read more..."} />
      <Button lable={"Login"} />
      <Button lable={"Register"} />
      {/* <Button1 />
      <Button2 /> */}
      <Image />
    </div>
  )
}

export default App;