import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyHero from '../components/CaseStudyHero';

const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const caseStudyId = parseInt(id);

  return (
    <div style={{ width: '100%' }}>
      <CaseStudyHero caseStudyId={caseStudyId} />
      
      {/* Add more sections here as you build them */}
      {/* <CaseStudyContent caseStudyId={caseStudyId} /> */}
      {/* <CaseStudyResults caseStudyId={caseStudyId} /> */}
      {/* <CaseStudyTestimonial caseStudyId={caseStudyId} /> */}
    </div>
  );
};

export default CaseStudyDetailPage;