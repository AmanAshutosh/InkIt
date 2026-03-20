import { formatDate } from "../utils/formatData";

export default function PostCard({ post, startEdit, handleDelete }) {
  
  const { id, title, body, createdAt, edited } = post;

  
  const handleEdit = () => startEdit(post);
  const handleDeleteClick = () => handleDelete(id);

  return (
    <div className="post-card">
      <div className="post-header">
        <div className="post-title">{title}</div>

        <div className="post-actions">
          <button className="btn-icon edit" onClick={handleEdit}>
            ✎
          </button>

          <button className="btn-icon delete" onClick={handleDeleteClick}>
            ✕
          </button>
        </div>
      </div>

      <div className="post-body">{body}</div>

      <div className="post-meta">
        <span className="post-badge">Post</span>
        <span className="post-date">{formatDate(createdAt)}</span>
        {edited && <span className="edited-badge">edited</span>}
      </div>
    </div>
  );
}
