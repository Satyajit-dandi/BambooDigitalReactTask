// import logo from './logo.svg';
import './App.css';
import Header from './component/layout/Header'
import Banner from './component/layout/Banner';
import NewArrival from './component/layout/NewArrival';
import Brand from './component/layout/Brand';
import Collection from './component/layout/Collection';
import Video from './component/layout/Video';
import Product from './component/layout/Product';
import Trendingnfashion from './component/layout/Trendingnfashion';
import Followus from './component/layout/Followus';
import Footer from './component/layout/Footer';
function App() {
  return (
    <div className="App mainDiv">
      <Header></Header>
      <Banner></Banner>
      <NewArrival></NewArrival>
      <Brand></Brand>
      <Collection></Collection>
      <Video></Video>
      <Product></Product>
      <Trendingnfashion></Trendingnfashion>
      <Followus></Followus>
      <Footer></Footer>
    </div>
  );
}

export default App;
