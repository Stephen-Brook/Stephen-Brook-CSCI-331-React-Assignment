"use client";

type Props = {
  repoUrl: string;
};

export default function RepoBlurb({ repoUrl }: Props) {
  return (
    <p style={{ lineHeight: 1.6 }}>
      View the code for this assignment on GitHub:{" "}
      <a href={repoUrl} target="_blank" rel="noreferrer">{repoUrl}</a>.
      <br />
      For my final project I would like to look into the Vue framework. I want the project to showcase Vue by creating a model weather app. This way I can show some of the unique features of Vue such as its reactivity.
    </p>

  );
}