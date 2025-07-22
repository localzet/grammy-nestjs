import { createGrammyParamDecorator } from '../../utils';
import { GrammyParamtype } from '../../enums';

export const Next: () => ParameterDecorator = createGrammyParamDecorator(
  GrammyParamtype.NEXT,
);
