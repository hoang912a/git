import React, { Component } from 'react'

import LogoMain from '../Img/hanoi.jpg'
import './CityIndex.css'

export default class CityIndex extends Component {
  render() {
    let property_1 = {
      product: "product",
      product_image: "product_image",
      product_content: "product_content",
    }

    let property_2 = [
      {
        image: LogoMain,
        text: "CONTENT_1"
      },
      {
        image: LogoMain,
        text: "CONTENT_2"
      },
      {
        image: LogoMain,
        text: "CONTENT_3"
      },
      {
        image: LogoMain,
        text: "CONTENT_4"
      }
    ]
    let property_3 = []
    for (let i = 0; i < property_2.length; i++) {
      property_3[i] = { id: i, ...property_1, ...property_2[i] }
    }

    console.log(property_3)
    return (
      <div className="city" >
        <div className="content_city">
          <h2>CONTENT</h2>
        </div>
        <div className="product_image_one">
          {property_3.map(Component_image)}
        </div>
      </div>
    )
  }
}
function Component_image(props) {
  return (
    <div key={props.id} className={props.product}>
      <div className={props.product_image}>
        <img src={props.image} />
      </div>
      <div className={props.product_content}>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
