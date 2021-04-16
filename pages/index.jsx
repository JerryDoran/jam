import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";

export async function getStaticProps() {
  // make a connection to the contentful space and store it in client
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items
    },
    revalidate: 1
  };
}

export default function Recipes({ recipes }) {
  console.log(recipes);

  return (
    <RecipeContainer>
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.sys.id} recipe={recipe} />;
      })}
    </RecipeContainer>
  );
}

// Styles
const RecipeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 60px;
`;
