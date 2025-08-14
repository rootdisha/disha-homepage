// components/WorkSection.jsx
import React, { forwardRef } from 'react';
import WorkItem from './WorkItem';
import { worksData } from '../data/worksData';

const WorkSection = forwardRef((props, ref) => {

  return (
    <section
      ref={ref}
      className="min-h-screen py-20 px-6 font-lato bg-bgother"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-heading text-5xl md:text-7xl 
                        font-anton text-secondary mb-16 text-center 
                        animate-on-scroll">
          OUR WORK
        </h2>
        <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {worksData.map((work, index) => (
            <WorkItem key={index} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
});

WorkSection.displayName = 'WorkSection';

export default WorkSection;