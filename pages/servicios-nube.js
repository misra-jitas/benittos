import Layout from "../components/layout/Layout";

function Service2() {
    return (
        <Layout>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                    src="https://simples-menus.com/restaurant/benittos?location=PVJ"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </Layout>
    );
}

export default Service2;
