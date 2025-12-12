import React, { useState, useEffect, useRef } from 'react';

const ROICalculator = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  // Form inputs
  const [monthlyVisitors, setMonthlyVisitors] = useState('');
  const [avgOrderValue, setAvgOrderValue] = useState('');
  const [conversionRate, setConversionRate] = useState('');

  // Calculated results
  const [results, setResults] = useState({
    currentRevenue: 0,
    projectedRevenue: 0,
    revenueIncrease: 0,
    conversionIncrease: 0,
    conversionsPerYear: 0,
    additionalRevenue: 0,
    roiPercentage: 0
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Calculate ROI when inputs change using Kinseb CRO formula
  useEffect(() => {
    if (monthlyVisitors && avgOrderValue && conversionRate) {
      const visitors = parseFloat(monthlyVisitors) || 0;
      const orderValue = parseFloat(avgOrderValue) || 0;
      const currentRate = parseFloat(conversionRate) || 0;

      // Current metrics
      const currentConversions = (visitors * (currentRate / 100));
      const currentMonthlyRevenue = currentConversions * orderValue;
      const currentAnnualRevenue = currentMonthlyRevenue * 12;

      // CRO improvement calculations
      // Calculate improvement based on current conversion rate
      // Lower conversion rates typically see higher percentage improvements
      // This creates a realistic scaling improvement rate
      let improvementMultiplier;
      if (currentRate < 1) {
        improvementMultiplier = 0.40; // 40% improvement for very low conversion rates
      } else if (currentRate < 2) {
        improvementMultiplier = 0.30; // 30% improvement for low conversion rates
      } else if (currentRate < 3) {
        improvementMultiplier = 0.25; // 25% improvement for average conversion rates
      } else if (currentRate < 5) {
        improvementMultiplier = 0.20; // 20% improvement for good conversion rates
      } else {
        improvementMultiplier = 0.15; // 15% improvement for high conversion rates
      }
      
      const newConversionRate = currentRate * (1 + improvementMultiplier);
      
      // New metrics after CRO
      const newConversions = (visitors * (newConversionRate / 100));
      const newMonthlyRevenue = newConversions * orderValue;
      const newAnnualRevenue = newMonthlyRevenue * 12;

      // Calculate increases
      const additionalConversionsPerMonth = newConversions - currentConversions;
      const additionalConversionsPerYear = additionalConversionsPerMonth * 12;
      const additionalRevenue = newAnnualRevenue - currentAnnualRevenue;
      
      // Conversion rate improvement percentage
      const conversionRateImprovement = improvementMultiplier * 100;
      
      // Revenue ROI percentage
      const revenueROI = ((newAnnualRevenue - currentAnnualRevenue) / currentAnnualRevenue) * 100;

      setResults({
        currentRevenue: currentAnnualRevenue,
        projectedRevenue: newAnnualRevenue,
        revenueIncrease: additionalRevenue,
        conversionIncrease: conversionRateImprovement,
        conversionsPerYear: additionalConversionsPerYear,
        additionalRevenue: additionalRevenue,
        roiPercentage: revenueROI
      });
    } else {
      setResults({
        currentRevenue: 0,
        projectedRevenue: 0,
        revenueIncrease: 0,
        conversionIncrease: 0,
        conversionsPerYear: 0,
        additionalRevenue: 0,
        roiPercentage: 0
      });
    }
  }, [monthlyVisitors, avgOrderValue, conversionRate]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleReset = () => {
    setMonthlyVisitors('');
    setAvgOrderValue('');
    setConversionRate('');
    setResults({
      currentRevenue: 0,
      projectedRevenue: 0,
      revenueIncrease: 0,
      conversionIncrease: 0,
      conversionsPerYear: 0,
      additionalRevenue: 0,
      roiPercentage: 0
    });
  };

  const handleCopyResults = () => {
    if (results.projectedRevenue === 0) {
      alert('Please fill in all fields to generate results first.');
      return;
    }

    const resultText = `
ROI Calculator Results
━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR RETURN ON INVESTMENT: ${formatCurrency(results.projectedRevenue)}/year
with CRO Optimization

Conversion Rate: +${formatNumber(results.conversionIncrease)}%
  +${formatNumber(results.conversionsPerYear)} conversions/year

Average Order Value: +${formatNumber(results.conversionIncrease)}%
  +${formatNumber(results.conversionsPerYear)} orders/year

Revenue Growth: +${formatNumber(results.roiPercentage)}%
  +${formatCurrency(results.additionalRevenue)}/year

Your results are an estimate based on industry averages and tested conversion growth benchmarks.
    `.trim();

    navigator.clipboard.writeText(resultText).then(() => {
      alert('Results copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy: ', err);
      alert('Failed to copy results. Please try again.');
    });
  };

  return (
    <div style={styles.wrapper} ref={sectionRef}>
      <div style={{
        ...styles.container,
        padding: isMobile ? '60px 20px' : '50px 150px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out'
      }}>
        {/* Main content wrapper */}
        <div style={{
          ...styles.mainContent,
          width: isMobile ? '100%' : '1000px',
          gap: isMobile ? '20px' : '25px'
        }}>
          {/* Header Section */}
          <div style={{
            ...styles.headerSection,
            width: isMobile ? '100%' : '800px',
            gap: isMobile ? '20px' : '12px'
          }}>
            <div style={{
              ...styles.headerContent,
              width: isMobile ? '100%' : '800px',
              gap: isMobile ? '15px' : '10px'
            }}>
              {/* Button */}
              <button style={{
                ...styles.primaryButton,
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '238px' : 'none',
                margin: isMobile ? '0 auto' : '0',
                whiteSpace: 'nowrap'
              }}>
                <img 
                  src="/images/7.png" 
                  alt="Growth" 
                  style={styles.buttonIcon}
                />
                <span style={styles.buttonText}>growth insights</span>
              </button>

              {/* Heading */}
              <h2 style={{
                ...styles.mainHeading,
                width: isMobile ? '100%' : '800px',
                fontSize: isMobile ? '28px' : '38px',
                lineHeight: isMobile ? '42px' : '56px'
              }}>
                Find Out What You're Leaving on the Table
              </h2>

              {/* Description */}
              <p style={{
                ...styles.description,
                width: isMobile ? '100%' : '800px',
                fontSize: isMobile ? '13px' : '13.5px',
                lineHeight: isMobile ? '22px' : '26px'
              }}>
                Our ROI Calculator helps you estimate the potential revenue growth your brand could unlock through data-driven conversion optimization. Enter your traffic, average order value, and conversion rate — and see how small improvements translate into big results.
              </p>
            </div>
          </div>

          {/* Calculator Section */}
          <div style={{
            ...styles.calculatorSection,
            width: isMobile ? '100%' : '1000px',
            gap: isMobile ? '20px' : '18px'
          }}>
            {/* Main Calculator Card */}
            <div style={{
              ...styles.calculatorCard,
              flexDirection: isMobile ? 'column' : 'row',
              padding: isMobile ? '30px 20px' : '35px 40px',
              gap: isMobile ? '30px' : '40px',
              width: isMobile ? '100%' : '1000px',
              minHeight: isMobile ? 'auto' : 'auto',
              height: 'auto'
            }}>
              {/* Left Side - Input Form */}
              <div style={{
                ...styles.inputSection,
                width: isMobile ? '100%' : '365px'
              }}>
                {/* Form Heading */}
                <div style={styles.formHeading}>
                  <h2 style={{
                    ...styles.formTitle,
                    fontSize: isMobile ? '32px' : '38px',
                    lineHeight: isMobile ? '48px' : '56px',
                    width: isMobile ? '100%' : '100%'
                  }}>
                    Calculate
                  </h2>
                </div>

                {/* Form Description */}
                <p style={{
                  ...styles.formDescription,
                  width: isMobile ? '100%' : '365px',
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: isMobile ? '20px' : '22px'
                }}>
                  Adjust your traffic, order value, and conversion rate to see your growth potential in real time
                </p>

                {/* Input Fields */}
                <div style={{
                  ...styles.inputFieldsContainer,
                  width: isMobile ? '100%' : '365px',
                  gap: isMobile ? '20px' : '20px'
                }}>
                  {/* Website Visitors Input */}
                  <div style={{
                    ...styles.inputGroup,
                    width: isMobile ? '100%' : '365px'
                  }}>
                    <label style={styles.inputLabel}>
                      Website visitors (Monthly)*
                    </label>
                    <input
                      type="number"
                      placeholder="Add value"
                      value={monthlyVisitors}
                      onChange={(e) => setMonthlyVisitors(e.target.value)}
                      style={styles.inputField}
                    />
                    <span style={styles.inputHelper}>
                      The total number of people visiting your site each month.
                    </span>
                  </div>

                  {/* Average Order Value Input */}
                  <div style={{
                    ...styles.inputGroup,
                    width: isMobile ? '100%' : '365px'
                  }}>
                    <label style={styles.inputLabel}>
                      Average Order Value*
                    </label>
                    <input
                      type="number"
                      placeholder="Add value"
                      value={avgOrderValue}
                      onChange={(e) => setAvgOrderValue(e.target.value)}
                      style={styles.inputField}
                    />
                    <span style={styles.inputHelper}>
                      The average dollar amount spent per transaction.
                    </span>
                  </div>

                  {/* Conversion Rate Input */}
                  <div style={{
                    ...styles.inputGroup,
                    width: isMobile ? '100%' : '365px',
                    position: 'relative'
                  }}>
                    <label style={styles.inputLabel}>
                      Current Conversion Rate*
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="number"
                        placeholder="Add value"
                        value={conversionRate}
                        onChange={(e) => setConversionRate(e.target.value)}
                        style={styles.inputField}
                      />
                      <span style={styles.percentageSign}>%</span>
                    </div>
                    <span style={styles.inputHelper}>
                      The percentage of visitors who complete a purchase.
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Side - Results Display */}
              <div style={{
                ...styles.resultsSection,
                width: isMobile ? '100%' : '430px',
                padding: isMobile ? '25px 20px' : '25px'
              }}>
                {/* Results Header */}
                <div style={styles.resultsHeader}>
                  <h3 style={{
                    ...styles.resultsTitle,
                    fontSize: isMobile ? '14px' : '16px',
                    width: isMobile ? '100%' : '100%'
                  }}>
                    YOUR RETURN ON INVESTMENT
                  </h3>
                  <div style={styles.revenueAmount}>
                    <h2 style={{
                      ...styles.revenueValue,
                      fontSize: isMobile ? '32px' : '36px',
                      lineHeight: isMobile ? '48px' : '64px'
                    }}>
                      {results.projectedRevenue > 0 ? formatCurrency(results.projectedRevenue) : '$---'}/year
                    </h2>
                  </div>
                  <span style={{
                    ...styles.optimizationLabel,
                    fontSize: isMobile ? '12px' : '13px'
                  }}>
                    with CRO Optimization
                  </span>
                </div>

                {/* Divider */}
                <div style={styles.resultsDivider}></div>

                {/* Results Breakdown */}
                <div style={{
                  ...styles.resultsBreakdown,
                  width: isMobile ? '100%' : '100%',
                  gap: isMobile ? '15px' : '20px'
                }}>
                  {/* Conversion Rate Increase */}
                  <div style={styles.resultRow}>
                    <span style={{
                      ...styles.resultLabel,
                      fontSize: isMobile ? '14px' : '16px'
                    }}>
                      Conversion Rate
                    </span>
                    <div style={styles.resultValueContainer}>
                      <span style={{
                        ...styles.resultValue,
                        fontSize: isMobile ? '14px' : '16px'
                      }}>
                        {results.conversionIncrease > 0 ? `+${formatNumber(results.conversionIncrease)}%` : '+---%'}
                      </span>
                      <span style={{
                        ...styles.resultSubtext,
                        fontSize: isMobile ? '10px' : '11px'
                      }}>
                        {results.conversionsPerYear > 0 ? `+${formatNumber(results.conversionsPerYear)}` : '+---'} conversions /year
                      </span>
                    </div>
                  </div>

                  {/* Average Order Value */}
                  <div style={styles.resultRow}>
                    <span style={{
                      ...styles.resultLabel,
                      fontSize: isMobile ? '14px' : '16px'
                    }}>
                      Average Order Value
                    </span>
                    <div style={styles.resultValueContainer}>
                      <span style={{
                        ...styles.resultValue,
                        fontSize: isMobile ? '14px' : '16px'
                      }}>
                        {results.conversionIncrease > 0 ? `+${formatNumber(results.conversionIncrease)}%` : '+---%'}
                      </span>
                      <span style={{
                        ...styles.resultSubtext,
                        fontSize: isMobile ? '10px' : '11px'
                      }}>
                        {results.conversionsPerYear > 0 ? `+${formatNumber(results.conversionsPerYear)}` : '+---'} orders /year
                      </span>
                    </div>
                  </div>

                  {/* Revenue Growth */}
                  <div style={styles.resultRow}>
                    <span style={{
                      ...styles.resultLabel,
                      fontSize: isMobile ? '14px' : '16px'
                    }}>
                      Revenue Growth
                    </span>
                    <div style={styles.resultValueContainer}>
                      <span style={{
                        ...styles.resultValue,
                        fontSize: isMobile ? '14px' : '16px'
                      }}>
                        {results.roiPercentage > 0 ? `+${formatNumber(results.roiPercentage)}%` : '+---%'}
                      </span>
                      <span style={{
                        ...styles.resultSubtext,
                        fontSize: isMobile ? '10px' : '11px'
                      }}>
                        {results.additionalRevenue > 0 ? `+${formatCurrency(results.additionalRevenue).replace('$', '$')}` : '+$--'} /year
                      </span>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p style={{
                    ...styles.disclaimer,
                    width: isMobile ? '100%' : '100%',
                    fontSize: isMobile ? '11px' : '12px',
                    lineHeight: isMobile ? '16px' : '18px',
                    marginTop: '10px'
                  }}>
                    Your results are an estimate based on industry averages and tested conversion growth benchmarks.
                  </p>
                </div>

                {/* Action Buttons */}
                <div style={{
                  ...styles.actionButtons,
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '15px' : '19px',
                  width: isMobile ? '100%' : '100%',
                  marginTop: '10px'
                }}>
                  <button 
                    onClick={handleCopyResults}
                    style={{
                      ...styles.actionButtonPrimary,
                      width: isMobile ? '100%' : '48%'
                    }}
                  >
                    <span style={styles.actionButtonText}>Copy Results</span>
                  </button>
                  <button 
                    style={{
                      ...styles.actionButtonSecondary,
                      width: isMobile ? '100%' : '48%'
                    }}
                  >
                    <span style={styles.actionButtonSecondaryText}>Optimize My Site</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA Card */}
            <div style={{
              ...styles.ctaCard,
              flexDirection: isMobile ? 'column' : 'row',
              padding: isMobile ? '25px 20px' : '22px 40px',
              gap: isMobile ? '20px' : '36px',
              width: isMobile ? '100%' : '1000px',
              height: isMobile ? 'auto' : 'auto'
            }}>
              <div style={{
                ...styles.ctaContent,
                width: isMobile ? '100%' : '569px',
                gap: isMobile ? '10px' : '12px'
              }}>
                <h2 style={{
                  ...styles.ctaHeading,
                  width: isMobile ? '100%' : '569px',
                  fontSize: isMobile ? '24px' : '32px',
                  lineHeight: isMobile ? '36px' : '48px'
                }}>
                  Ready To Turn Insights Into Action?
                </h2>
                <p style={{
                  ...styles.ctaDescription,
                  width: isMobile ? '100%' : '569px',
                  fontSize: isMobile ? '13px' : '14px',
                  lineHeight: isMobile ? '18px' : '17px'
                }}>
                  Let's identify exactly where your website is losing conversions — and create a plan to fix it.
                </p>
              </div>
              <button style={{
                ...styles.ctaButton,
                width: isMobile ? '100%' : '225px',
                margin: isMobile ? '0 auto' : '0'
              }}>
                <span style={styles.ctaButtonText}>Get Free CRO Audit →</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    background: 'linear-gradient(180deg, #0D98BA -213.84%, #04091D 109.85%)',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '10px',
    width: '100%',
    maxWidth: '1440px',
    minHeight: 'auto',
  },

  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    margin: '0 auto',
  },

  headerSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
  },

  headerContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
  },

  primaryButton: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 34px',
    gap: '10px',
    height: '48px',
    background: 'linear-gradient(90deg, #FFFFFF 0%, #85CCDD 52.41%, #0D98BA 81.55%, #0B829F 95.26%)',
    border: '1px solid #0D94BB',
    boxShadow: '0px 0px 12px 2px rgba(13, 148, 187, 0.7)',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    whiteSpace: 'nowrap',
  },

  buttonIcon: {
    width: '25px',
    height: '25px',
    objectFit: 'contain',
  },

  buttonText: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    textTransform: 'capitalize',
    color: '#04091D',
    whiteSpace: 'nowrap',
  },

  mainHeading: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: '0',
  },

  description: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: '0',
  },

  calculatorSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
  },

  calculatorCard: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    background: '#041629',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    boxSizing: 'border-box',
    position: 'relative',
  },

  inputSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '15px',
  },

  formHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',
    gap: '10px',
    height: '60px',
  },

  formTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: '0',
  },

  formDescription: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    margin: '0',
  },

  inputFieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    isolation: 'isolate',
  },

  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '10px',
  },

  inputLabel: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    width: '100%',
  },

  inputField: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    width: '100%',
    height: '48px',
    background: 'rgba(13, 152, 186, 0.2)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    outline: 'none',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    boxSizing: 'border-box',
  },

  percentageSign: {
    position: 'absolute',
    right: '24px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#205E7E',
    pointerEvents: 'none',
  },

  inputHelper: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: '0.02em',
    color: '#D0CFCF',
  },

  resultsSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#03101D',
    borderRadius: '20px',
    boxSizing: 'border-box',
    gap: '22px',
    alignSelf: 'stretch',
  },

  resultsHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 0px 22px',
    gap: '10px',
  },

  resultsTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    margin: '0',
    letterSpacing: '0.1em',
  },

  revenueAmount: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
    gap: '10px',
  },

  revenueValue: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: '-0.03em',
    textTransform: 'lowercase',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0',
  },

  optimizationLabel: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
  },

  resultsDivider: {
    width: '100%',
    maxWidth: '370px',
    height: '0px',
    border: '4px solid #205E7E',
  },

  resultsBreakdown: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
  },

  resultRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px',
    width: '100%',
  },

  resultLabel: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
  },

  resultValueContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '0px',
    gap: '3px',
  },

  resultValue: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '24px',
    textAlign: 'right',
    letterSpacing: '0.02em',
    background: 'linear-gradient(263.69deg, #FFFFFF -108.11%, #3AA1DE 98.19%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },

  resultSubtext: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '16px',
    textAlign: 'right',
    letterSpacing: '0.02em',
    color: '#D0CFCF',
  },

  disclaimer: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#FFFFFF',
    margin: '0',
  },

  actionButtons: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '0px',
  },

  actionButtonPrimary: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    height: '48px',
    background: '#0D98BA',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background 0.3s ease',
  },

  actionButtonText: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#000000',
  },

  actionButtonSecondary: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    height: '48px',
    background: 'transparent',
    border: '2px solid #0D98BA',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background 0.3s ease',
    whiteSpace: 'nowrap',
  },

  actionButtonSecondaryText: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#0D98BA',
    whiteSpace: 'nowrap',
  },

  ctaCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#041629',
    boxShadow: '0px 0px 15px #04091D',
    borderRadius: '20px',
    boxSizing: 'border-box',
  },

  ctaContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px',
    margin: '0 auto',
  },

  ctaHeading: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: '-0.03em',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    margin: '0',
  },

  ctaDescription: {
    fontFamily: "'Lato', sans-serif",
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: '0.02em',
    color: '#FFFFFF',
    margin: '0',
  },

  ctaButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 24px',
    gap: '10px',
    height: '48px',
    background: '#0D98BA',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background 0.3s ease',
  },

  ctaButtonText: {
    fontFamily: "'Poppins', sans-serif",
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.02em',
    color: '#000000',
    whiteSpace: 'nowrap',
  },
};

export default ROICalculator;