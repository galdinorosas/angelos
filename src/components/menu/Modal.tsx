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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] sm:w-[65%] md:h-[65%] bg-white rounded-md p-4 outline-none"
      >
        <Image className="w-full h-full object-cover object-center" src={imageState?.image || ''} alt={imageState?.name || ''} width={700} height={700} />
      </Modal>
  );
};

export default ImageModal;