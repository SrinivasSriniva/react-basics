import { useState } from "react"

const TransformLogic = () => {

    const [data, setData] = useState(0)
    const [data1, setData1] = useState(3)
    const [data2, setData2] = useState(2)
    const [mergeData, setMergeData] = useState()
    console.log("Addition=",data, "+","subtraction=",data1, "+","multiplication=",data2, "+","Mergedata=====================",mergeData)

    const Addition = () => {
        setData(22+45)
        console.log(data)
    }


    const Subtraction = () => {
        setData1(78)
        console.log(data1)
    }


    const Multiplication = () => {
        setData2(10*20)
        console.log(data2)
    }
    const mergeAllData = () => {
    setMergeData(data + data1 + data2)
    console.log(mergeData)

    }

    return (
        <div>
            <h1>form</h1>
            <button
                onClick={
                    () => Addition()
                }>Addtion</button>
            <button onClick={() => Subtraction()
            }>Subtraction</button>
            <button onClick={() => Multiplication()
            }>Multiplication</button>
            <button onClick={() => mergeAllData()}>mergeAllData</button>

            
        </div>
    )
}


export default TransformLogic   