import React, { useState, useEffect } from 'react'
import TrainerList from './components/trainerList'
import { Trainer } from '../trainer/trainer.interface'
import axios from 'axios';
import { MockTrainers } from '../../mockData';


const Browse: React.FC = () => {
    const [trainerList, setTrainerList] = useState<Trainer[]>()

    useEffect(() => {
        const fetchData = async() => {
            const rootUrl = process.env.REACT_APP_BACKEND_URL
            ? process.env.REACT_APP_BACKEND_URL : 'http://localhost:4000'
            const result = await axios(
               `${rootUrl}/api/trainers`,
            );
            console.log(result.status)
            setTrainerList(result.data)
        } 
        fetchData();
    }, [])

console.log(trainerList)

    return (
        <>
        <TrainerList trainers={trainerList || MockTrainers}></TrainerList>
        </>
    )
}

export default Browse
    
