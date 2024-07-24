
const API_URL = process.env.REACT_APP_AZURE_API_URL;

export const analyzeImage = async (imageUrl, genderNeutral) => {
  const requestBody = {
    url: imageUrl,
    genderNeutral: false
  };
  debugger;
  console.log(API_URL);
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error('Failed to analyze image');
  }

  return await response.json();
};
