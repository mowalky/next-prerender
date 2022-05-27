import path from "path";
import fs from "fs/promises";

function HomePage(props) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  console.log(`revalidate...`);
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      ...data,
    },
    revalidate: 10,
  };
}

export default HomePage;
