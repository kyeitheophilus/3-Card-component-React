import sedans from '../src/assets/images/icon-sedans.svg'
import suvs from '../src/assets/images/icon-suvs.svg'
import luxury from '../src/assets/images/icon-luxury.svg'

const Body = () => {
  return (
    <section className="main">
      <div className="container">
        {/* sedans column */}
        <div className="box box1">
          <img src={sedans} alt={`${sedans} image`} />
          <h1>Sedans</h1>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or on your next road trip.
          </p>
          <button className="btn">Learn More</button>
        </div>

        {/* suvs column */}

        <div className="box box2">
          <img src={suvs} alt={`${suvs} image`} />
          <h1>SUVs</h1>
          <p>
            Take an SUV for its spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road next adventures.
          </p>
          <button className="bt">Learn More</button>
        </div>

        {/* luxury column */}
        <div className="box box3">
          <img src={luxury} alt={`${luxury} image`} />
          <h1>Luxury</h1>
          <p>
            Cruise in the best car brands without the bloated prices. Enjoy the
            enhanced comfort of a luxury rental and arrive in style.
          </p>
          <button className="btt">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Body