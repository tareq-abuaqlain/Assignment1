import axios from 'axios';
import { useEffect } from 'react';
import { Card, Button } from 'antd';
import { Layout, theme, Typography, Radio, Space, Divider } from 'antd';
import React from 'react';
import { addProduct, sortProductByName, sortProductByPrice, filterProductByCategory } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
const ProductPage = () => {
    const dispatch = useDispatch();
    const { data, totalNumber, totalPrice, categories, filteredData } = useSelector((state) => state.product);
    const { Header, Content, Footer, Sider } = Layout;
    const { Title } = Typography;
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [offset, setOffset] = React.useState(0);
    const [categoryState, setCategoryState] = React.useState('all');
    const filterByCategory = async (category) => {
        setCategoryState(category);
        if (category === 'all') {
            return;
        }
        const { data, status } = await axios.get(`api/v1/products/${category}`);
        console.log('data: ', data);
        if (status === 200) {
            dispatch(filterProductByCategory({
                filteredData: data.data,
                totalNumber: data['Total number of products'],
                totalPrice: data['Total price of products'],
            }));
        }
    };
    const showMoreData = async () => {
        const { data, status } = await axios.get(`api/v1/products?offset=${offset}`);
        if (status === 200) {
            dispatch(addProduct({
                data: data.data,
                totalNumber: data['Total number of products'],
                totalPrice: data['Total price of products'],
                categories: data.categories
            }));
            setOffset((prev) => prev + 3);
        }
    };
    useEffect(() => {
        showMoreData();
    }, []);
    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Divider orientation="left" style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }}>Category</Divider>
                <Radio.Group onChange={(e) => filterByCategory(e.target.value)}>
                    <Space direction="vertical">
                        <Radio
                            value='all'
                            style={{ color: 'white', marginLeft: '10px' }}
                        > All
                        </Radio>
                        {categories.map((category) => {
                            return (
                                <Radio
                                    key={category}
                                    value={category}
                                    style={{ color: 'white', marginLeft: '10px' }}
                                > {category}
                                </Radio>
                            )
                        })}
                    </Space>
                </Radio.Group>
                <hr />
                <Divider orientation="left" style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }}>Sorting By Name</Divider>
                <Radio.Group
                    onChange={(e) => {
                        dispatch(sortProductByName(e.target.value));
                    }}
                >
                    <Space direction="vertical">

                        <Radio value={false} style={{ color: 'white', marginLeft: '10px' }}>Async</Radio>
                        <Radio value={true} style={{ color: 'white', marginLeft: '10px' }}>Desc</Radio>
                    </Space>
                </Radio.Group>
                <hr />

                <Divider orientation="left" style={{ fontSize: '17px', color: 'white', fontWeight: 'bold' }}>Sorting By Price</Divider>

                <Radio.Group
                    onChange={(e) => {
                        dispatch(sortProductByPrice(e.target.value));
                    }}                >
                    <Space direction="vertical">
                        <Radio value={false} style={{ color: 'white', marginLeft: '10px' }}>Async</Radio>
                        <Radio value={true} style={{ color: 'white', marginLeft: '10px' }}>Desc</Radio>
                    </Space>
                </Radio.Group>


                {/* <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                    )}
                    
                    
                /> */}
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}
                >
                    <Title level={3} style={{ color: '#0857a1' }}>Total number of products : {totalNumber} </Title>
                    <Title level={3} style={{ color: '#0857a1' }}>Total price of products : {totalPrice} </Title>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        boxSizing: 'border-box',

                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            width: '100%',

                        }}
                    >
                        {
                            categoryState === 'all' ? data.map((product) =>
                                <Card
                                    key={product.id}
                                    cover={<img alt="example" src={'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F3c%2F173c969034c3f54a650c63e81d0b95b7b8b239c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'} style={{ height: '250px' }} />}

                                    bordered={false}
                                    style={{
                                        width: 'calc(90% / 3)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',

                                    }}
                                >
                                    <Title level={5}>{product.category}</Title>
                                    <p>{product.product_name}</p>
                                    <p>{product.price} $</p>
                                </Card>
                            ) : filteredData.map((product) =>
                                <Card
                                    key={product.id}
                                    cover={<img alt="example" src={'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F3c%2F173c969034c3f54a650c63e81d0b95b7b8b239c4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D'} style={{ height: '250px' }} />}

                                    bordered={false}
                                    style={{
                                        width: 'calc(90% / 3)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',

                                    }}
                                >
                                    <Title level={5}>{product.category}</Title>
                                    <p>{product.product_name}</p>
                                    <p>{product.price} $</p>
                                </Card>
                            )}



                    </div>
                    {categoryState === 'all' && <Button type="primary" onClick={showMoreData}>Show more</Button>}
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Web application for sells products online
                </Footer>
            </Layout>
        </Layout>
    );
};

export default ProductPage;
