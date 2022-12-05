import "./showcase.css";
import { useStore } from "./store";
export default function CardShowCase() {
  const profileInformation = useStore((store) => store.profileInformation);
  {
  }
  return (
    <div className="pageBody">
      <main className="has-dflex-center">
        <section>
          <div className="lx-container-85">
            <div className="lx-row align-stretch">
              <div className="lx-column is-3">
                <div className="lx-row">
                  <div className="lx-card">
                    <div className="lx-row">
                      <div className="has-dflex-center bs-md pic">
                        <img
                          src={profileInformation.pfp}
                          alt={profileInformation.fullName}
                        />
                      </div>
                      <div className="infos">
                        <span>
                          <i className="fas fa-user-circle"></i>&nbsp;&nbsp;{" "}
                          {profileInformation.fullName}
                        </span>
                        <span>
                          <i className="fas fa-briefcase"></i>
                          &nbsp;&nbsp;Keyboard Enthusiast
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lx-card">
                    <div className="lx-row">
                      <h1 className="title">
                        Connect with {profileInformation.fullName}
                      </h1>
                      <div className="mini-cards">
                        <a
                          className="has-dflex-center bs-md"
                          href={profileInformation.githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-github-alt">GitHub URL</i>
                        </a>
                        <a
                          className="has-dflex-center bs-md"
                          href={profileInformation.twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter">Twitter URL</i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lx-column">
                <div className="lx-row">
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-info-circle"></i>&nbsp;Welcome to
                      {profileInformation.fullName}'s corner of the Internet
                    </h1>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div className="text">
                      <p>{profileInformation.aboutMe}</p>
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div className="mini-cards">
                      {Object.entries(profileInformation.technologies).map(
                        (entry, idx) => {
                          return entry[1] ? (
                            <span
                              key={idx}
                              className="has-dflex-center bs-md"
                              title={entry[0]}
                            >
                              <i className="fab fa-css3-alt">{entry[0]}</i>
                            </span>
                          ) : null;
                        }
                      )}
                    </div>
                  </div>
                  <div className="lx-row lx-card">
                    <h1 className="title">
                      <i className="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div className="text">
                      <ol>
                        {profileInformation.favouriteBooks.map((book, idx) => {
                          return (
                            <li key={idx}>
                              <p>
                                <b>{book}</b>
                              </p>
                            </li>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
