import MultiColorInput from './MultiColorsInput';
import { useEffect, useState } from 'react';
import ColorPatternDisplay from './ColorPatternDisplay';
import styled from 'styled-components';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

const GridDiv = styled.div`
  display : inline-block;
  > * {
    margin : 10px;
    width : 200px;
    height : 250px;
  }
`;

const ColorInputsContainer = styled.section`
  display : flex;
  justify-content: center;
  padding: 30px;
`;

const ZoomRangeContainer = styled.section`
`;

const colorsChange = new Subject<string[]>();

const App = () => {
  const [colors, setColors] = useState<string[]>(['#FFFFFF', '#C0C0C0', '#808080', '#000000', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF',]);
  const [actualColors, setActualColors] = useState(colors);
  useEffect(() => {
    const subscription = colorsChange.pipe(
      debounceTime(1000)
    ).subscribe(colors => setActualColors(colors));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const [zoom, setZoom] = useState(100);
  const [actualZoom, setActualZoom] = useState(zoom);

  return (
    <div className="App">
      <ColorInputsContainer>
        <MultiColorInput colors={colors} onColorsChange={colors => { setColors(colors); colorsChange.next(colors); }} />
      </ColorInputsContainer>
      <ZoomRangeContainer>
        <label htmlFor="zoom">Zoom</label>
        <Slider min={10} max={500} value={zoom} onChange={(value: number) => setZoom(value)} onAfterChange={setActualZoom} />

      </ZoomRangeContainer>
      <section>
        <GridDiv >
          {
            Array(12).fill(0).map((_, i) => (
              <ColorPatternDisplay zoom={i === 0 ? zoom : actualZoom} key={i} colorPattern={i === 0 ? colors : actualColors} />
            ))
          }
        </GridDiv>
      </section>
    </div>
  );
};

export default App;
