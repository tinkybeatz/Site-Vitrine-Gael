import React, { createContext, useState, useContext, useEffect } from "react";

// Create the context
const NavigationContext = createContext();

// Custom hook to use the navigation context
export const useNavigation = () => useContext(NavigationContext);

// Provider component
export const NavigationProvider = ({ children, sections }) => {
  const [activeSection, setActiveSection] = useState("home");

  // Navigation functions
  const goToSection = (sectionId) => {
    setActiveSection(sectionId);
    
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const goToNextSection = () => {
    // Find current section index
    const currentIndex = activeSection === "home" 
      ? -1 
      : sections.findIndex(section => `section-${section.key}` === activeSection);
    
    // If we're at the last section or something went wrong, do nothing
    if (currentIndex === sections.length - 1 || currentIndex === -1 && activeSection !== "home") {
      return;
    }

    // Go to next section
    const nextSectionIndex = activeSection === "home" ? 0 : currentIndex + 1;
    const nextSection = `section-${sections[nextSectionIndex].key}`;
    goToSection(nextSection);
  };

  const goToPrevSection = () => {
    // If we're at home already, do nothing
    if (activeSection === "home") {
      return;
    }

    // Find current section index
    const currentIndex = sections.findIndex(section => `section-${section.key}` === activeSection);
    
    // If current section is the first one, go to home
    if (currentIndex === 0) {
      goToSection("home");
      return;
    }

    // Go to previous section
    const prevSectionIndex = currentIndex - 1;
    const prevSection = `section-${sections[prevSectionIndex].key}`;
    goToSection(prevSection);
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY;

      // Check if we're at the top
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }

      // Check each section
      for (const section of sections) {
        const element = document.getElementById(`section-${section.key}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within viewport and not too far below
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`section-${section.key}`);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  // Provide the navigation context to children
  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection,
        goToSection,
        goToNextSection,
        goToPrevSection,
        sections
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
