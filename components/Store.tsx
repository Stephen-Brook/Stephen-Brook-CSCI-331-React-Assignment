"use client";

import { useEffect, useMemo, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function go() {
      try {
        setLoading(true);
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        } 
        const data: Product[] = await res.json();
        if (!cancelled) {
          setProducts(data);
        }
      } catch (e: any) {
        if (!cancelled) {
          setErr(e?.message ?? "Fetch error");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        } 
      }
    }
    go();
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const search = q.trim().toLowerCase();
    if (!search) return products;
    return products.filter(p => p.title.toLowerCase().includes(search));
  }, [products, q]);

  return (
    <div>
      <p>Type in the search bar to filter by title (substring match).</p>
      <div style={{ marginBottom: "1rem" }}>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products by title…"
          style={{ width: "100%", maxWidth: 480, padding: "0.5rem", borderRadius: 6, border: "1px solid black" }}
        />
      </div>

      {loading && <p>Loading products…</p>}
      {err && <p style={{ color: "crimson" }}>Error: {err}</p>}

      {!loading && !err && (
        <div style={{ overflowX: "auto" }}>
          <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 600, border: "2px solid black" }}>
            <thead>
              <tr>
                <th style={th}>Image</th>
                <th style={th}>Title</th>
                <th style={th}>Price</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td style={td}>
                    <img src={p.image} alt={p.title} style={{ height: 48, width: 48, objectFit: "contain" }} />
                  </td>
                  <td style={td}>{p.title}</td>
                  <td style={td}>${p.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: "0.5rem", fontSize: 12}}>
            Showing {filtered.length} of {products.length} products.
          </p>
        </div>
      )}
    </div>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  borderBottom: "1px solid black",
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
  padding: "0.5rem",
};

const td: React.CSSProperties = {
  borderBottom: "1px solid black",
  borderRight: "1px solid black",
  borderLeft: "1px solid black",
  padding: "0.5rem",
  verticalAlign: "middle"
};