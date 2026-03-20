export default function Composer({
  title,
  setTitle,
  body,
  setBody,
  handlePost,
}) {
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  
  const isDisabled = !title.trim() || !body.trim();

  return (
    <div className="composer">
      <div className="composer-title">✦ New Post ✦</div>

      <input
        placeholder="Post title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <textarea
        placeholder="What's on your mind?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <div className="composer-footer">
        <span className="char-count">{body.length} chars</span>

        <button className="btn-post" onClick={handlePost} disabled={isDisabled}>
          Publish →
        </button>
      </div>
    </div>
  );
}
