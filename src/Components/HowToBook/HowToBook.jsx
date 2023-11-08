import React, { useEffect } from 'react';
import ProcessTerms from '../../Pages/Terms/ProcesstTerms/ProcessTerms';

const HowToBook = () => {
    useEffect(() => {
        // Update the document title for this page
        document.title = 'Smart Hotel || How To Book';
      }, []);
    return (
        <div className="">
      <div className="max-w-[1400px] mx-auto">
    
        <ProcessTerms></ProcessTerms>
      </div>
    </div>
    );
};

export default HowToBook;