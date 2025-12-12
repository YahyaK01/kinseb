import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyHero from '../components/CaseStudyHero';

const CaseStudyDetailPage = () => {
  const { slug } = useParams(); // Changed from 'id' to 'slug'

  return (
    <div style={{ width: '100%' }}>
      <CaseStudyHero slug={slug} />
      
      {/* Add more sections here as you build them */}
      {/* <CaseStudyContent slug={slug} /> */}
      {/* <CaseStudyResults slug={slug} /> */}
      {/* <CaseStudyTestimonial slug={slug} /> */}
    </div>
  );
};

export default CaseStudyDetailPage;