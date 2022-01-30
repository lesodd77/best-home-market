import { Facebook, LinkedIn, Twitter, Instagram } from '@material-ui/icons';
import React from 'react';

export const Home = () => {
  return ( 
  
  <>
  <div className="container">
  <div className="sidebar">
  <button className="nav-btn"></button>
</div>

  <header className="header">
  <img src='./img/logo.png' alt='Nexter logo' className='header__logo'/>
  <h3 className='heading-3'>Your own home:</h3>
  <h1 className='heading-1'>The ultimate personal freedom</h1>
  <button className='btn header__btn'>View our properties</button>
  <div className='header__seenon-text'>Seen on</div>
  <div className='header__seenon-logos'>
      <img src='./img/logo-bbc.png' alt='Seen on logo 1'/>
      <img src='./img/logo-forbes.png' alt='Seen on logo 2'/>
      <img src='./img/logo-techcrunch.png' alt='Seen on logo 3'/>
      <img src='./img/logo-bi.png' alt='Seen on logo 4'/>
  </div>
</header>

    <div className="realtors">
        <h3 className="heading-3">Top 3 Realtors</h3>
        <div className="realtors__list">
          <img src="img/realtor-1.jpeg" alt="Realtor 1" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
            <p className="realtors__sold">245 houses sold</p>
          </div>

          <img src="img/realtor-2.jpeg" alt="Realtor 2" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
            <p className="realtors__sold">212 houses sold</p>
          </div>

          <img src="img/realtor-3.jpeg" alt="Realtor 3" className="realtors__img" />
          <div className="realtors__details">
            <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
            <p className="realtors__sold">198 houses sold</p>
          </div>
        </div>
      </div>



<section className="features">
<div className="feature">
  
    <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
    <p className="feature__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
</div>

<div className="feature">
   
    <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
    <p className="feature__text">Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
</div>

<div className="feature">
    
    <h4 className="heading-4 heading-4--dark">All homes in in top locations</h4>
    <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
</div>

<div className="feature">
    
    <h4 className="heading-4 heading-4--dark">New home in one week</h4>
    <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>

<div className="feature">
   
    <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
    <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
</div>

<div className="feature">
   
    <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
    <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
</div>
</section>

<div className="story__pictures">
<img src="img/story-1.jpeg" alt="Couple with new house" className="story__img--1"/>
<img src="img/story-2.jpeg" alt="New house" className="story__img--2"/>
</div>

<div className="story__content">
<h3 className="heading-3 mb-sm">Happy Customers</h3>
<h2 className="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
<p className="story__text">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
</p>
<button className="btn">Find your own home</button>
</div>


      <section className="homes">
      <div className="home">
          <img src="img/house-1.jpeg" alt="House 1" className="home__img"/>
          
          <h5 className="home__name">Beautiful Familiy House</h5>
          <div className="home__location">
             
              <p>USA</p>
          </div>
          <div className="home__rooms">
              
              <p>5 rooms</p>
          </div>
          <div className="home__area">
              
              <p>325 m<sup>2</sup></p>
          </div>
          <div className="home__price">
              
              <p>$1,200,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>

      
      <div className="home">
          <img src="img/house-2.jpeg" alt="House 2" className="home__img"/>
         
          <h5 className="home__name">Modern Glass Villa</h5>
          <div className="home__location">
              
              <p>Canada</p>
          </div>
          <div className="home__rooms">
              
              <p>6 rooms</p>
          </div>
          <div className="home__area">
             
              <p>450 m<sup>2</sup></p>
          </div>
          <div className="home__price">
             
              <p>$2,750,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
          <img src="img/house-3.jpeg" alt="House 3" className="home__img"/>
         
          <h5 className="home__name">Cozy Country House</h5>
          <div className="home__location">
            
              <p>UK</p>
          </div>
          <div className="home__rooms">
              
              <p>4 rooms</p>
          </div>
          <div className="home__area">
             
              <p>250 m<sup>2</sup></p>
          </div>
          <div className="home__price">
             
              <p>$850,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
          <img src="img/house-4.jpeg" alt="House 4" className="home__img"/>
          
          <h5 className="home__name">Large Rustical Villa</h5>
          <div className="home__location">
              
              <p>Portugal</p>
          </div>
          <div className="home__rooms">
              
              <p>6 rooms</p>
          </div>
          <div className="home__area">
             
              <p>480 m<sup>2</sup></p>
          </div>
          <div className="home__price">
            
              <p>$1,950,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
          <img src="img/house-5.jpeg" alt="House 5" className="home__img"/>
          
          <h5 className="home__name">Majestic Palace House</h5>
          <div className="home__location">
              
              <p>Germany</p>
          </div>
          <div className="home__rooms">
             
              <p>18 rooms</p>
          </div>
          <div className="home__area">
              
              <p>4230 m<sup>2</sup></p>
          </div>
          <div className="home__price">
             
              <p>$9,500,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>

      <div className="home">
          <img src="img/house-6.jpeg" alt="House 6" className="home__img"/>
         
          <h5 className="home__name">Modern Familiy Apartment</h5>
          <div className="home__location">
             
              <p>Italy</p>
          </div>
          <div className="home__rooms">
              
              <p>3 rooms</p>
          </div>
          <div className="home__area">
              
              <p>180 m<sup>2</sup></p>
          </div>
          <div className="home__price">
             
              <p>$600,000</p>
          </div>
          <button className="btn home__btn">Contact realtor</button>
      </div>
  </section>


  <section className="gallery">
      <figure className="gallery__item gallery__item--1"><img src="img/gal-1.jpeg" alt="Gallery image 1" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--2"><img src="img/gal-2.jpeg" alt="Gallery image 2" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--3"><img src="img/gal-3.jpeg" alt="Gallery image 3" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--4"><img src="img/gal-4.jpeg" alt="Gallery image 4" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--5"><img src="img/gal-5.jpeg" alt="Gallery image 5" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--6"><img src="img/gal-6.jpeg" alt="Gallery image 6" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--7"><img src="img/gal-7.jpeg" alt="Gallery image 7" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--8"><img src="img/gal-8.jpeg" alt="Gallery image 8" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--9"><img src="img/gal-9.jpeg" alt="Gallery image 9" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--10"><img src="img/gal-10.jpeg" alt="Gallery image 10" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--11"><img src="img/gal-11.jpeg" alt="Gallery image 11" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--12"><img src="img/gal-12.jpeg" alt="Gallery image 12" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--13"><img src="img/gal-13.jpeg" alt="Gallery image 13" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--14"><img src="img/gal-14.jpeg" alt="Gallery image 14" className="gallery__img"/></figure>


    </section>
 </div>
      </>
  );
}
