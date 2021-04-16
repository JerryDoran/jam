import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <Card>
      <div className="featured">
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={300}
          // width={thumbnail.fields.file.details.image.width}
          height={250}
          // height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <Content>
        <Info>
          <h4>{title}</h4>
          <p>Takes approx {cookingTime} mins to make</p>
        </Info>
        <Actions>
          <Link href={`/recipes/${slug}`}>
            <a> Cook this</a>
          </Link>
        </Actions>
      </Content>
    </Card>
  );
};

// Styles
const Card = styled.div`
  transform: rotateZ(-1deg);
`;

const Content = styled.div`
  background: #fff;
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  margin: 0;
  position: relative;
  top: -30px;
  left: -10px;
`;

const Info = styled.div`
  padding: 16px;

  h4 {
    margin: 4px 0;
  }

  p {
    margin: 0;
    color: #777;
  }
`;

const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  a {
    color: #fff;
    background: #f01b29;
    padding: 8px 24px;
    text-decoration: none;
  }
`;

export default RecipeCard;
