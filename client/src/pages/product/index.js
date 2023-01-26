import axios from 'axios';
import { useEffect } from 'react';
import { Card, Button } from 'antd';
import { Layout, theme, Typography, Radio, Space, Divider, message } from 'antd';
import React from 'react';
import { addProduct, sortProductByName, sortProductByPrice, filterProductByCategory, cacheProduct } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
        if (status === 200) {
            dispatch(filterProductByCategory({
                filteredData: data.data,
                totalNumber: data['Total number of products'],
                totalPrice: data['Total price of products'],
            }));
        }
    };
    const showMoreData = async () => {
        const cookieData = cookies.get('product');
        if (cookieData && offset !== cookieData.data.length && cookieData.data.length >= data.length) {
            dispatch(cacheProduct({
                data: cookieData.data,
                totalNumber: cookieData['totalNumber'],
                totalPrice: cookieData['totalPrice'],
                categories: cookieData.categories
            }));
            setOffset((prev) => prev + cookieData.data.length ? cookieData.data.length : 3);
            return;
        } else {
            const res = await axios.get(`api/v1/products?offset=${offset}`);
            if (res.status === 200) {
                if (res.data.data.length === 0) {
                    message.info('No more products');
                    return;
                }
                dispatch(addProduct({
                    data: res.data.data,
                    totalNumber: res.data['Total number of products'],
                    totalPrice: res.data['Total price of products'],
                    categories: res.data.categories
                }));
                setOffset((prev) => prev + 3);
                cookies.set('product', {
                    data: [...data, ...res.data.data],
                    totalNumber: totalNumber + res.data['Total number of products'],
                    totalPrice: totalPrice + res.data['Total price of products'],
                    categories
                },
                    { expires: new Date(Date.now() + 300000) });
            }
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
                <Divider orientation="left" style={{ fontSize: '17px', color: 'white', fontWeight: 'bold', marginTop: '1rem' }}>Category</Divider>
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
                <Divider orientation="left" style={{ fontSize: '17px', color: 'white', fontWeight: 'bold', marginTop: '1rem' }}>Name</Divider>
                <Radio.Group
                    onChange={(e) => {
                        dispatch(sortProductByName(e.target.value));
                    }}
                >
                    <Space direction="vertical">

                        <Radio value={false} style={{ color: 'white', marginLeft: '10px' }}>Ascending</Radio>
                        <Radio value={true} style={{ color: 'white', marginLeft: '10px' }}>Descending</Radio>
                    </Space>
                </Radio.Group>
                <hr />

                <Divider orientation="left" style={{ fontSize: '17px', color: 'white', fontWeight: 'bold', marginTop: '1rem' }}>Price</Divider>

                <Radio.Group
                    onChange={(e) => {
                        dispatch(sortProductByPrice(e.target.value));
                    }}                >
                    <Space direction="vertical">
                        <Radio value={false} style={{ color: 'white', marginLeft: '10px' }}>Ascending</Radio>
                        <Radio value={true} style={{ color: 'white', marginLeft: '10px' }}>Descending</Radio>
                    </Space>
                </Radio.Group>
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
                    <Title level={3} style={{ color: '#0857a1', margin: 0 }}>Total number of products : {totalNumber} </Title>
                    <Title level={3} style={{ color: '#0857a1', margin: 0 }}>Total price of products : {totalPrice} </Title>
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
                                    cover={<img alt="product" src={product.image} style={{ height: '250px' }} />}

                                    bordered={false}
                                    style={{
                                        width: 'calc(90% / 3)',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        marginBottom: '1rem',
                                    }}
                                >
                                    <Title level={5}>{product.category}</Title>
                                    <p>{product.product_name}</p>
                                    <p>{product.price} $</p>
                                </Card>
                            ) : filteredData.map((product) =>
                                <Card
                                    key={product.id}
                                    cover={<img alt="example" src={product.image} style={{ height: '250px' }} />}

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
