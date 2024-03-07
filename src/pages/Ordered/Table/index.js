import { faCircleCheck, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/components/Button';
function Table({ orders }) {
    return (
        <>
            <div className="row">
                <div className="col-sm-1">
                    <b>#</b>
                </div>
                <div className="col-sm-3">
                    <b>MÃ ĐƠN HÀNG</b>
                </div>
                <div className="col-sm-3">
                    <b>GIÁ ĐƠN HÀNG</b>
                </div>
                <div className="col-sm-3">
                    <b>TRANG THÁI GIAO HÀNG</b>
                </div>
                <div className="col-sm-2"></div>
            </div>
            {orders.map((order, index) => (
                <div key={index} className="row" style={{ marginTop: '30px' }}>
                    <div className="col-sm-1" style={{ color: 'black' }}>
                        {index + 1}
                    </div>
                    <div className="col-sm-3" style={{ color: 'black' }}>
                        <Button to={`detail?order_id=${order._id}`}>{order._id}</Button>
                    </div>
                    <div className="col-sm-3" style={{ color: 'red' }}>
                        <p>{order.total.toLocaleString('en-US')}đ</p> <i style={{ color: 'black' }}>({order.pay})</i>
                    </div>
                    <div className="col-sm-3" style={{ color: 'black' }}>
                        {order.status === 'Chờ duyệt' ? (
                            <div>
                                {order.status}{' '}
                                <FontAwesomeIcon style={{ color: 'orange', margin: '0 8px' }} icon={faPencil} />{' '}
                            </div>
                        ) : (
                            <div>{order.status}</div>
                        )}
                    </div>
                    <div className="col-sm-2">
                        <FontAwesomeIcon style={{ color: 'green' }} icon={faCircleCheck} />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Table;
