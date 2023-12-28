'use server';

export const fetchArtItems = async () => {
  try {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?limit=10'
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching art items: ', error);
  }
};

export const fetchArtItem = async (id: number) => {
  try {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching single art item: ', error);
  }
};
