import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { RouteProp } from '@react-navigation/native';
import axios from 'axios';

import BigCatalog from '../../Components/BigCatalog';
import CastList from './CastList';
import ScreenShotList from './ScreenShotList';
import Loading from '../Loading';

const Container = styled.ScrollView`
  flex: 1;
  background-color: #141414;
`;
const ContainerTitle = styled.Text`
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  padding: 24px 16px 8px 16px;
`;
const DescriptionContainer = styled.View``;
const Description = styled.Text`
  padding: 0 16px;
  color: #ffffff;
`;
const SubInfoContainer = styled.View``;
const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;
const LabelInfo = styled.Text`
  color: #ffffff;
`;

type ProfileScreenRouteProp = RouteProp<MovieNaviParamList, 'MovieDetail'>;
interface Props {
  route: ProfileScreenRouteProp;
}

const MovieDetail = ({ route }: Props) => {
  const [data, setData] = useState<IMovieDetail>();

  useEffect(() => {
    const { id } = route.params;
    axios
      .get(`https://yts.lt/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`)
      .then(response => setData(response.data.data.movie))
      .catch(err => console.log(err));
  }, []);

  return data ? (
    <Container>
      <BigCatalog id={data.id} image={data.large_cover_image} year={data.year} title={data.title} genres={data.genres} />
      <SubInfoContainer>
        <ContainerTitle>영화 정보</ContainerTitle>
        <InfoContainer>
          <LabelInfo>{data.runtime}분</LabelInfo>
          <LabelInfo>평점: {data.rating}</LabelInfo>
          <LabelInfo>좋아요: {data.like_count}</LabelInfo>
        </InfoContainer>
      </SubInfoContainer>
      <DescriptionContainer>
        <ContainerTitle>줄거리</ContainerTitle>
        <Description>{data.description_full}</Description>
      </DescriptionContainer>
      {data.cast && <CastList cast={data.cast} />}
      <ScreenShotList images={[data.large_screenshot_image1, data.large_screenshot_image2, data.large_screenshot_image3]} />
    </Container>
  ) : (
    <Loading />
  );
};

export default MovieDetail;
