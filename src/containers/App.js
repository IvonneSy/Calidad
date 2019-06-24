import React from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import FilterContainer from './FilterContainer';
import CategoriesContainer from './CategoriesContainer';
import './App.scss';
import logo from '../img/logo-2.png'
import banner from '../img/banner.jpg'
import fondoCompras from '../img/flowery-garden.jpg'

const App = () => (
  <div>
    <div className="main-container-banner" style={{ backgroundImage: "url(" + banner + ")" }}>
      <div style={{ marginLeft: '65px', marginRight: '65px', }}>
        <img src={logo} alt="Logo" style={{ width: '95px', marginTop: '25px' }} />
      </div>
      <br />
      <div className="banner__main">
        <h1 className="banner__title">
          <b>Una ofrenda a la memoria de tus seres queridos</b>
        </h1>
        <p className="banner__description">
          Llevamos ofrendas a tus seres queridos, en el momento que más quieras y completamente online
      </p>
        <button class="banner__btn">
          Arma tu arreglo
      </button>
      </div>
    </div>
    <div className="main-container">
      <br />
      <h2 className="section-video__title">
        Veamos como funciona
      </h2>
      <div class="section-video__content">
        <div class="video" style={{fontSize: '1em'}}>
          <div class="video__content">
            <div class="video__left">
              <h3 class="video__title">Kunanpa</h3>
              <p class="video__description">
                Los arreglos de florales son una muestra de cariño para homenajear a tus seres queridos.<br/>
                  Nuestra labor consiste en colocar las flores en el lugar que tu desees.
          </p>
          </div>
              <div class="video__right">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5NSG58gcwus?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: "url(" + fondoCompras + ")", boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)', backgroundSize: 'contain',  }}>
        <div className="main-container"  >
          <div className="filter-container">
            <FilterContainer />
            <div className="cart-container">
              <CartContainer />
            </div>
          </div>
          <div className="categories-container">
            <CategoriesContainer />
          </div>
          <div className="products-container">
            <ProductsContainer />
          </div>
        </div>
      </div>
    </div>

    );
    
    export default App;
