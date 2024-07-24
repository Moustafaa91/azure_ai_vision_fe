
const API_URL = 'https://azureaivision-api.azurewebsites.net/api/analyzeImage';

export const analyzeImage = async (imageUrl, genderNeutral) => {
  const requestBody = {
    url: imageUrl,
    genderNeutral: false
  };
  console.log(requestBody);
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
