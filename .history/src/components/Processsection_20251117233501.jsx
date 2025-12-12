import React, { useEffect, useRef, useState } from 'react';

const HorizontalScrollOnVertical = () => {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress
        const scrollY = window.scrollY;
        const startScroll = containerTop - windowHeight / 2;
        const endScroll = containerTop + containerHeight - windowHeight / 2;
        
        const progress = (scrollY - startScroll) / (endScroll - startScroll);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        setScrollProgress(clampedProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample cards data
  const cards = [
    { id: 1, title: 'Card 1', color: '#3B82F6', description: 'First card description goes here' },
    { id: 2, title: 'Card 2', color: '#A855F7', description: 'Second card description goes here' },
    { id: 3, title: 'Card 3', color: '#EC4899', description: 'Third card description goes here' },
    { id: 4, title: 'Card 4', color: '#10B981', description: 'Fourth card description goes here' },
    { id: 5, title: 'Card 5', color: '#F59E0B', description: 'Fifth card description goes here' },
    { id: 6, title: 'Card 6', color: '#EF4444', description: 'Sixth card description goes here' },
  ];

  // Calculate horizontal scroll distance
  const maxScroll = (cards.length * 320) - (typeof window !== 'undefined' ? window.innerWidth : 1200);
  const horizontalScroll = scrollProgress * maxScroll;

  const styles = {
    mainContainer: {
      backgroundColor: '#F9FAFB',
      margin: 0,
      padding: 0,
    },
    spacerBefore: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F3F4F6',
    },
    spacerTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: '#1F2937',
      margin: 0,
    },
    scrollContainer: {
      height: '300vh',
      position: 'relative',
    },
    stickyWrapper: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    },
    cardsWrapper: {
      display: 'flex',
      gap: '24px',
      padding: '0 32px',
      transform: `translateX(-${horizontalScroll}px)`,
      transition: 'transform 0.075s linear',
    },
    card: {
      minWidth: '300px',
      height: '400px',
      borderRadius: '16px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      padding: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'white',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    cardTitle: {
      fontSize: '1.875rem',
      fontWeight: 'bold',
      marginBottom: '16px',
      margin: 0,
    },
    cardDescription: {
      fontSize: '1.125rem',
      opacity: 0.9,
      margin: 0,
    },
    cardFooter: {
      fontSize: '0.875rem',
      opacity: 0.75,
    },
    spacerAfter: {
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F3F4F6',
    },
  };

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={styles.mainContainer}>
      {/* Spacer before */}
      <div style={styles.spacerBefore}>
        <h1 style={styles.spacerTitle}>
          Scroll Down ↓
        </h1>
      </div>

      {/* Horizontal scroll container */}
      <div 
        ref={containerRef}
        style={styles.scrollContainer}
      >
        <div style={styles.stickyWrapper}>
          <div style={styles.cardsWrapper}>
            {cards.map((card) => (
              <div
                key={card.id}
                style={{
                  ...styles.card,
                  backgroundColor: card.color,
                  transform: hoveredCard === card.id ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  <h2 style={styles.cardTitle}>{card.title}</h2>
                  <p style={styles.cardDescription}>{card.description}</p>
                </div>
                <div style={styles.cardFooter}>
                  Card {card.id} of {cards.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer after */}
      <div style={styles.spacerAfter}>
        <h1 style={styles.spacerTitle}>
          Keep Scrolling ↓
        </h1>
      </div>
    </div>
  );
};

export default HorizontalScrollOnVertical;