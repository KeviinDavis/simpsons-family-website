import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Nav from './components/Nav/Nav.jsx'
// import pics
import homer from './homer.jpg'
import bart from './bart.png'
import lisa from './lisa.png'
import maggie from './maggie.png'
import marge from './marge.png'

function App() {
  return (
    <div>
      <Nav />
      <section className="blog-items team-cards">
          <div className="inner-wrapper">
            <div className="blog-container">
              <ProfileCard pic={homer} name="Homer Simpson" description email="dounutman@springfield.com"/>
              <ProfileCard pic={marge} name="Marge Simpson" description email="lostlovers@springfield.com"/>
              <ProfileCard pic={bart} name="Bart Simpson" email="bartsucks@springfield.com"/>
              <ProfileCard pic={lisa} name="Lisa Simpson" description email="saxgirl@pringfield.com"/>
              <ProfileCard pic={maggie} name="Maggie Simpson" description email="babymaggie@springfield.com"/>
            </div>
          </div>
      </section>
    </div>
  );
}


export default App;
