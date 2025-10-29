import RepoBlurb from "../../components/RepoBlurb";

export default function AboutPage() {
  return (
    <div>
      <h1>About / Repo</h1>
      <RepoBlurb
        repoUrl="https://github.com/Stephen-Brook/Stephen-Brook-CSCI-331-React-Assignment" 
        topic="Vue Framework"
        howShowcase="measurable performance gains using image optimization, route-level caching, and client/server components where appropriate"
      />
    </div>
  );
}