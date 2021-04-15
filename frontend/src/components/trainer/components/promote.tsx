import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from '@emotion/styled'
import Theme from '../../shared/theme/theme'

const CarouselImg = styled.img`
    height: 450px;
    object-fit: cover;
    width: 100%;
    display: block;
`
const StyledCaption = styled(Carousel.Caption)`
    background: black;
    opacity: 0.7;
    color: ${Theme.color.text.light.primary};
`

type Props = {

}

const Promote: React.FC<Props> = ({ }) => {

    return (
        <Carousel interval={4000}>
            <Carousel.Item>
                <CarouselImg
                    src="https://image.shutterstock.com/z/stock-vector-stages-of-weight-loss-for-men-male-transformation-of-the-body-sports-fitness-body-vs-a-thick-and-677716897.jpg"
                    alt="First slide"
                />
                <StyledCaption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </StyledCaption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImg
                    src="https://www.schandorffitness.dk/wp-content/uploads/2019/06/Naya-Personlig-Tr%C3%A6ning.jpg"
                    alt="Third slide"
                />

                <StyledCaption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </StyledCaption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImg
                    src="https://www.bodylab.dk/images/bodyfeed/kasper_3.jpg"
                    alt="Third slide"
                />

                <StyledCaption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </StyledCaption>
            </Carousel.Item>
        </Carousel>
    )
} 

export default Promote
