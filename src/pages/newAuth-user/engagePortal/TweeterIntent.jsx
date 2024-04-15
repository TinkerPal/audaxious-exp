function OpenWindow(intentUrl) {
  const maxWidth = 800; // Maximum width for the popup
  const width = Math.min(window.innerWidth - 20, maxWidth); // Responsive width

  const height = 600;
  const left = window.innerWidth / 2 - width / 2;
  const top = window.innerHeight / 2 - height / 2;

  // Open the Twitter intent URL in a popup centered within the screen
  window.open(
    intentUrl,
    "TwitterSharePopup",
    `width=${width},height=${height},left=${left},top=${top}`
  );
}

export function PostNewIntent(tweetText, tweetUrl) {
  const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}&url=${encodeURIComponent(tweetUrl)}`;
  OpenWindow(intentUrl);
}

export function VerifyIntent(tweetText, tweetUrl) {
  const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}&url=${encodeURIComponent(tweetUrl)}`;
  OpenWindow(intentUrl);
}
export function FollowIntent(userName) {
  const intentUrl = `https://twitter.com/intent/follow?screen_name=${userName}`;
  OpenWindow(intentUrl);
}
export function LikeIntent(tweetID) {
  const intentUrl = `https://twitter.com/intent/like?tweet_id=${tweetID}`;
  OpenWindow(intentUrl);
}
export function RepostIntent(tweetID) {
  const intentUrl = `https://twitter.com/intent/retweet?tweet_id=${tweetID}`;
  OpenWindow(intentUrl);
}

export function CommentIntent(tweetID, commentText) {
  const intentUrl = `https://twitter.com/intent/tweet?in_reply_to=${tweetID}&text=${encodeURIComponent(
    commentText
  )}`;
  OpenWindow(intentUrl);
}
