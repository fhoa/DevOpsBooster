import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from '@emotion/styled'
import Theme from '../../shared/theme/theme'
import { FaDumbbell } from 'react-icons/fa'

const Container = styled.div`
padding: 1rem;
    background: ${Theme.color.background.main};
`

const StyledItem = styled(Carousel.Item)`
    height: 400px;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid lightgrey; 
`

const ItemHeader = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    border-bottom: 1px solid lightgrey; 
    img {
        min-height: 70px;
        min-width: 70px;
        margin: 15px;
        border-radius: 35px;
        background: lightcyan;
    }
`

const ItemHeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: inherit;
    div {
        margin-top: auto;
        margin-bottom: auto;
        width: fit-content;
        p {
            margin: 0;
            color: ${Theme.color.text.dark.disabled}
        }
}
`

const ItemContent = styled.div`
    height: fit-content;
    max-height: 200px;
    min-height: 100px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid lightgrey; 
    p {
            width: 80%;

        }
`

const ItemFooter = styled.div`

`

type Props = {

}

const Reviews: React.FC<Props> = ({ }) => {

    return (
        <Container>
            <h2>Reviews</h2>
            <Carousel interval={4000}>
                <StyledItem>
                    <ItemHeader>
                        <img />
                        <ItemHeaderContainer>
                        <div>
                            <b>Troels Troelsen</b>
                            <p>Styrke træning - 12 uger</p>
                        </div>
                        <div>
                            <FaDumbbell size={'30px'} color={Theme.color.main} style={{margin: '0.2rem'}}/>
                            <FaDumbbell size={'30px'} color={Theme.color.main} style={{margin: '0.2rem'}}/>
                            <FaDumbbell size={'30px'} color={Theme.color.main} style={{margin: '0.2rem'}}/>
                            <FaDumbbell size={'30px'} color={Theme.color.main} style={{margin: '0.2rem'}}/>
                            <FaDumbbell size={'30px'} color={Theme.color.disabled} style={{margin: '0.2rem'}}/>
                        </div>
                        </ItemHeaderContainer>

                    </ItemHeader>
                    <ItemContent>
                        <h5>Headline baby</h5>
                        <p>Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Lectus sit amet est placerat in egestas erat. Eget lorem dolor sed viverra ipsum. Neque vitae tempus quam pellentesque. Diam in arcu cursus euismod. Suscipit tellus mauris a diam.</p>

                    </ItemContent>
                    <ItemFooter>

                    </ItemFooter>
                </StyledItem>
            </Carousel>
        </Container>
    )
}

export default Reviews
