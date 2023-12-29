'use server';

// Fetch all art items
export const fetchArtItems = async () => {
  try {
    const response = await fetch(
      'https://api.artic.edu/api/v1/artworks?limit=30'
    );

    if (!response.ok) {
      throw new Error('Failed to fetch artworks');
    }

    const artData = await response.json();

    // Collect the image ids so we can fetch the image urls
    const imageIds =
      artData.data?.map((item: { image_id: string }) => item.image_id) || [];
    const imagePromises = imageIds.map((id: string) => fetchImageUrl(id));
    const imageData = await Promise.all(imagePromises);

    const context = {
      imageData,
      artData,
    };

    return context;
  } catch (error) {
    console.error('Error fetching art items: ', error);
  }
};

// Fetch image urls
export const fetchImageUrl = async (id: string) => {
  try {
    // Fetching image url
    const imageUrl = `https://www.artic.edu/iiif/2/${id}/full/843,/0/default.jpg`;

    const response = await fetch(imageUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch art image url');
    }

    return imageUrl;
  } catch (error) {
    console.error('Error fetching art image url: ', error);
  }
};

// Fetch single art item
export const fetchArtItem = async (id: number) => {
  try {
    const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch single artwork');
    }

    const artData = await response.json();
    const imageId = artData.data.image_id;
    const imageUrl = await fetchImageUrl(imageId);

    const context = {
      artData,
      imageUrl,
    };
    return context;
  } catch (error) {
    console.error('Error fetching single art item: ', error);
  }
};
