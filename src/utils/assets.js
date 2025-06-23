// Asset utility for GitHub Pages compatibility
const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path}`.replace(/\/+/g, '/');
};

export default getAssetPath;