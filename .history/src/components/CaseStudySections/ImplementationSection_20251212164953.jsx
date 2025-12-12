// components/CaseStudyTabs.jsx - Update the handleTabClick function
const handleTabClick = (tabId) => {
  setActiveTab(tabId);
  // Smooth scroll to content section
  setTimeout(() => {
    const contentElement = document.getElementById(`${tabId}-section`);
    if (contentElement) {
      const yOffset = -120; // Increased negative offset to show more of the section
      const y = contentElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, 100);
};