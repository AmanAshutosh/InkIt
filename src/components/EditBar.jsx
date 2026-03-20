export default function EditBar({
  editingId,
  editTitle,
  setEditTitle,
  editBody,
  setEditBody,
  handleSave,
  setEditingId,
}) {
 
  if (!editingId) return null;

  
  const handleTitleChange = (e) => setEditTitle(e.target.value);
  const handleBodyChange = (e) => setEditBody(e.target.value);
  const handleCancel = () => setEditingId(null);

 
  const isDisabled = !editTitle.trim() || !editBody.trim();

  return (
    <div className="edit-bar">
      <div className="edit-bar-title">✎ Editing Post</div>

      <input
        value={editTitle}
        onChange={handleTitleChange}
        placeholder="Title..."
      />

      <textarea
        value={editBody}
        onChange={handleBodyChange}
        placeholder="Body..."
      />

      <div className="edit-actions">
        <button className="btn-cancel" onClick={handleCancel}>
          Cancel
        </button>

        <button className="btn-save" onClick={handleSave} disabled={isDisabled}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
