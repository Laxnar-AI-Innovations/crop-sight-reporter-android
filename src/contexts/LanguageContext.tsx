
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define language translations
export type Translation = {
  [key: string]: string;
};

export type Translations = {
  [key: string]: Translation;
};

// Initial translations for English and Hindi
const translations: Translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    treatments: "Treatments",
    library: "Library",
    
    // Home Page
    analyzeCrops: "Analyze Your Crops",
    takePhoto: "Take a photo of your plants to identify diseases, pests, and health conditions instantly.",
    tapCamera: "Tap the camera button below to get started",
    
    // Analysis Results
    analysisResults: "Analysis Results",
    processedIn: "Processed in",
    detectedConditions: "Detected Conditions",
    noConditions: "No conditions detected.",
    confidence: "Confidence",
    detectionArea: "Detection area:",
    
    // About Page
    aboutTitle: "About Crop Doctor",
    aboutDescription: "Crop Doctor is an AI-powered application designed to help farmers and agricultural scientists identify plant diseases and pests quickly and accurately.",
    howItWorks: "How It Works",
    step1: "Take a clear photo of the affected plant",
    step2: "Our AI analyzes the image to identify diseases",
    step3: "Review detailed results and treatment options",
    developedBy: "Developed by",
    
    // Treatments Page
    treatmentsTitle: "Treatment Solutions",
    commonTreatments: "Common Treatments",
    organic: "Organic Solutions",
    chemical: "Chemical Solutions",
    preventive: "Preventive Measures",
    
    // Library Page
    libraryTitle: "Crop Disease Library",
    searchDisease: "Search diseases",
    commonDiseases: "Common Diseases",
    
    // Language Selector
    selectLanguage: "Language",
    
    // Loading States
    analyzing: "Analyzing your crop...",
    aiExamining: "Our AI is examining your plant for diseases, deficiencies, and overall health.",
    tryAgain: "Try taking another photo or check your network connection."
  },
  hi: {
    // Navigation
    home: "होम",
    about: "परिचय",
    treatments: "उपचार",
    library: "पुस्तकालय",
    
    // Home Page
    analyzeCrops: "अपनी फसलों का विश्लेषण करें",
    takePhoto: "रोगों, कीटों और स्वास्थ्य स्थितियों की पहचान करने के लिए अपने पौधों की तस्वीर लें।",
    tapCamera: "शुरू करने के लिए नीचे कैमरा बटन पर टैप करें",
    
    // Analysis Results
    analysisResults: "विश्लेषण परिणाम",
    processedIn: "प्रोसेस किया गया",
    detectedConditions: "पहचानी गई स्थितियां",
    noConditions: "कोई स्थिति नहीं मिली।",
    confidence: "विश्वास",
    detectionArea: "पहचान क्षेत्र:",
    
    // About Page
    aboutTitle: "क्रॉप डॉक्टर के बारे में",
    aboutDescription: "क्रॉप डॉक्टर एक AI-संचालित एप्लिकेशन है जो किसानों और कृषि वैज्ञानिकों को पौधों के रोगों और कीटों की जल्दी और सटीक पहचान करने में मदद करता है।",
    howItWorks: "यह कैसे काम करता है",
    step1: "प्रभावित पौधे की स्पष्ट तस्वीर लें",
    step2: "हमारा AI रोगों की पहचान करने के लिए छवि का विश्लेषण करता है",
    step3: "विस्तृत परिणाम और उपचार विकल्पों की समीक्षा करें",
    developedBy: "द्वारा विकसित",
    
    // Treatments Page
    treatmentsTitle: "उपचार समाधान",
    commonTreatments: "सामान्य उपचार",
    organic: "जैविक समाधान",
    chemical: "रासायनिक समाधान",
    preventive: "निवारक उपाय",
    
    // Library Page
    libraryTitle: "फसल रोग पुस्तकालय",
    searchDisease: "रोग खोजें",
    commonDiseases: "सामान्य रोग",
    
    // Language Selector
    selectLanguage: "भाषा",
    
    // Loading States
    analyzing: "आपकी फसल का विश्लेषण किया जा रहा है...",
    aiExamining: "हमारा AI आपके पौधे का रोगों, कमियों और समग्र स्वास्थ्य के लिए परीक्षण कर रहा है।",
    tryAgain: "एक और फोटो लेने की कोशिश करें या अपने नेटवर्क कनेक्शन की जांच करें।"
  }
};

// Create the language context
type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
  availableLanguages: string[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Language provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  
  const availableLanguages = Object.keys(translations);
  
  // Translation function
  const t = (key: string): string => {
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    return key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
