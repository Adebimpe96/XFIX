import CustomerHistory from "./CustomerHistory"

const HistoryPage = () => {

    return(
        <>
        <div className="flex flex-row justify-center pb-5 pt-3">
                <h4 className="text-darkBlue font-semibold text-3xl">History</h4>
            </div>
            <div className="flex flex-row border-b-2 border-b-black font-semibold justify-between">
                <div className="text-darkBlue col text-start"><h4 className="mb-2 text-2xl ml-3">Previous orders</h4></div>
                <div className="text-darkBlue col text-end"><h4 className="mb-2 text-2xl mr-3">Order status</h4></div>
            </div>
         <CustomerHistory date= 'OCT 2022' />
         <CustomerHistory date= 'NOV 2022' />
        </>
    )
}

export default HistoryPage;