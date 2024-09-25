import { mapVersionInfo } from './utils';

export const addCommonTransformations = (xml: any, transformations: any) => {
  const commonTransformations = {
    versionInfo: {
      transform: mapVersionInfo,
      dependsOn: xml,
    },
  };

  return { ...commonTransformations, ...transformations };
};
