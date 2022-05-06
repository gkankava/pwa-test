export const webShare = async (title, text, url) => {
  if (!("share" in navigator)) {
    console.error("Error: Unsupported feature: navigator.share");
    return;
  }

  try {
    await navigator.share({ title, text, url });
  } catch (error) {
    console.error(`Error sharing: ${error}`);
    return;
  }

  console.log("Successfully sent share");
};
