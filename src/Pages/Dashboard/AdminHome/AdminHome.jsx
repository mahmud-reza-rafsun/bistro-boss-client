import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaMoneyBill } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { PiChefHatLight } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Pie, PieChart, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })
    const { data: chartData = [] } = useQuery({
        queryKey: ['chart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats');
            return res.data;
        }
    })
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const RADIAN = Math.PI / 180;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const renderCustomizedLabel = (props) => {
        const {
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            percent
        } = props;

        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const angle = -(midAngle != null ? midAngle : 0) * RADIAN;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${((percent != null ? percent : 1) * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map((data) => {
        return {
            name: data.category,
            value: data.revenue
        }
    })

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <Helmet title="Admin Home"></Helmet>
            <div className="px-4 bg-green-200 py-3 rounded-md">
                <h2 className="text-gray-600 text-[15px] font-medium">Welcome Back {user && user?.displayName} </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 z-50">
                <div className="flex items-center justify-center bg-gradient-to-r from-[#BB34F5] to-[#ca98cf] gap-9 p-2 rounded-lg text-white">
                    <div>
                        <FaMoneyBill className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">${stats?.revenue}</h3>
                        <p className="text-lg font-semibold">Revenue</p>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-[#D3A256] to-[#bba481] gap-9 p-2 rounded-lg text-white">
                    <div>
                        <FaUsers className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{stats?.users}</h3>
                        <p className="text-lg font-semibold">Customar</p>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-[#FE4880] to-[#db93a9] gap-9 p-2 rounded-lg text-white">
                    <div>
                        <PiChefHatLight className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{stats?.revenue}</h3>
                        <p className="text-lg font-semibold">Products</p>
                    </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-r from-[#6AAEFF] to-[#b0cbec] gap-9 p-2 rounded-lg text-white">
                    <div>
                        <FaTruck className="text-5xl" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold">{stats?.orders}</h3>
                        <p className="text-lg font-semibold">Orders</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-white rounded-md flex-col lg:flex-row gap-6 mt-8">
                <div className="w-1/2 lg:w-full z-0">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="revenue" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2 lg:w-full -mt-24">
                    <PieChart width={400} height={400}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                            <Legend />
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;