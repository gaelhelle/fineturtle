import { useRef } from "react";
import { motion } from "framer-motion";
import finemapData from "../../components/Modal/data";

interface Props {
  id: number;
  isOpen: boolean;
  handleClose: () => void;
}

export default function FinemapModal(props: Props) {
  const { id, handleClose } = props;

  const finemapImageData: HTMLElement = document.querySelector(
    "#finemap-image-desktop"
  );

  const blockData: HTMLElement = document.querySelector(
    `#finemapblock-div-${id}`
  );

  const initialPosition: React.CSSProperties = {
    left: blockData.getBoundingClientRect().left,
    top:
      blockData.getBoundingClientRect().top +
      document.documentElement.scrollTop,
    width: blockData.getBoundingClientRect().width,
    height: blockData.getBoundingClientRect().height,
  };

  const finalPosition: React.CSSProperties = {
    left:
      finemapImageData.getBoundingClientRect().left +
      finemapImageData.offsetLeft +
      88,
    top:
      finemapImageData.getBoundingClientRect().top +
      document.documentElement.scrollTop +
      170,
    width: finemapImageData.getBoundingClientRect().width - 176,
    height: finemapImageData.getBoundingClientRect().height - 330,
  };

  const refModal = useRef<HTMLDivElement>();
  const title = finemapData.find((item) => item.id === id).title;
  const content = finemapData.find((item) => item.id === id).htmlContent;

  const handleClick = () => {
    if (!refModal?.current) return;
    handleClose();
  };

  return (
    <div ref={refModal} id="modal-overlay" className="absolute top-0 left-0">
      <motion.div
        key="finemap-modal"
        initial={{
          opacity: 0,
          y: initialPosition.top,
          x: initialPosition.left,
          width: initialPosition.width,
          height: initialPosition.height,
        }}
        animate={{
          opacity: 1,
          y: finalPosition.top,
          x: finalPosition.left,
          width: finalPosition.width,
          height: finalPosition.height,
        }}
        exit={{
          opacity: 0,
          y: initialPosition.top,
          x: initialPosition.left,
          width: initialPosition.width,
          height: initialPosition.height,
        }}
        transition={{
          ease: "easeInOut",
        }}
        className="absolute p-12 bg-[#EBE6E3]"
      >
        <div className="">
          <div className="modal__inner">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="uppercase font-thunder-bold text-4xl mb-8">
                {title}
              </div>
              <div className="relative h-full">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
            </motion.div>
            <div onClick={handleClick} className="absolute top-8 right-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
