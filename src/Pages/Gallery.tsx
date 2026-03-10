import { useState } from "react";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { GalleryImages } from "@/images";

const Gallery = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<
    string | null
  >(null);

  // Gallery images (dental themed)
  const galleryImages = [
    GalleryImages[0],
    GalleryImages[1],
    GalleryImages[2],
    GalleryImages[3],
    GalleryImages[4],
    GalleryImages[5],
    GalleryImages[6],
    GalleryImages[7],
  ];

  const containerRef = useScrollReveal<HTMLElement>({
    childSelector: ".reveal-item",
    stagger: 0.1,
  });

  return (
    <>
      <section
        ref={containerRef}
        id="gallery"
        className="py-30 lg:py-36 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal-item text-center mb-16">
            <div className="text-sky-600 font-medium tracking-widest">
              VISUAL JOURNEY
            </div>
            <h2 className="text-5xl font-bold text-sky-950 mt-3">
              Our Smile Gallery
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedGalleryImage(img)}
                className="reveal-item aspect-square overflow-hidden rounded-3xl cursor-pointer group relative"
              >
                <img
                  src={img}
                  alt={`Smile ${index}`}
                  className="w-full h-full object-cover transition-all group-hover:scale-110 duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                  <div className="text-white text-sm">View full size →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 bg-black/90 z-100 flex items-center justify-center p-6"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl hover:text-sky-400"
            >
              ✕
            </button>
            <img
              src={selectedGalleryImage}
              alt="Enlarged gallery"
              className="rounded-3xl shadow-2xl max-h-[85vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
