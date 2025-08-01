'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils';


export default function ProjectGallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div>
      <div className="overflow-hidden rounded-lg border">
        <Image
          src={images[0]}
          alt="Main project image"
          width={1200}
          height={800}
          className="w-full h-auto cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
          onClick={() => setSelectedImage(images[0])}
          priority
          data-ai-hint="project screenshot"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {images.slice(1).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg border">
              <Image
                src={image}
                alt={`Project thumbnail ${index + 1}`}
                width={200}
                height={150}
                className="w-full h-auto cursor-pointer object-cover aspect-video transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedImage(image)}
                data-ai-hint="app interface"
              />
            </div>
          ))}
        </div>
      )}

      <Dialog open={!!selectedImage} onOpenChange={(isOpen) => !isOpen && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-2 sm:p-4">
           <Carousel
              opts={{
                align: "start",
                loop: true,
                initial: images.findIndex(img => img === selectedImage)
              }}
              className="w-full"
            >
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-video w-full flex items-center justify-center">
                       <Image
                          src={image}
                          alt="Expanded project image"
                          width={1600}
                          height={900}
                          className="w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg"
                        />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
            </Carousel>
        </DialogContent>
      </Dialog>
    </div>
  );
}
