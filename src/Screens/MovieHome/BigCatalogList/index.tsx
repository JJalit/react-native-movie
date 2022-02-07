import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

import BigCatalog from '../../../Components/BigCatalog';

const Container = styled.View`
  height: 300px;
  margin-bottom: 8px;
`;

interface Props {
  url: string;
  onPress: (id: number) => void;
}

const BigCatalogList = ({ url, onPress }: Props) => {
  const [data, setData] = useState<Array<IMovie>>([]);

  useEffect(() => {
    axios
      .get(url)
      .then(response => setData(response.data.data.movies))
      .catch(err => console.log(err));
  }, []);

  return (
    <Container>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={(item, index) => {
          return `bigScreen-${index}`;
        }}
        renderItem={({ item, index }) => (
          <BigCatalog
            id={(item as IMovie).id}
            image={(item as IMovie).large_cover_image}
            year={(item as IMovie).year}
            title={(item as IMovie).title}
            genres={(item as IMovie).genres}
            onPress={onPress}
          />
        )}
      />
    </Container>
  );
};

export default BigCatalogList;
