import React from 'react';
import addOnPlus from '../icons/addonPlus.png';
import ReactPlayer from 'react-player';
import { findByLabelText } from '@testing-library/react';


export default function Content({ name }) {
  return (
    <div className="ContentDiv">
      <h1>Welcome {name}</h1>

      <div className="firstRow">
        <div className="firstColumn">
          <div
            style={{
              width: 'fit-content',
              margin: 'auto'
            }}
          >
            <h3 className="addOnsh3">Cardio</h3>
            <p style={{ textAlign: 'center' }}>
              <img
                src={addOnPlus}
                style={{
                  width: 50,
                  height: 50,
                  margin: 'auto',
                  cursor: 'pointer'
                }}
              />
            </p>
          </div>
        </div>
        <div className="secondColumn">
          <div style={{ width: 'fit-content', margin: 'auto' }}>
            <h3 className="addOnsh3">Resistance</h3>
            <p style={{ textAlign: 'center' }}>
              <img
                src={addOnPlus}
                style={{
                  width: 50,
                  height: 50,
                  margin: 'auto',
                  cursor: 'pointer'
                }}
              />
            </p>
          </div>
        </div>
        <div className="thirdColumn">
          <div style={{ width: 'fit-content', margin: 'auto' }}>
            <h3 className="addOnsh3">Yoga</h3>
            <p style={{ textAlign: 'center' }}>
              <img
                src={addOnPlus}
                style={{
                  width: 50,
                  height: 50,
                  margin: 'auto',
                  cursor: 'pointer'
                }}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="SecondRow">
        <div className="cardio-SR">
          <h3>Benefits of Cardio</h3>
          <ul>
            <li>It helps you burn fat and calories for weight loss.</li>
            <li>It increases your lung capacity</li> 
            <li>Strengthens your heart muscle</li> 
            <li> It helps reduce your 
                risk of heart attack, 
                high cholesterol, high blood pressure, 
                diabetes, and some forms of cancer.</li>
          </ul>
          <sup>source: <a target="#" href="https://diet.mayoclinic.org/diet/move/cardio-101">Link</a></sup>
        </div>

        <div className="cardio-SR">
          <h3>Benefits of Resistance</h3>
          <ul>
            <li>Improved muscle <strong>strength</strong> and tone
               – to protect your joints from injury.</li>
            <li>Maintaining flexibility and balance,
               which can help you remain independent 
               as you age</li>
            <li>Weight management and increased muscle-to-fat ratio – 
                as you gain muscle, your body burns more kilojoules when 
                at rest.
              </li>
          </ul>
          <sup>source: <a target="#" href="https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/strength-training/art-20046670">Link</a></sup>
        </div>

        <div className="cardio-SR">
          <h3>Benefits of Yoga</h3>
          <ul>
            <li> Yoga can help us lose weight, balance metabolism, and develop a lean body.</li>
            <li> Yoga is very much a mind-body exercise that uses breathing and focus to help calm the mind,
                 releasing physical and mental stress.</li>
            <li>Yoga is good for people who haven't been active in
                a while. It’s good for people who have 
                certain health conditions like arthritis or osteoporosis. </li>
          </ul>

          <sup>source: <a target="#" href="https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=1&contentid=2767">Link</a></sup>

        </div>
        






      </div>
      <div className="thirdRow">
        <div className="firstColumn rowNoBG wrapper">
        
            <ReactPlayer
              url="https://www.youtube.com/watch?v=5V_rtUMzGfQ"
              width={380}
              height={305}
              light={true}
            />
        
        </div>
        <div style={{marginRight: 20}}>

          <ReactPlayer
            url="https://www.youtube.com/watch?v=bdvRD2I4uzo"
            width={380}
            height={305}
            light={true}
          />

        </div>
        <div className="thirdColumn rowNoBG">

          <ReactPlayer
            url="https://www.youtube.com/watch?v=E1K0CiGmBxA"
            width={380}
            height={305}
            light={true}
          />

        </div>
      </div>
    </div>
  );
}
