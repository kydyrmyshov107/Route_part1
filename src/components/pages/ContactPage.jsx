import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Contact.module.scss";
import Modal from "./Modal/Modal";

const url =
  "https://api.elchocrud.pro/api/v1/43b101cdbfb04e4fdd32a254ab853977/systemunit";

const ContactPage = () => {
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
      <div className={style.wrapper}>
        {data.map((el,index) => (
          <div key={index} className={style.grid}>
            <img className={style.img} src={el.img} alt={el.title} />
            <h2 className={style.text}>{el.title}</h2>
            <h3 className={style.text}>{el.price}</h3>

            <button className={style.openButton} onClick={() => openModal(el)}>
              open
            </button>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <div className={style.lead}>
            <div className={style.list}>
              <img src={selectedItem.img} alt="" />
              <p className={style.desc}>{selectedItem.title}</p>
              <p className={style.desc}>price:{selectedItem.price}</p>

              <button className={style.button} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ContactPage;
