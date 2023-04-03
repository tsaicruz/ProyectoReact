

const LowStockMessage = ({stock}) => {

    return (
        <div>            
            <p><strong>
                { 
                    stock === 1 
                        ? `Queda sólo 1 unidad! `
                        : `Quedan sólo ${stock} unidades!`
                }
            </strong></p>            
        </div>
    )

}

export default LowStockMessage