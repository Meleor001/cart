import "./Content.css";
import  group from "./images/group.png"
function Content() {
  return (
    <>
    <div className="box_house">
      <div className="first_box">
        <div className="text_box">
            <h1>Find Your Dream Home</h1>
            <p>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
            <button>Sign Up</button>
        </div>
        {/* <div className="image_box">
            <img src="" />
        </div> */}
      </div>
      <div className="two_box">
        <div className="input_box">
            <input type="text" className="input_location" placeholder="Location"/>
            <input type="text" className="input_type" placeholder="Type"/>
            <input type="text" className="input_price" placeholder="Price Range"/>

      </div>
      <button>Sign up</button>
      <div>
        
        </div>
      </div>
      <div className="hero">
        <div className="hero_img">
          <img src={group}/>
        </div>
        <div className="hero_content">
          <h2 className="hero_title">We Help You To Find Your Dream Home</h2>

        </div>
        <div className="hero_text">
          <p>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
        </div>
        <div className="status">
          <div>
          <h3>8K+</h3>
          <span>Houses Available</span>
        </div>
        <div>
           <h3>6K+</h3>
            <span>Houses Sold</span>
        </div>
        <div>
            <h3>2K+</h3>
            <span>Trusted Agents</span>
        </div>
        </div>
          
        
        

      </div>
    </div>
    </>
    
  );
}

export default Content;
