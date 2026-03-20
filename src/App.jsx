import { useState, useEffect } from "react";
import Header from "./components/Header";
import Composer from "./components/Composer";
import EditBar from "./components/EditBar";
import PostCard from "./components/PostCard";
import { initialPosts } from "./data/initialPosts";


let idCounter = 3;


export default function App() {
 
  const [posts, setPosts] = useState(initialPosts);

  
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  
  const [theme, setTheme] = useState("system");

  
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else if (theme === "light") {
      root.removeAttribute("data-theme");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      root.setAttribute("data-theme", prefersDark ? "dark" : "light");
    }
  }, [theme]);

  //  ADD POST
  const addPost = () => {
    if (!title || !body) return;

    const newPost = {
      id: ++idCounter,
      title: title.trim(),
      body: body.trim(),
      createdAt: Date.now(),
      edited: false,
    };

    setPosts([newPost, ...posts]);

    setTitle("");
    setBody("");
  };

  //  DELETE POST
  const deletePost = (id) => {
    if (!window.confirm("Delete this post?")) return;

    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  //  START EDIT
  const startEdit = (post) => {
    setEditingId(post.id);
    setEditTitle(post.title);
    setEditBody(post.body);
  };

  //  SAVE EDIT
  const saveEdit = () => {
    if (!editTitle || !editBody) return;

    const updatedPosts = posts.map((post) => {
      if (post.id === editingId) {
        return {
          ...post,
          title: editTitle.trim(),
          body: editBody.trim(),
          edited: true,
        };
      }
      return post;
    });

    setPosts(updatedPosts);
    setEditingId(null);
  };

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />

      <Composer
        title={title}
        setTitle={setTitle}
        body={body}
        setBody={setBody}
        handlePost={addPost}
      />

      <EditBar
        editingId={editingId}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editBody={editBody}
        setEditBody={setEditBody}
        handleSave={saveEdit}
        setEditingId={setEditingId}
      />

      <div className="feed-header">
        <span>Feed</span>
        <span>{posts.length} posts</span>
      </div>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          startEdit={startEdit}
          handleDelete={deletePost}
        />
      ))}
    </div>
  );
}
