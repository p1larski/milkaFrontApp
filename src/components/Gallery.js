import React from 'react'
import Carousel from 'better-react-carousel'

function Gallery () {
  return (
    <Carousel cols={1} rows={1} gap={20} loop={true} mobileBreakpoint>
      <Carousel.Item>
        <img width="43%" src={require("../images/fryzura1.PNG")} />
        <img width="43%" src={require("../images/fryzura3.PNG")} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="43%" src={require("../images/fryzura2.PNG")} />
      <img width="43%" src={require("../images/fryzura4.PNG")} />
      </Carousel.Item>
      <Carousel.Item>
      <img width="43%" src={require("../images/salon1.PNG")} />
      <img width="43%" src={require("../images/salon2.PNG")} />
      </Carousel.Item>
    </Carousel>
  )
}
export default Gallery;