import styled from "styled-components";

const Skeleton = () => {
  return (
    <SkeletonContainer>
      <SkeletonBanner></SkeletonBanner>
      <SkeletonHeader></SkeletonHeader>
      <SkeletonContent></SkeletonContent>
      <SkeletonContent></SkeletonContent>
      <SkeletonContent></SkeletonContent>
    </SkeletonContainer>
  );
};

// Styles
const SkeletonContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
`;

const SkeletonBanner = styled.div`
  background: #dbcc1a;
  border-radius: 4px;
  margin: 20px 0;
  padding: 12% 0;
`;

const SkeletonHeader = styled.div`
  background: #dbcc1a;
  border-radius: 4px;
  margin: 20px 0;
  padding: 15px 0;
  max-width: 500px;
`;

const SkeletonContent = styled.div`
  background: #dbcc1a;
  border-radius: 4px;
  margin: 20px 0;
  padding: 8px;
  max-width: 1000px;
`;

export default Skeleton;
