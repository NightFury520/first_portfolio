import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';

function Kaleidoscope() {
  let canvasRef = useRef(null);
  let sketchCreated = false;

  useEffect(() => {
    if (!sketchCreated) {
      new p5(sketch, canvasRef.current);
      sketchCreated = true;
    }
  }, []);

  const [p5Instance, setP5Instance] = useState(null);
  const [color, setColor] = useState("#57cbff");

  function handleReset() {
    if (p5Instance) {
      p5Instance.clear();
    }
  }


  function handlePink() {
    setColor("#f57dff");
    p5Instance.stroke("#f57dff");
  }

  function handleBlue() {
    setColor("#57cbff");
    p5Instance.stroke("#57cbff");
  }

  function handleYellow() {
    setColor("#e8ff64");
    p5Instance.stroke("#e8ff64");
  }

  function sketch(p) {
    let symmetry;
    let angle;

    p.setup = function () {
      if (!sketchCreated) {
        sketchCreated = true;
      }

      symmetry = 6;
      angle = 360 / symmetry;
      p.createCanvas(350, 350);
      p.angleMode(p.DEGREES);
      p.stroke(color);

      setP5Instance(p);

       // Add touchmove event listener to prevent screen scrolling
      p.canvas.addEventListener('touchmove', function (event) {
        event.preventDefault();
      }, { passive: false });
      
    };


    p.draw = function () {
      p.translate(p.width / 2, p.height / 2);

      if (p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
        let mx = p.mouseX - p.width / 2;
        let my = p.mouseY - p.height / 2;
        let pmx = p.pmouseX - p.width / 2;
        let pmy = p.pmouseY - p.height / 2;

        if (p.mouseIsPressed) {
          for (let i = 0; i < symmetry; i++) {
            p.rotate(angle);
            p.line(mx, my, pmx, pmy);
            p.push();
            p.scale(1, -1);
            p.line(mx, my, pmx, pmy);
            p.pop();
          }
        }
      }
    };
  }

  return (
    <div className='flex flex-col'>
      <div className='my-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className='text-2xl text-center text-lightest-slate ml-5'>Draw on Me ↓</h1>
        <button onClick={handleReset} onTouchStart={handleReset} className="text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-8">Reset</button>
      </div>
      <div className="kaleidoscope-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div ref={canvasRef} style={{ border: '3px solid rgba(73, 86, 112, 0.102)', borderRadius: '5px', padding: '5px' }} />
      </div>
      <div className='m-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          onClick={handleBlue}
          onTouchStart={handleBlue}
          className={`text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-3 ${color === "#57cbff" ? "selected" : ""
            }`}
        >
          Blue
        </button>

        <button
          onClick={handleYellow}
          onTouchStart={handleYellow}
          className={`text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-3 ${color === "#e8ff64" ? "selected" : ""
            }`}
        >
          Yellow
        </button>
        <button
          onClick={handlePink}
          onTouchStart={handlePink}
          className={`text-green border border-green rounded-md text-lg px-5 py-2.5 hover:text-green hover:bg-lightest-navy transition-all ease-in-out duration-200 cursor-pointer text-center mx-3 ${color === "#f57dff" ? "selected" : ""
            }`}
        >
          Pink
        </button>
      </div>
    </div>
  );

}

export default Kaleidoscope;
