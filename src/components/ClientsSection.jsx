// components/ClientsSection.jsx
import React, { forwardRef } from 'react';
import ClientItem from './ClientItem';
import { clientsData } from '../data/clientsData';

const ClientsSection = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="section-heading text-5xl md:text-7xl 
                        font-anton bg-bgmain text-primary mb-16 text-center 
                        animate-on-scroll"
        >
          OUR CLIENTS
        </h2>
        
        <div className="clients-grid grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {clientsData.map((client, index) => (
            <ClientItem 
              key={index}
              name={client}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

ClientsSection.displayName = 'ClientsSection';

export default ClientsSection;