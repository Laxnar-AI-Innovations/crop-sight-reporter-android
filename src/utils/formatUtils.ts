
export const formatConfidencePercentage = (confidence: number): string => {
  return `${(confidence * 100).toFixed(1)}%`;
};

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
};

export const extractConditionFromLabel = (label: string): { crop: string, condition: string } => {
  const parts = label.split('___');
  if (parts.length === 2) {
    return { crop: parts[0], condition: parts[1].replace(/_/g, ' ') };
  }
  return { crop: label, condition: 'Unknown' };
};

export const getConditionColor = (condition: string): string => {
  const lowerCondition = condition.toLowerCase();
  
  if (lowerCondition.includes('healthy')) {
    return 'bg-green-500';
  } else if (lowerCondition.includes('blight') || 
             lowerCondition.includes('rust') || 
             lowerCondition.includes('spot')) {
    return 'bg-red-500';
  } else if (lowerCondition.includes('mild') || 
             lowerCondition.includes('early')) {
    return 'bg-yellow-500';
  } else {
    return 'bg-gray-500';
  }
};
