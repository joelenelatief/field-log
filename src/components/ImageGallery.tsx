import * as React from 'react';
import Image from 'next/image';

export const ImageGallery: React.FC = () => {
  return (
    <section className="shadow-[0px_16px_40px_rgba(0,0,0,0.05)]">
      <div>
        <div>
          <Image
            src={
              'https://cdn.builder.io/api/v1/image/assets%2F0c19ab369c9a4b18b374f980595d690b%2F4bf1977849534511978b176fdf2ad4f1'
            }
            alt="Field workspace"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};
