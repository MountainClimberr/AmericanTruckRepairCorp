// TestimonialsWidget.js

import React, { useEffect } from 'react';
import '../testimonials.css'

function TestimonialsWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.setAttribute('defer', '');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-6b312819-a718-4c92-97d5-83527e320659" data-elfsight-app-lazy></div>
  );
}

export default TestimonialsWidget;
