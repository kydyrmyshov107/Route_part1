import axios from "axios";
import { useEffect, useState } from "react";
import scss from "./About.module.scss";
import Modal from "./Modal/Modal";

const url =
  "https://api.elchocrud.pro/api/v1/c2385b0dfbee77e85d141b47593f8582/editlaptops";

const AboutPage = () => {
  const [data, setData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const getRequest = async () => {
    const response = await axios.get(url);
    setData(response.data);
  };

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <>
      <div className={scss.page}>
        {data.map((item,index) => (
          <div key={index} className={scss.box}>
            <img className={scss.img} src={item.img} alt={item.title} />
            <h2 className={scss.text}>{item.title}</h2>
            <h3 className={scss.text}>{item.price}</h3>
            <button className={scss.openButton} onClick={() => openModal(item)}>
              open
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <div className={scss.card}>
            <div className={scss.cards}>
              <img
                className={scss.img}
                src={selectedItem.img}
                alt={selectedItem.title}
              />
              <p className={scss.desc}>{selectedItem.title}</p>

              <p className={scss.desc}>price:{selectedItem.price}</p>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default AboutPage;
