import { useNavigate } from "@tanstack/react-location";
import { useStore } from "./store";
import { useState } from "react";
export default function CreateCard() {
  const setProfile = useStore((store) => store.setProfile);

  const [formData, setFormData] = useState({
    fullName: "",
    aboutMe: "",
    githubURL: "",
    twitterURL: "",
    favouriteBooks: "",
    technologies: {
      HTML: false,
      CSS: false,
      JS: false,
      Git: false,
      React: false,
      NodeJS: false,
    },
  });

  // const { formData, setFormData } = useFormData();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate({ to: "showcase", replace: true });
    setProfile(formData);
  };
  const handleChange = (e) => {
    const isChecked = e.target.checked; // true/false

    setFormData((formData) => ({
      ...formData,
      technologies: {
        ...formData.technologies,
        [e.target.value]: isChecked,
      },
    }));
  };
  return (
    <div className="split-screen">
      {/* <p>Data is {JSON.stringify(formData)}</p> */}
      <div className="left">
        <section className="copy">
          <h1>DevCard</h1>
          <p>Your personal digital portfolio</p>
        </section>
      </div>

      <div className="right">
        <form>
          <section className="copy">
            <h2>Create your DevCard</h2>
          </section>
          <div className="input-container name">
            <input
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              type="text"
              name="fname"
              placeholder="Your Full Name"
            />
          </div>
          <div className="input-container name">
            <input
              onChange={(e) =>
                setFormData({ ...formData, aboutMe: e.target.value })
              }
              type="text"
              name="aboutMe"
              placeholder="About Me"
            />
          </div>
          <h3>Technologies You Know</h3>
          <div className="checkboxes">
            <label className="myLabel">
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                value="HTML"
              />
              HTML
            </label>
            <label className="myLabel">
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                value="CSS"
              />
              CSS
            </label>
            <label className="myLabel">
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                value="JS"
              />
              JS
            </label>
            <label className="myLabel">
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                value="Git"
              />
              Git
            </label>
            <label className="myLabel">
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                value="React"
              />
              React
            </label>
            <label className="myLabel">
              <input
                onChange={(e) => handleChange(e)}
                type="checkbox"
                value="NodeJS"
              />
              Node.JS
            </label>
          </div>
          <div className="input-container name">
            <input
              onChange={(e) =>
                setFormData({ ...formData, githubURL: e.target.value })
              }
              type="text"
              name="githubURL"
              placeholder="Github URL"
            />
          </div>
          <div className="input-container name">
            <input
              onChange={(e) =>
                setFormData({ ...formData, twitterURL: e.target.value })
              }
              type="text"
              name="twitterURL"
              placeholder="Twitter URL"
            />
          </div>
          <div className="input-container name">
            <input
              onChange={(e) =>
                setFormData({ ...formData, favouriteBooks: e.target.value })
              }
              type="text"
              name="favouriteBooks"
              placeholder="Favourite Books"
            />
          </div>
          <button onClick={handleClick} className="signup-btn" type="submit">
            Create Site
          </button>
        </form>
      </div>
    </div>
  );
}
