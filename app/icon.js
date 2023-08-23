import { ImageResponse } from 'next/server';
 
export const size = {
  width: 30,
  height: 30,
};
export const contentType = 'image/png';
export const runtime = 'edge';
 
export default function icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 28,
          background: '#6449ff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        O
      </div>
    ),
    size,
  );
}