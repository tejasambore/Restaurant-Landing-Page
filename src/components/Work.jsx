import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
            image: ChooseMeals,
            title: "Choose Meals",
            text: "Lorem ipsum dolor sit amet consectetur.",
        },
        {
            image: DeliveryMeals,
            title: "Delivery Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        },
    ];
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Work</p>
            <h1 className="primary-heading">How It Works</h1>
            <p className="primary-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis modi expedita quidem libero dolorum quos eligendi.
            </p>
        </div>
        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-image-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work