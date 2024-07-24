
import { useState } from 'react';
import { analyzeImage } from '../services/apiService';

const useAnalyzeImage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const analyze = async (imageUrl, genderNeutral) => {
    setLoading(true);
    setError(null);

    try {
      const result = await analyzeImage(imageUrl, genderNeutral);
      setLoading(false);
      return result;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  };

  return { analyze, loading, error };
};

export default useAnalyzeImage;
