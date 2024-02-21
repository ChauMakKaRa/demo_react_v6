import clsx from 'clsx';
import styles from './ReportsAndStatistics.module.scss';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function ReportsAndStatistics() {
    const data = [
        { name: ' 1', doanhThu: 400000 },
        { name: ' 2', doanhThu: 300000 },
        { name: ' 3', doanhThu: 500000 },
        { name: ' 4', doanhThu: 200000 },
        { name: ' 5', doanhThu: 600000 },
        { name: ' 6', doanhThu: 400000 },
        { name: ' 7', doanhThu: 700000 },
        { name: ' 8', doanhThu: 400000 },
        { name: ' 9', doanhThu: 800000 },
        { name: ' 10', doanhThu: 600000 },
        { name: ' 11', doanhThu: 1000000 },
        { name: ' 12', doanhThu: 1100000 },
    ];
    const data2 = [
        { name: ' 1', khachHang: 5 },
        { name: ' 2', khachHang: 4 },
        { name: ' 3', khachHang: 2 },
        { name: ' 4', khachHang: 4 },
        { name: ' 5', khachHang: 10 },
        { name: ' 6', khachHang: 1 },
        { name: ' 7', khachHang: 3 },
        { name: ' 8', khachHang: 5 },
        { name: ' 9', khachHang: 7 },
        { name: ' 10', khachHang: 10 },
        { name: ' 11', khachHang: 4 },
        { name: ' 12', khachHang: 5 },
    ];
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.total_content)}>
                <div>Tổng quan báo cáo</div>
            </div>
            <div>
                <select>
                    <option>Tuần 1</option>
                    <option>Tuần 2</option>
                    <option>Tuần 3</option>
                    <option>Tuần 4</option>
                </select>
            </div>
            <div className={clsx(styles.page_report_statistics)}>
                <div className="row">
                    <div className="col-sm-6">
                        <div className={clsx(styles.total_revenue)}>Tổng danh thu (đồng / tháng)</div>
                        <div className={clsx(styles.report)}>
                            <div className={clsx(styles.chart_report)}>
                                <LineChart width={580} height={300} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="doanhThu" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className={clsx(styles.costumer_follows)}>Tổng khách hàng theo dõi (số người / tháng)</div>

                        <div className={clsx(styles.statistics)}>
                            <div className={clsx(styles.chart_statistics)}>
                                <LineChart width={550} height={300} data={data2}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="khachHang" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportsAndStatistics;
