import React from 'react';
import { GiFlowerStar } from 'react-icons/gi';
import gif from '../../assets/click2.gif';
import { GiClick } from 'react-icons/gi';
export const LandingWhyCompethisun = () => {
  
  return (
    <div className="main-container">
      <div className="inner-container">
        <div className="content">
          <h1 className="heading-whyCompetishun">
            Important Links
          </h1>

          <div className="box1" id="abc">
            <div className="check-logo">
              {/* <LuCheckCircle color="orage" className='check' /> */}
              <GiFlowerStar color="orange" className="check" />
            </div>
            <div className="info">
             
                <p>Course Features <a
                href="https://youtu.be/l2tLkv_t15k?feature=shared"
                target="_blank"
              ><span>Watch-Now</span> </a></p>
             
            </div>
            {/* <div className="info">
              <a
                href="https://youtu.be/l2tLkv_t15k?feature=shared"
                target="_blank"
              >
                <GiClick color="orange" className="check" />
              </a>
            </div> */}
          </div>

          <div className="box1">
            <div className="check-logo">
              <GiFlowerStar color="orange" className="check" />
            </div>
            <div className="info">
             
                <p>Why Join Us? Competishun Advantage!  <a
                href="https://youtu.be/06dJv3gJX88?feature=shared"
                target="_blank"
              > <span>Watch-Now</span> </a></p>
             
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <GiFlowerStar color="orange" className="check" />
            </div>
            <div className="info">
             
                <p>Preparation Stages  <a
                href="https://youtu.be/iR5ZCto7Td4?feature=shared"
                target="_blank"
              ><span>Watch-Now</span></a></p>
              
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <GiFlowerStar color="orange" className="check" />
            </div>
            <div className="info">
              
                <p>General Question <a
                href="https://youtu.be/50hiqJY_8h0?feature=shared"
                target="_blank"
              ><span>Watch-Now</span> </a></p>
             
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <GiFlowerStar color="orange" className="check" />
            </div>
            <div className="info">
              
                <p>Online Vs Offline <a
                href="https://youtu.be/JKg9Ked2aIk?feature=shared"
                target="_blank"
              ><span>Watch-Now</span></a></p>
              
            </div>
          </div>

          <div className="box1">
            <div className="check-logo">
              <GiFlowerStar color="orange" className="check" />
            </div>
            <div className="info">
            
                <p>Kota vs Jaipur vs Home   <a
                href="https://youtu.be/qjr3_qtdWFg?feature=shared"
                target="_blank"
              ><span>Watch-Now</span></a></p>
              
            </div>
          </div>
        </div>

        <div className="image">
          <img src={gif} alt="student" className="student-image" />
          {/* <video src={video} alt="student" className="student-image" autoPlay poster={pic}/> */}
        </div>
      </div>
      <button className="btn">Join Now</button>
    </div>
  );
};
export default LandingWhyCompethisun;
