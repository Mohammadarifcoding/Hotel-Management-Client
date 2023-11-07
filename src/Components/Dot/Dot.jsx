import React, { useEffect } from 'react';

import { computePosition , offset, flip,shift} from '@floating-ui/react'
const Dot = () => {
    useEffect(() => {
        const floating = document.getElementById('floating');
    
        function handleMouseMove(event) {
          const { clientX, clientY } = event;
          const virtualEl = {
            getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                x: clientX,
                y: clientY,
                left: clientX,
                right: clientX,
                top: clientY,
                bottom: clientY,
              };
            },
          };
    
          computePosition(virtualEl, floating, {
            placement: 'right-start',
            middleware: [offset(5), flip(), shift()],
          }).then(({ x, y }) => {
            Object.assign(floating.style, {
              top: `${y}px`,
              left: `${x}px`,
            });
          });
        }
    
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Clean up the event listener when the component unmounts
            document.removeEventListener('mousemove', handleMouseMove);
          };
        }, []);
    return (
        <div style={{
            backgroundColor:''
        }}  id="floating" className=" w-6 h-6 rounded-full ">       
       </div>
    );
};

export default Dot;