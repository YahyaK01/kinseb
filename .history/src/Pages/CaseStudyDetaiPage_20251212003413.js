import React from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudyOutcomes from '../components/CaseStudyOutcomes';
import CaseStudyTabs from '../components/CaseStudyTabs';

const CaseStudyDetailPage = () => {
  const { slug } = useParams();

  return (
    <div style={{ width: '100%' }}>
      <CaseStudyHero slug={slug} />
      <CaseStudyOutcomes slug={slug} />
      <CaseStudyTabs slug={slug} />
    </div>
  );
};

export default CaseStudyDetailPage;