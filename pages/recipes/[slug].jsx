import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import styled from "styled-components";
import Skeleton from "../../components/Skeleton";

// make a connection to the contentful space and store it in client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "recipe"
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug }
    };
  });

  return {
    paths: paths,
    fallback: true
  };
};

export const getStaticProps = async ({ params }) => {
  // This function will run as many times as the getStaticPaths function runs which gets passed in the context object
  // the context object has a params property on it that will hold the slug values.

  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug
  });

  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {
      recipe: items[0]
    },
    revalidate: 1
  };
};

export default function RecipeDetails({ recipe }) {
  if (!recipe) {
    return <Skeleton />;
  }

  const {
    featuredImage,
    title,
    cookingTime,
    ingredients,
    method
  } = recipe.fields;

  return (
    <div>
      <Banner>
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
        />
        <h2>{title}</h2>
      </Banner>
      <Info>
        <p>Take about {cookingTime} mins to cook.</p>
        <h3>Ingredients:</h3>
        {ingredients.map((ingredient) => {
          return <span key={ingredient}>{ingredient}</span>;
        })}
      </Info>
      <Method>
        <h3>Method:</h3>
        <div>{documentToReactComponents(method)}</div>
      </Method>
    </div>
  );
}

// Styles
const Banner = styled.div`
  h2 {
    margin: 0;
    text-transform: uppercase;
    background: #fff;
    display: inline-block;
    padding: 20px;
    position: relative;
    top: -60px;
    left: -10px;
    transform: rotateZ(-1deg);
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Info = styled.div`
  p {
    margin: 0;
  }

  span::after {
    content: ", ";
  }

  span:last-child::after {
    content: ".";
  }
`;

const Method = styled.div``;
