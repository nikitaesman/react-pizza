import React, {useEffect, useState} from 'react';
import cs from "./DiscountForm.module.scss"
import MyImage from "../UI/MyImage";
import PizzaSliceImage from "../../images/PizzaSlice.png"
import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const DiscountForm = () => {
    const [discountModal, setDiscountModal] = useState<boolean>(false)

    useEffect(() => {
        if (localStorage.getItem("discount")) {
            let isDiscount = JSON.parse(localStorage.getItem("discount") || "")
            if (isDiscount) {
                setDiscountModal(false)
            }else {
                setDiscountModal(true)
            }
        }else {
            setDiscountModal(true)
        }

    }, [])

    return (
        <Modal modalOpen={discountModal} setModalOpen={setDiscountModal} border={false}>
            <div className={cs.preBox}>
                <div className={cs.box}>
                    <div className={cs.offer}>
                        <h2 className={cs.title}>
                            Вам повезло, скидка 15%
                        </h2>
                        <p className={cs.text}>
                            Заполните форму и получите скидку 15% на заказ от 599₽
                        </p>
                        <form
                            className={cs.form}
                            onSubmit={(e)=>{
                                e.preventDefault()
                                setDiscountModal(false)
                                localStorage.setItem("discount", JSON.stringify(true))
                            }}
                        >
                            <Input placeholder="Введите имя" required={true}/>
                            <Input placeholder="Введите почту" required={true}/>
                            <Button type="submit" className={cs.formBtn} onClick={() => {}}>
                                Получить скидку
                            </Button>
                        </form>
                    </div>
                    <MyImage className={cs.image} src={PizzaSliceImage}/>
                </div>
            </div>
        </Modal>
    );
};

export default DiscountForm;