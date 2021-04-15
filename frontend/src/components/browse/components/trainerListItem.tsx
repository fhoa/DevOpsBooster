import React from 'react'
import { Trainer } from '../../trainer/trainer.interface'
import styled from '@emotion/styled'
import Theme from '../../shared/theme/theme'

const Container = styled.div`
    width: 100%;
    height: 200px;
    margin-bottom: 1rem;
    border: 1px solid ${Theme.color.secoundary};
    display: flex;
    border-radius: 1rem;
`
const Img = styled.img`
    height: 160px;
    width: 160px;
    margin: 20px;
    object-fit: cover;
    border-radius: 80px;
`
const ContentContainer = styled.div`
    padding: 1rem;
`

type Props = {
    trainer: Trainer
}

const TrainerListItem: React.FC<Props> = ({trainer}) => {

    return (
        <Container>
            <Img src={trainer.imgUrl}/>
            <ContentContainer>
                <h2>{trainer.name}</h2>
            </ContentContainer>
        </Container>
    )
}

export default TrainerListItem