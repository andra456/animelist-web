import styled from '@emotion/styled';
import { color } from '../../globals';

interface IInputComposition {
  Input?: any;
}

const S: IInputComposition = {};

S.Input = styled('div')({
  input: {
    width: '100%',
    border: '1px solid' + color['b-100'],
    borderRadius: 12,
    padding: 10,
    '::placeholder': {
      color: color['b-200'],
    },
  },
});

export default S;
