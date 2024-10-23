export const pixelID = process.env.NEXT_PUBLIC_PIXEL_ID;

export const pageView = () => {
  window.fbq("track", "pageView");
};

export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
