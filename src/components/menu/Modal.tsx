import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

const ImageModal = ({handleClose}: {handleClose: () => void}) => {
    const [imageState, setImageState] = useState<{image: string, name: string} | null>();

    useEffect(() => {
        const imageState = sessionStorage.getItem('imageState');
        if (imageState) {
            setImageState(JSON.parse(imageState));
        }
    }, [])

    const style = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        },
    };

  return (
    <Modal
        isOpen={true}
        aria-labelledby="image-modal-title"
        onRequestClose={handleClose}
        style={style}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] sm:w-[50%] sm:h-[70%] md:h-[80%] bg-white rounded-md p-4 outline-none z-10"
      >
        <Image className="w-full h-full object-cover object-center z-1000" src={imageState?.image || ''} alt={imageState?.name || ''} width={350} height={600} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33vw" />
      </Modal>
  );
};

export default ImageModal;