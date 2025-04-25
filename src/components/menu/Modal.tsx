'use client';

import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

const ImageModal = ({handleClose}: {handleClose: () => void}) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
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
        content: {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: isMobile ? '100%' : '65%',
          height: isMobile ? '50%' : '65%',
          bgcolor: 'background.paper',
          p: 4,
          outline: 'none',
          borderRadius: '8px',
        },
    };

  return (
    <Modal
        isOpen={true}
        aria-labelledby="image-modal-title"
        style={style}
        onRequestClose={handleClose}
      >
        <Image className="w-full h-full object-cover object-center" src={imageState?.image || ''} alt={imageState?.name || ''} width={700} height={700} />
      </Modal>
  );
};

export default ImageModal;