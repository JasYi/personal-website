import "../right_page.css";

export default function CivicTechPage() {
  return (
    <>
      <p className="text-3xl">
        I have worked in the intersection of technology and government which has
        taught me to put users first. As a software engineer intern and first
        employee at{" "}
        <a
          href="https://www.ycombinator.com/companies/aidy"
          target="_blank"
          className="text-blue-600 hover:underline">
          Aidy (YC W24)
        </a>{" "}
        I learned to listen to users and iterate quickly based on their
        feedback. I also previously worked as a researcher at the{" "}
        <a
          href="https://mdi.georgetown.edu/"
          target="_blank"
          className="text-blue-600 hover:underline">
          Massive Data Institute
        </a>{" "}
        where I tested the fesability of operating a data collection protocol in
        the real world. Finally, when working at the{" "}
        <a
          href="https://beeckcenter.georgetown.edu/"
          target="_blank"
          className="text-blue-600 hover:underline">
          Beeck Center for Social Impact and Innovation
        </a>{" "}
        I gained insight into how technology can often be used in much different
        ways than what was initially tested and how to design for diverse groups
        of people.
      </p>
    </>
  );
}
