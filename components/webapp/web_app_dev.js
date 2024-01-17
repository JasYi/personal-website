import "../right_page.css";

export default function WebAppDevPage() {
  return (
    <>
      <h3 className="description">
        I love making small projects on random things that I find interesting.
      </h3>
      <div className="project">
        <h2 className="project-title">Splitify</h2>
        <p className="description-tag">React</p>
        <p className="description-tag">Flask</p>
        <p className="description-tag">OAuth2.0</p>
        <p className="description-tag">Spotify API</p>
      </div>
      <div className="img-container">
        <p className="project-description">
          Splitting your large Spotify playlists into subplaylists
        </p>
        <a href="https://splitify-jasyi.vercel.app/" target="_blank">
          <img src="/splitify.png" className="project-image" />
        </a>
      </div>
    </>
  );
}
