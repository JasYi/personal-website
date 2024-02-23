import "../right_page.css";

export default function CivicTechPage() {
  return (
    <>
      <p className="text-3xl">
        I am interested in the intersection of tech and government. I am
        passionate about making systems that provide sustainable and widespread
        impact. Previously I have worked at the{" "}
        <a
          href="https://beeckcenter.georgetown.edu/"
          target="_blank"
          className="text-blue-600 hover:underline">
          Beeck Center for Social Impact and Innovation
        </a>{" "}
        and am currently a researcher at the{" "}
        <a
          href="https://mdi.georgetown.edu/"
          target="_blank"
          className="text-blue-600 hover:underline">
          Massive Data Institute
        </a>{" "}
        within the McCourt School of Public Policy. I am an incoming software
        engineering intern at{" "}
        <a
          href="https://www.aidygrants.com/"
          target="_blank"
          className="text-blue-600 hover:underline">
          Aidy
        </a>
        , a startup making the grant process easier.
      </p>
    </>
  );
}
