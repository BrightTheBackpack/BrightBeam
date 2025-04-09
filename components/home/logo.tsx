/** @jsxImportSource theme-ui */
import React, { useState, useEffect, useRef } from 'react';
import { Box, Heading, ThemeProvider } from 'theme-ui';

const Logo = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [laserPosition, setLaserPosition] = useState({ x: 0, y: 0 });
  const [pathProgress, setPathProgress] = useState(0);
  const [sparks, setSparks] = useState([]);
  
  const firstLineRef = useRef(null);
  const secondLineRef = useRef(null);
  
  // Create animation for laser tracing the text
  useEffect(() => {
    const duration = 6000; // 6 seconds total animation
    
    let startTime = null;
    let animationFrameId;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Calculate current position along the path
      setPathProgress(progress);
      
      // Determine which text line we're currently engraving
      if (progress < 0.5) {
        // First half - animate "brightbeam"
        const lineProgress = progress * 2; // Scale to 0-1 for first line
        
        // Simulate position along the text path
        const x = 20 + lineProgress * 240;
        const y = 60;
        setLaserPosition({ x, y });
        
        // Generate sparks at current position
        if (Math.random() > 0.7) {
          generateSpark(x, y);
        }
      } else if (progress >= 0.5 && progress < 1) {
        // Second half - animate "engraving"
        const lineProgress = (progress - 0.5) * 2; // Scale to 0-1 for second line
        
        // Simulate position along the text path
        const x = 20 + lineProgress * 220;
        const y = 120;
        setLaserPosition({ x, y });
        
        // Generate sparks at current position
        if (Math.random() > 0.7) {
          generateSpark(x, y);
        }
      } else {
        // Animation complete - show full text
        setTextVisible(true);
      }
      
      // Continue animation if not finished
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setTextVisible(true);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  // Function to generate a spark at the current laser position
  const generateSpark = (x, y) => {
    const newSparks = [...sparks];
    
    // Add 2-4 new sparks
    const sparkCount = Math.floor(Math.random() * 3) + 2;
    
    for (let i = 0; i < sparkCount; i++) {
      // Create random direction for spark
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 15 + 5;
      
      newSparks.push({
        id: `spark-${Date.now()}-${i}`,
        x: x,
        y: y,
        destX: x + Math.cos(angle) * distance,
        destY: y + Math.sin(angle) * distance,
        size: Math.random() * 3 + 1,
        opacity: 1,
        color: Math.random() > 0.7 ? 'yellow' : 'white',
      });
    }
    
    // Limit number of sparks for performance
    if (newSparks.length > 50) {
      newSparks.splice(0, newSparks.length - 50);
    }
    
    setSparks(newSparks);
    
    // Animate spark fading
    setTimeout(() => {
      setSparks(currentSparks => 
        currentSparks.filter(spark => spark.id !== `spark-${Date.now()}`)
    );
    }, 300);
  };
  
  return (
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: '100vh',
        p: 4
      }}>
        <Box sx={{ position: 'relative' }}>
          {/* First text line: "brightbeam" */}
          <Heading 
            ref={firstLineRef}
            sx={{
              fontSize: '5rem',
              fontWeight: 'bold',
              mb: 2,
              color: textVisible || pathProgress >= 0.5 ? '#DBDBDB' : 'transparent',
              textShadow: textVisible ? '0 0 10px rgba(219, 219, 219, 0.7)' : 'none',
              transition: 'text-shadow 0.5s ease'
            }}
          >
            brightbeam
          </Heading>
          
          {/* First text line path tracing */}
          {pathProgress < 0.5 && (
            <Box
              sx={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
                width: `${(pathProgress * 2) * 100}%`,
                height: '100%'
              }}
            >
              <Heading sx={{
                fontSize: '5rem',
                fontWeight: 'bold',
                mb: 2,
                color: 'white'
              }}>
                brightbeam
              </Heading>
            </Box>
          )}
          
          {/* Second text line: "engraving" */}
          <Heading 
            ref={secondLineRef}
            sx={{
              fontSize: '5rem',
              fontWeight: 'bold',
              color: textVisible ? '#DBDBDB' : 'transparent',
              textShadow: textVisible ? '0 0 10px rgba(219, 219, 219, 0.7)' : 'none',
              transition: 'text-shadow 0.5s ease'
            }}
          >
            engraving
          </Heading>
          
          {/* Second text line path tracing */}
          {pathProgress >= 0.5 && pathProgress < 1 && (
            <Box
              sx={{ 
                position: 'absolute',
                bottom: 0,
                left: 0,
                overflow: 'hidden',
                width: `${(pathProgress - 0.5) * 2 * 100}%`,
                height: '50%'
              }}
            >
              <Heading sx={{
                fontSize: '5rem',
                fontWeight: 'bold',
                color: 'white'
              }}>
                engraving
              </Heading>
            </Box>
          )}
          
          {/* Laser dot */}
          {pathProgress < 1 && (
            <Box
              sx={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                bg: 'white',
                borderRadius: '50%',
                boxShadow: '0 0 10px 2px white, 0 0 20px 10px rgba(255, 255, 255, 0.5)',
                left: `${laserPosition.x}px`,
                top: `${laserPosition.y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          )}
          
          {/* Sparks */}
          {sparks.map((spark) => (
            <Box
              key={spark.id}
              sx={{
                position: 'absolute',
                width: `${spark.size}px`,
                height: `${spark.size}px`,
                borderRadius: '50%',
                bg: spark.color,
                opacity: spark.opacity,
                left: spark.x,
                top: spark.y,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${spark.size * 2}px ${spark.size}px ${spark.color}`
              }}
            />
          ))}
        </Box>
      </Box>
  );
};

export default Logo;
