import data from './data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">SmartBox</a>
      </header>

      <main>
        <h1>Featured Products</h1>

        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <img src={product.Image} alt={product.name} />
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>{product.price}</strong>
                </p>

                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
