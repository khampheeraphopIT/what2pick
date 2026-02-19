/**
 * Sharing utility for what2pick decisions
 */

export const shareDecision = async (title: string, text: string) => {
  const shareData = {
    title,
    text,
    url: typeof window !== "undefined" ? window.location.href : "",
  };

  try {
    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      await navigator.share(shareData);
      return "shared";
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(
        `${title}\n${text}\n${shareData.url}`,
      );
      return "copied";
    }
  } catch (err) {
    if ((err as Error).name !== "AbortError") {
      console.error("Error sharing:", err);
      // Fallback to clipboard on any error
      try {
        await navigator.clipboard.writeText(
          `${title}\n${text}\n${shareData.url}`,
        );
        return "copied";
      } catch (clipErr) {
        console.error("Clipboard fallback failed:", clipErr);
        return "failed";
      }
    }
    return "aborted";
  }
};

export const formatDecisionMessage = (type: string, result: string) => {
  switch (type) {
    case "eat":
      return `I'm eating ${result} today! 😋`;
    case "coin":
      return `The coin landed on: ${result}! 🪙`;
    case "custom":
      return `The wheel chose: ${result}! 🎡`;
    default:
      return `My decision is: ${result}! ✨`;
  }
};
