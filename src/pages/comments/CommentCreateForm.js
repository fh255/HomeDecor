import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MentionsInput, Mention } from "react-mentions";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CommentCreateEditForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { useProfileData } from "../../contexts/ProfileDataContext";
import { useNotification } from "../../contexts/NotificationContext"; // Import the Notification context

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");
  const { setNotification } = useNotification(); // Get the setNotification function

  const { popularProfiles } = useProfileData();

  const mentionableUsers = useMemo(() => {
    if (!popularProfiles?.results) return [];
    return popularProfiles.results.map((profile) => {
      const username = profile.owner || "";
      const id = profile.id || "";
      return {
        id: String(id),
        display: String(username),
      };
    });
  }, [popularProfiles]);

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
      setNotification("Comment created successfully."); // Trigger notification
    } catch (err) {
      setNotification("Failed to create comment."); // Notify in case of error
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profileImage} />
          </Link>
          <div className={styles.Form} style={{ flex: 1 }}>
            <MentionsInput
              value={content}
              onChange={handleChange}
              placeholder="Mention @someone and write a comment..."
              className={styles.mentionsInput}
              markup="@__display__"
            >
              <Mention
                trigger="@"
                data={mentionableUsers}
                style={{
                  backgroundColor: "#d1c4e9",
                }}
              />
            </MentionsInput>
          </div>
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!content.trim()}
        type="submit"
      >
        Post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
