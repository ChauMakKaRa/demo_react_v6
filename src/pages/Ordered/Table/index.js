import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/Button';
function Table({ orders }) {
    return (
        <>
            <div className="row">
                <div className="col-sm-1">#</div>
                <div className="col-sm-3">MÃ ĐƠN HÀNG</div>
                <div className="col-sm-3">GIÁ ĐƠN HÀNG</div>
                <div className="col-sm-3">TRANG THÁI GIAO HÀNG</div>
                <div className="col-sm-2"></div>
            </div>
            {orders.map((order, index) => (
                <Button key={index} to={`detail?order_id=${order._id}`}>
                    <div className="row" style={{ marginTop: '30px' }}>
                        <div className="col-sm-1" style={{ color: 'black' }}>
                            {index + 1}
                        </div>
                        <div className="col-sm-3" style={{ color: 'black' }}>
                            {order._id}
                        </div>
                        <div className="col-sm-3" style={{ color: 'red' }}>
                            {order.total.toLocaleString('en-US')}đ
                        </div>
                        <div className="col-sm-3" style={{ color: 'black' }}>
                            {order.status}
                        </div>
                        <div className="col-sm-2">
                            <FontAwesomeIcon style={{ color: 'green' }} icon={faCircleCheck} />
                        </div>
                    </div>
                </Button>
            ))}
        </>
    );
}

export default Table;
