
/**
 * Extracts crop and condition information from a detection label.
 * Labels are typically in format "CropName___Condition"
 */
export const extractConditionFromLabel = (label: string) => {
  const parts = label.split('___');
  return {
    crop: parts[0] || 'Unknown',
    condition: parts[1] || 'Unknown'
  };
};

/**
 * Formats confidence value (0-1) to percentage string with 1 decimal place
 */
export const formatConfidencePercentage = (confidence: number): string => {
  return `${(confidence * 100).toFixed(1)}%`;
};

/**
 * Returns appropriate color classes based on condition
 */
export const getConditionColor = (condition: string): string => {
  if (condition.toLowerCase().includes('healthy')) {
    return 'bg-green-500';
  } else if (condition.toLowerCase().includes('blight') || 
             condition.toLowerCase().includes('rot') || 
             condition.toLowerCase().includes('spot')) {
    return 'bg-red-500';
  } else if (condition.toLowerCase().includes('deficiency') || 
             condition.toLowerCase().includes('mildew')) {
    return 'bg-yellow-500';
  } else {
    return 'bg-blue-500';
  }
};
