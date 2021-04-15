import React from 'react'
import styled from '@emotion/styled'
import Theme from '../../shared/theme/theme'
import Checkbox from '../../shared/checkbox/checkbox'
import { Card } from 'react-bootstrap'
import { FaDumbbell } from 'react-icons/fa'

type Props = {
    services: string[]
    online: boolean
    onlineServices?: string[]
}

const Container = styled.div`
    min-height: 400px;
    padding: 1rem;
    background: ${Theme.color.background.main};
`

const Header = styled.div`
    height: 60px;
    display: flex;
`

const HeaderBox = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: auto;

`

const CheckboxContainer = styled.div`
    flex: 1;
    display: flex;
    p {
        font-size: 20px;
        margin-right: 0.5rem;
        width: fit-content;
    };
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const StyledCard = styled(Card)`
    min-width: 15rem;
    width: calc((100% / 3) - 1rem);
    margin: 0.5rem;
    color: ${Theme.color.text.light.primary};

`

const Services: React.FC<Props> = ({ services, online, onlineServices }) => {

    return (
        <Container>
            <Header>
                <HeaderBox>
                    <h2>Services</h2>
                </HeaderBox>
                <HeaderBox>
                    <CheckboxContainer>
                        <p>Personligt</p>
                        <Checkbox name="Personligt" label={""} checked={true} onChange={() => { }} />
                    </CheckboxContainer>
                    <CheckboxContainer>
                        <p>Online</p>
                        <Checkbox name="online" label={""} checked={online} disabled={!online} onChange={() => { }} />
                    </CheckboxContainer>
                </HeaderBox>
            </Header>
            <CardContainer>
                {services && services.map((s, index) => {
                    return (
                        <StyledCard bg={'info'} key={index} >
                            <Card.Header>
                                {s}
                                <FaDumbbell size={'20px'} style={{float: "right"}}/>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Lågsus træning</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </StyledCard>
                    )
                })}
            </CardContainer>
        </Container>
    )
}

export default Services