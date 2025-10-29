export default function HomePage() {
  return (
    <div>
      <h1>NextJS Homework</h1>
      <p>You can navigate using either the links above or below</p>
      <ul>
        <li><a href="/counter">counter</a> - two counters (+1, +2), reset {'>'} 10, colored via props</li>
        <li><a href="/about">about</a> - paragraph + link to public GitHub repo + topic blurb</li>
        <li><a href="/store">store</a> - fakestoreapi with searchable table</li>
      </ul>
    </div>
  );
}