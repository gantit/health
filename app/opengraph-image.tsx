import { ImageResponse } from 'next/og';

import {
  getSourceCodeProFont,
  getUrbanistFont,
  getUrbanistSemiBoldFont
} from '@/lib/utils';
import { Icons } from '@/components/icons';
import { OGimageBase } from '@/components/utils/og-images';

export const pro = 'Pro';
export const healt = 'Health';
export const sharedDescription =
  'ProHealth es una plataforma de salud integral.';
export const sharedImage = {
  width: 1200,
  height: 630,
  type: 'image/png'
};

export const runtime = 'edge';
export const alt = "prohealth's logo";
export const size = {
  width: sharedImage.width,
  height: sharedImage.height
};
export const contentType = sharedImage.type;

export default async function Image() {
  return new ImageResponse(
    (
      <OGimageBase
        title1={pro}
        title2={healt}
        description={sharedDescription}
        icon={<Icons.logo width={200} height={220} />}
      />
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Urbanist',
          data: await getUrbanistFont(),
          style: 'normal',
          weight: 500
        },
        {
          name: 'UrbanistSemiBold',
          data: await getUrbanistSemiBoldFont(),
          style: 'normal',
          weight: 600
        },
        {
          name: 'SourceCodePro',
          data: await getSourceCodeProFont(),
          style: 'normal',
          weight: 400
        }
      ]
    }
  );
}
