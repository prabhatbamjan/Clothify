import React, { useState, useEffect } from "react";
import "./notice.css";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/notice/get");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNotices(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const deleteNotice = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/api/notice/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Update the state to remove the deleted notice
      setNotices(notices.filter((notice) => notice._id !== id));
    } catch (error) {
      console.error("Error deleting notice:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="home-container">
      <div className="notification-container">
        <div className="notification-cards">
          <div className="notification-card">
            <div className="card-description">
              <h1>Notice Page</h1>
              {notices.length > 0 ? (
                <ul>
                  {notices.map((notice) => (
                    <li  className="noc" key={notice._id}>
                      {notice.notice}
                      <button onClick={() => deleteNotice(notice._id)}>Delete</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No notices available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
