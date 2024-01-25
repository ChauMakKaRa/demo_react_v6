import clsx from 'clsx';
import styles from './PaymentMethod.module.scss';
function PaymentMethod({ total, InstallationFees, moneyUS }) {
    return (
        <div className={clsx(styles.total_payment)}>
            <div className="row">
                <div className="col-sm-8"></div>
                <div className="col-sm-3">Tổng tiền hàng</div>
                <div className="col-sm-1" style={{ color: '#fe2c55' }}>
                    {total.toLocaleString('en-US')}đ
                </div>
            </div>
            <div className="row" style={{ margin: '20px 0px 20px 10px' }}>
                <div className="col-sm-8"></div>
                <div className="col-sm-3">Phí lắp đặt</div>
                <div className="col-sm-1" style={{ color: '#fe2c55' }}>
                    {InstallationFees.toLocaleString('en-US')}đ
                </div>
            </div>
            <div className="row">
                <div className="col-sm-8"></div>
                <div className="col-sm-3">Tổng thanh toán</div>
                <div className="col-sm-1" style={{ color: '#fe2c55' }}>
                    {moneyUS}đ
                </div>
            </div>
        </div>
    );
}

export default PaymentMethod;
