// Pages/CaseStudyDetailPage.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudyOutcomes from '../components/CaseStudyOutcomes';
import CaseStudyTabs from '../components/CaseStudyTabs';
import OverviewSection from '../components/CaseStudySections/OverviewSection';
import ChallengeSection from '../components/CaseStudySections/ChallengeSection';
import SolutionSection from '../components/CaseStudySections/SolutionSection';
import ImplementationSection from '../components/CaseStudySections/ImplementationSection';
import ResultsSection from '../components/CaseStudySections/ResultsSection';

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div style={{ width: '100%' }}>
      <CaseStudyHero slug={slug} />
      <CaseStudyOutcomes slug={slug} />
      <CaseStudyTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {/* All Sections - Displayed one after another */}
      <OverviewSection slug={slug} />
      <ChallengeSection slug={slug} />
      <SolutionSection slug={slug} />
      <ImplementationSection slug={slug} />
      <ResultsSection slug={slug} />
    </div>
  );
};

export default CaseStudyDetailPage;
```

## File Structure:
```
src/
├── components/
│   ├── CaseStudyHero.jsx
│   ├── CaseStudyOutcomes.jsx
│   ├── CaseStudyTabs.jsx
│   └── CaseStudySections/
│       ├── OverviewSection.jsx
│       ├── ChallengeSection.jsx
│       ├── SolutionSection.jsx
│       ├── ImplementationSection.jsx
│       └── ResultsSection.jsx
└── Pages/
    └── CaseStudyDetailPage.jsx