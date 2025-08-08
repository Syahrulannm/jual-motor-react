import Cta from "../components/Cta";
import Hero from "../components/Hero";
import Logo from "../components/Logo";
import ProductList from "../components/ProductList";
import Wa from "../components/Wa";

export default function Home() {
  return (
    <div>
      <Hero />
      <Logo />
      <ProductList />
      <Cta />
      <Wa />
    </div>
  );
}
